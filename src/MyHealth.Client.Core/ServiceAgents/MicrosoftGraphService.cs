using Microsoft.Graph;
using Microsoft.Experimental.IdentityModel.Clients.ActiveDirectory;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Net.Http;
using System.Net.Http.Headers;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace MyHealth.Client.Core
{
    public class MicrosoftGraphService
    {
        public static void SetClientId(string id) { clientId = id; }
        public static void SetRedirectUri(Uri uri) { redirectUri = uri; }
        public static void SetAuthenticationUiContext(IPlatformParameters UiContext) { authenticationParentUiContext = UiContext; }


        private static string clientId = null;
        private static string ClientId
        {
            get
            {
                if (string.IsNullOrEmpty(clientId))
                {
                    throw new Exception($"Please call {nameof(MicrosoftGraphService)}.SetClientId() with a valid client Id first.");
                }

                return clientId;
            }
        }

        private static Uri redirectUri = null;
        private static Uri RedirectUri
        {
            get
            {
                if (redirectUri == null)
                {
                    throw new Exception($"Please call {nameof(MicrosoftGraphService)}.{nameof(SetRedirectUri)}() with a correct Uri first.");
                }

                return redirectUri;
            }
        }

        private static IPlatformParameters authenticationParentUiContext;
        public static IPlatformParameters AuthenticationParentUiContext
        {
            get
            {
                if (authenticationParentUiContext == null)
                {
                    throw new Exception($"Please call {nameof(MicrosoftGraphService)}.{nameof(SetAuthenticationUiContext)}() with a valid UI context first.");
                }

                return authenticationParentUiContext;
            }
        }

        const string AADInstance = "https://login.microsoftonline.com/";
        static readonly string CommonAuthority = AADInstance + "common";
        const string ResourceBetaUrl = "https://graph.microsoft.com/beta/";
        const string ResourceV1ReleaseUrl = "https://graph.microsoft.com/v1.0/";
        const string ResourceUrl = "https://graph.microsoft.com/";
        static readonly string[] PermissionScope = new[] { "https://graph.microsoft.com/calendars.readwrite" };
        public static string AccessToken = null;
        public static AuthenticationContext AuthenticationContext { get; private set; }
        public static string LastTenantId { get; set; }
        public static string LoggedInUser { get; private set; }
        public static string LoggedInUserEmail { get; private set; }

        private static GraphService graphClient = null;

        private async static Task<string> GetAccessTokenAsync(AuthenticationContext context, string[] scope)
        {
            if (AuthenticationParentUiContext == null)
            {
                throw new InvalidOperationException("The authentication parent is invalid");
            }

            AuthenticationResult result = await context.AcquireTokenAsync(
                            scope: scope,
                            additionalScope: null,
                            clientId: ClientId,
                            redirectUri: RedirectUri,
                            parameters: AuthenticationParentUiContext);

            if (!string.IsNullOrEmpty(result.Token))
            {
                AccessToken = result.Token;
                LoggedInUser = result.UserInfo.Name;
                LoggedInUserEmail = result.UserInfo.DisplayableId;
                LastTenantId = result.TenantId;
            }
            else
            {
                return null;
            }

            return AccessToken;
        }

        public static async Task<GraphService> GetGraphClientAsync(string[] scope)
        {
            if (graphClient == null)
            {
                try
                {
                    AuthenticationContext = new AuthenticationContext(CommonAuthority, new TokenCache());

                    var token = await GetAccessTokenAsync(AuthenticationContext, scope);
                    if (string.IsNullOrEmpty(token))
                    {
                        // User cancelled sign-in
                        return null;
                    }
                    else
                    {
                        var tenantId = (LastTenantId ?? "outlook.com") + "/";
                        Uri serviceRoot = new Uri(ResourceBetaUrl + tenantId);
                        graphClient = new GraphService(serviceRoot, async () => await GetAccessTokenAsync(AuthenticationContext, scope));
                    }
                }
                catch (AdalException ex)
                {
                    Debug.WriteLine("Error from Adal: " + ex.ToString());
                    AuthenticationContext.TokenCache.Clear();
                    return null;
                }
                catch (Exception ex)
                {
                    Debug.WriteLine("Exception thrown: " + ex.ToString());
                    AuthenticationContext.TokenCache.Clear();
                    return null;
                }
            }

            return graphClient;
        }

        public static async Task SignInAsync()
        {
            await GetGraphClientAsync(PermissionScope);
        }

        public static void SignOut()
        {
            AuthenticationContext.TokenCache.Clear();
            graphClient = null;
            LoggedInUser = null;
            LoggedInUserEmail = null;
        }

        /// <summary>
        /// This method calls GraphService.Me.Events.AddEventAsync() to create an event
        /// on singed-in user's default calendar.  Due to a bug after the call does not
        /// the execution flow does not return back to the next line after the call.
        /// </summary>
        /// <param name="subject"></param>
        /// <param name="startTime"></param>
        /// <param name="endTime"></param>
        /// <param name="attendeeEmails"></param>
        /// <param name="description"></param>
        /// <param name="locationDisplayName"></param>
        /// <returns></returns>
        public static async Task AddEventAsync(
            string subject,
            DateTimeOffset startTime,
            DateTimeOffset endTime,
            IEnumerable<string> attendeeEmails,
            string description,
            string locationDisplayName)
        {
            var client = await GetGraphClientAsync(PermissionScope);
            if (client == null)
            {
                throw new Exception("Error getting Microsoft Graph service client");
            }

            var @event = new Event();
            @event.Subject = subject;
            @event.Start = startTime;
            @event.End = endTime;
            @event.Location = new Location() { DisplayName = locationDisplayName };
            var listOfAttendees = new List<Attendee>();

            foreach (var email in attendeeEmails)
            {
                var name = await GetUserDisplayNameAsync(email);
                var attendee = new Attendee() { EmailAddress = new EmailAddress() { Address = email, Name = name } };
                listOfAttendees.Add(attendee);
            }
            @event.Attendees = listOfAttendees;
            var itemBody = new ItemBody();
            itemBody.ContentType = BodyType.Text;
            itemBody.Content = description;
            @event.Body = itemBody;
            // The following call never returns.  A bug was logged against O365 client library,
            // but it later was resolved as Not Repro.
            await client.Me.Events.AddEventAsync(@event);

            // So have to workaround using Rest Api below.
        }

        private static async Task<string> GetUserDisplayNameAsync(string email)
        {
            var client = await GetGraphClientAsync(PermissionScope);
            if (client != null)
            {
                var user = await client.users.Where((IUser u) => u.userPrincipalName == email).ExecuteSingleAsync();
                return user.displayName;
            }
            else
            {
                return email;
            }
        }

        /// <summary>
        /// Create an event on signed-in user's default calendar using the REST api.
        /// </summary>
        /// <param name="subject"></param>
        /// <param name="startTime"></param>
        /// <param name="endTime"></param>
        /// <param name="attendeeEmails"></param>
        /// <param name="description"></param>
        /// <param name="locationDisplayName"></param>
        /// <returns></returns>
        public static async Task AddEventUsingRestApiAsync(
            string subject,
            DateTimeOffset startTime,
            DateTimeOffset endTime,
            IEnumerable<string> attendeeEmails,
            string description,
            string locationDisplayName)
        {
            await EnsureAccessTokenAsync();

            if (!string.IsNullOrEmpty(AccessToken))
            {
                var @event = new
                {
                    Subject = subject,
                    Body = new
                    {
                        ContentType = "Text",
                        Content = description
                    },
                    Start = new
                    {
                        DateTime = (startTime - DateTimeOffset.Now.Offset).UtcDateTime.ToString("o"),
                        TimeZone = "UTC"
                    },
                    End = new
                    {
                        DateTime = (endTime - DateTimeOffset.Now.Offset).UtcDateTime.ToString("o"),
                        TimeZone = "UTC"
                    },
                    Attendees = attendeeEmails.Select(a => new { EmailAddress = new { Address = a, Name = a } }).ToArray(),
                    Location = new
                    {
                        DisplayName = locationDisplayName
                    }
                };
                var api = $"{ResourceV1ReleaseUrl}me/events";
                var postData = JsonConvert.SerializeObject(@event);
                using (HttpClient client = new HttpClient())
                {
                    client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", AccessToken);
                    client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                    var content = new StringContent(postData, Encoding.UTF8, "application/json");
                    var response = await client.PostAsync(api, content);
                    if (!response.IsSuccessStatusCode)
                    {
                        var responseString = await response.Content.ReadAsStringAsync();
                        Debug.WriteLine("Unseccessful request: " + response);
                    }
                }
            }
        }

        public static async Task<IEnumerable<Office365.Event>> GetEventsUsingRestApiAsync(DateTimeOffset day)
        {
            await EnsureAccessTokenAsync();

            var end = day + TimeSpan.FromDays(1);
            string api = $"{ResourceV1ReleaseUrl}me/calendarview";
            string filter = $"?startDateTime={day.UtcDateTime.ToString("o")}&endDateTime={end.UtcDateTime.ToString("o")}";
            api = api + filter;

            List<Office365.Event> result = new List<Office365.Event>();
            using (HttpClient client = new HttpClient())
            {
                client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", AccessToken);
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                var response = await client.GetAsync(api);
                var responseString = await response.Content.ReadAsStringAsync();
                if (!response.IsSuccessStatusCode)
                {
                    Debug.WriteLine("Unseccessful request: " + response);
                }
                else
                {
                    var data = JObject.Parse(responseString).SelectToken("value");
                    result = JsonConvert.DeserializeObject<List<Office365.Event>>(data.ToString());
                }
            }

            return result;
        }

        public static async Task<IEnumerable<IEvent>> GetEventsAsync(DateTimeOffset day)
        {
            var end = day + TimeSpan.FromDays(1);
            var client = await GetGraphClientAsync(PermissionScope);
            var events = await client.Me.Calendar.Events.Where((IEvent e) => e.Start >= day && e.Start <= end).ExecuteAsync();
            List<IEvent> result = new List<IEvent>();
            while (events != null)
            {
                result.AddRange(events.CurrentPage);
                events = await events.GetNextPageAsync();
            };

            return result;
        }

        public static async Task<IEnumerable<Event>> GetEventsJsonAsync()
        {
            await EnsureAccessTokenAsync();
            var result = new List<Event>();
            if (!string.IsNullOrEmpty(AccessToken))
            {

                var api = $"{ResourceBetaUrl}me/events";
                await EnsureAccessTokenAsync();
                var json = await GetAsync(api, AccessToken);
                if (!string.IsNullOrEmpty(json))
                {
                    var data = JObject.Parse(json).SelectToken("value");
                    result = JsonConvert.DeserializeObject<List<Event>>(data.ToString());
                }
            }

            return result;
        }

        private static async Task EnsureAccessTokenAsync()
        {
            if (AuthenticationContext == null)
            {
                AuthenticationContext = new AuthenticationContext(CommonAuthority, new TokenCache());
            }

            if (string.IsNullOrEmpty(AccessToken))
            {
                AccessToken = await GetAccessTokenAsync(AuthenticationContext, PermissionScope);
            }
        }

        public static async Task<string> GetAsync(string url, string token)
        {
            using (HttpClient client = new HttpClient())
            {
                client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", token);
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                var response = await client.GetAsync(url);
                var responseString = await response.Content.ReadAsStringAsync();
                if (response.IsSuccessStatusCode)
                {
                    return responseString;
                }

                Debug.WriteLine("Unseccessful request: " + response);
                return null;
            }
        }
    }
}
