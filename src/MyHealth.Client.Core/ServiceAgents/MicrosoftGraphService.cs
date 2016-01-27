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
        private const string AADInstance = "https://login.microsoftonline.com/";
        private static readonly string CommonAuthority = AADInstance + "common";
        private const string ResourceBetaUrl = "https://graph.microsoft.com/beta/";
        private const string ResourceV1ReleaseUrl = "https://graph.microsoft.com/v1.0/";
        private static readonly string[] PermissionScope = new[] { "https://graph.microsoft.com/calendars.readwrite" };
        private static readonly string OutlookTenandId = "outlook.com";
        private static readonly string UriSchemeDelimiter = "/";

        private static string clientId = null;
        private static Uri redirectUri = null;
        private static IPlatformParameters authenticationParentUiContext;
        private static GraphService graphClient = null;

        public static string AccessToken = null;

        #region Properties

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

        public static AuthenticationContext AuthenticationContext { get; private set; }
        public static string LastTenantId { get; set; }
        public static string LoggedInUser { get; private set; }
        public static string LoggedInUserEmail { get; private set; }

        #endregion Properties

        #region Private Methods

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

        #endregion Private Methods

        #region Public Methods

        public static void SetClientId(string id)
        {
            clientId = id;
        }

        public static void SetRedirectUri(Uri uri)
        {
            redirectUri = uri;
        }

        public static void SetAuthenticationUiContext(IPlatformParameters UiContext)
        {
            authenticationParentUiContext = UiContext;
        }

        public static async Task<GraphService> GetGraphClientAsync(string[] scope)
        {
            if (graphClient != null)
            {
                return graphClient;
            }

            var errorAuthenticating = false;

            try
            {
                AuthenticationContext = new AuthenticationContext(CommonAuthority, new TokenCache());

                var token = await GetAccessTokenAsync(AuthenticationContext, scope);

                if (string.IsNullOrEmpty(token))
                {
                    return null;
                }

                var tenantId = (LastTenantId ?? OutlookTenandId) + UriSchemeDelimiter;
                var serviceRoot = new Uri(ResourceBetaUrl + tenantId);

                graphClient = new GraphService(serviceRoot, async () =>
                    await GetAccessTokenAsync(AuthenticationContext, scope));
            }
            catch (AdalException ex) when (ex.ErrorCode == AdalError.AuthenticationCanceled)
            {
                // User tried closing sign-in window
                errorAuthenticating = true;
            }
            catch (AdalServiceException ex) when (ex.ErrorCode == "access_denied")
            {
                // The permission scope asked is denied for this user:
                // AADSTS65005: 
                //   Dynamic scope is invalid: scope Calendars.ReadWrite does not exist on application 00000003-0000-0000-c000-000000000000. 
                //   Request ID: ea763e39-1df1-437f-80f5-4578482e9ea1, Timestamp: 01/20/2016 11:00:05\r\n
                //   Trace ID: 4af73768-8231-490f-8840-f059b650b574\r\n
                //   Correlation ID: 40a55660-bf44-4b69-b5d0-ed2306914f52\r\n
                //   Timestamp: 2016-01-20 11:00:04Z

                // This same exception is used when logging-in with a valid O365 account,
                // and user cancels "asks for permission" dialog

                // TODO: Workarround to avoid the scope issue
                errorAuthenticating = false;
            }
            catch (Exception)
            {
                // Whatever else happens, re-sign-in
                errorAuthenticating = true;
            }

            if (errorAuthenticating)
            {
                graphClient = await GetGraphClientAsync(scope);
            }

            return graphClient;
        }

        /// <summary>
        /// Enforces a successful sign-in to access the app.
        /// </summary>
        /// <returns></returns>
        public static async Task SignInAsync()
        {
            await GetGraphClientAsync(PermissionScope);
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

        #endregion Public Methods
    }
}
