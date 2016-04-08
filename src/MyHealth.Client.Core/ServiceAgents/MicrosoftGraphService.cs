using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;
using Microsoft.Graph;
using Microsoft.IdentityModel.Clients.ActiveDirectory;
using MyHealth.Client.Core.Helpers;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace MyHealth.Client.Core
{
    public class MicrosoftGraphService
    {
        private static readonly string OutlookTenandId = "outlook.com";
        private static readonly string UriSchemeDelimiter = "/";

        private static IPlatformParameters authenticationParentUiContext;
        private static GraphService graphClient = null;
		private static string accessToken = null;

        #region Properties

        public static AuthenticationContext AuthenticationContext { get; private set; }
        public static string LastTenantId { get; set; }
        public static string LoggedUser { get; set; }
        public static string LoggedUserEmail { get; set; }
        public static byte[] LoggedUserPhoto { get; set; }

        #endregion Properties

        #region Public Methods

        public static async Task SignInAsync(IPlatformParameters context)
        {
            authenticationParentUiContext = context;

			if (AppSettings.OutlookIntegration) {
				await GetGraphClientAsync ();
				return;
			}

			await SignInAsync ();
        }

		public static void SignOut ()
		{
			AuthenticationContext?.TokenCache.Clear ();

			accessToken = null;

			LastTenantId = null;
			LoggedUser = null;
			LoggedUserEmail = null;
			LoggedUserPhoto = null;
		}

        // Create an event on signed-in user's default calendar using the REST api.
        public static async Task AddEventAsync(
            string subject, DateTimeOffset startTime, DateTimeOffset endTime, 
            IEnumerable<string> attendeeEmails, string description,string locationDisplayName) {
            await EnsureAccessTokenAsync();

            if (!string.IsNullOrEmpty(accessToken))
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
                var api = "https://graph.microsoft.com/v1.0/me/events";
                var postData = JsonConvert.SerializeObject(@event);
                using (HttpClient client = new HttpClient())
                {
                    client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", accessToken);
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

        public static async Task<IEnumerable<Office365.Event>> GetEventsAsync(DateTimeOffset day)
        {
            await EnsureAccessTokenAsync();

            var end = day + TimeSpan.FromDays(1);
            string api = "https://graph.microsoft.com/v1.0/me/calendarview";
            string filter = $"?startDateTime={day.UtcDateTime.ToString("o")}&endDateTime={end.UtcDateTime.ToString("o")}";
            api = api + filter;

            List<Office365.Event> result = new List<Office365.Event>();
            using (HttpClient client = new HttpClient())
            {
                client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", accessToken);
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

        public static async Task<byte[]> GetUserPhotoAsync()
        {
            byte[] result = null;

            try
            {
                string url = "https://graph.microsoft.com/v1.0/me/photo/$value";
                using (HttpClient client = new HttpClient())
                {
                    client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", accessToken);
                    var stream = await client.GetStreamAsync(url);
                    result = ReadStream(stream);
                }
            }
            catch (Exception)
            {
                result = null; 
            }

            return result;
        }

        #endregion Public Methods

        #region Private Methods

		static byte[] ReadStream(Stream input)
		{
			byte[] buffer = new byte[16 * 1024];
			using (MemoryStream ms = new MemoryStream())
			{
				int read;
				while ((read = input.Read(buffer, 0, buffer.Length)) > 0)
				{
					ms.Write(buffer, 0, read);
				}
				return ms.ToArray();
			}
		}

        private async static Task RetrieveAccessTokenAndUserInfoAsync()
        {
            if (authenticationParentUiContext == null)
            {
                throw new InvalidOperationException("The authentication parent is invalid");
            }

			var errorAcquiringToken = false;
			AuthenticationResult result = null;

			try
			{
				if (accessToken == null)
					throw new Exception ("There was previously a sign out. We need to sign in again");

				result = await AuthenticationContext.AcquireTokenSilentAsync(
					resource: AppSettings.Security.Scope,
					clientId: AppSettings.Security.ClientId);

				if (result != null && !string.IsNullOrWhiteSpace(result.AccessToken))
					accessToken = result.AccessToken;
			}
			catch (Exception)
			{
				errorAcquiringToken = true;
			}

			if (errorAcquiringToken)
			{
				try
				{
		            result = await AuthenticationContext.AcquireTokenAsync(
			            resource: AppSettings.Security.Scope,
			            clientId: AppSettings.Security.ClientId,
			            redirectUri: AppSettings.Security.RedirectUri,
			            parameters: authenticationParentUiContext);

					if (result != null && !string.IsNullOrWhiteSpace(result.AccessToken))
		                accessToken = result.AccessToken;
				}
				catch (Exception e)
				{
					throw;
				}
			}

            LoggedUser = $"{result.UserInfo.GivenName} {result.UserInfo.FamilyName}";
            LoggedUserEmail = result.UserInfo.DisplayableId;

            LastTenantId = result.TenantId;
        }

        private static bool IsValidDomain(string email)
        {
            return email.EndsWith(AppSettings.Security.Domain);
        }

        private static async Task EnsureAccessTokenAsync()
        {
			SignOut ();

            if (string.IsNullOrEmpty(accessToken))
            {
                await RetrieveAccessTokenAndUserInfoAsync();
            }
        }

        static async Task SignInAsync()
        {
            var errorAuthenticating = false;

            try
            {
				if (AuthenticationContext == null)
                	AuthenticationContext = new AuthenticationContext(AppSettings.Security.Authority);
                
				await RetrieveAccessTokenAndUserInfoAsync();
            }
            catch (AdalException ex) when (ex.ErrorCode == AdalError.AuthenticationCanceled)
            {
                errorAuthenticating = true;
            }
            catch (AdalServiceException ex) when (ex.ErrorCode == "access_denied")
            {
                errorAuthenticating = true;
            }
            catch (Exception)
            {
                // Try again.
                errorAuthenticating = true;
            }

            if (errorAuthenticating)
                await SignInAsync();
        }

        static async Task<GraphService> GetGraphClientAsync()
        {
            var errorAuthenticating = false;

            try
            {
                await SignInAsync();

                if (!string.IsNullOrEmpty(accessToken) && IsValidDomain(LoggedUserEmail)
                    && AppSettings.OutlookIntegration)
                {
                    var tenantId = (LastTenantId ?? OutlookTenandId) + UriSchemeDelimiter;
                    var serviceRoot = new Uri("https://graph.microsoft.com/beta/" + tenantId);
                    graphClient = new GraphService(serviceRoot, async () => 
						{
							await RetrieveAccessTokenAndUserInfoAsync();

							return accessToken;
						});
                }
            }
            catch (Exception)
            {
                errorAuthenticating = true;
            }

            if (errorAuthenticating)
                graphClient = await GetGraphClientAsync();

            return graphClient;
        }

        #endregion Private Methods
    }
}
