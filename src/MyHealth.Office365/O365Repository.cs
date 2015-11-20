using Microsoft.AspNet.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.PlatformAbstractions;
using Microsoft.IdentityModel.Clients.ActiveDirectory;
using MyHealth.Model;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Security.Cryptography.X509Certificates;
using System.Text;
using System.Threading.Tasks;

namespace MyHealth.Office365
{
    /// <summary>
    /// This class provides app-only access to Office 365 calendars. For more information please refer to
    ///     https://msdn.microsoft.com/en-us/office/office365/howto/building-service-apps-in-office-365
    /// </summary>
    public class O365Repository
    {
        public IConfiguration Configuration { get; private set; }

        public Office365Configuration O365Config { get; private set; }

        string applicationBasePath { get; set; }

        public O365Repository(IHostingEnvironment env, IApplicationEnvironment appEnv)
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(appEnv.ApplicationBasePath)
                .AddJsonFile("appsettings.json");

            builder.AddEnvironmentVariables();
            Configuration = builder.Build();
            applicationBasePath = appEnv.ApplicationBasePath;

            O365Config = ReadConfiguration();
        }

        private Office365Configuration ReadConfiguration()
        {
            // NOTE: in a real app, this TenantId should be persisted somewhere after the O365 admin
            // sign up to grant access to their O365 Organization. The persisted TenantId should be used until
            // user starts over and signs on as another tenant from the sign-up page, at which time the 
            // new TenantId is persisted for later use.
            // For demo-purpse we just hard-coded it in the config file.

            return new Office365Configuration()
            {
                TenantId = Configuration["Office365Integration:DebugTenantId"],
                AuthorizationUri = Configuration["Office365Integration:AuthorizationUri"],
                GraphResourceUri = Configuration["Office365Integration:GraphResourceUri"],
                AccessTokenUri = Configuration["Office365Integration:AccessTokenUri"],
                ApiBaseUrl = Configuration["Office365Integration:ApiBaseUrl"],
                EventsApiFormatString = Configuration["Office365Integration:EventsApiFormatString"],
                UserProfileApiFormatString = Configuration["Office365Integration:UserProfileApiFormatString"],
                UserPhotoApiFormatString = Configuration["Office365Integration:UserPhotoApiFormatString"],
                CalendarApiFormatString = Configuration["Office365Integration:CalendarApiFormatString"],

                ClientCertificatePfx = Configuration["Office365Integration:ClientCertificatePfx"],
                ClientId = Configuration["Office365Integration:ClientId"],
                ClientCertificatePassword = Configuration["Office365Integration:ClientCertificatePassword"],
                DebugOffice365User = Configuration["Office365Integration:DebugOffice365User"],
            };
        }

        public async Task<string> GetAppOnlyAccessToken(string resource)
        {
            string authority = O365Config.AuthorizationUri.Replace("common", O365Config.TenantId);

            AuthenticationContext authenticationContext = new AuthenticationContext(authority, false);
            
            // Warning: this is for demo-only.  In a real app the certificate should be stored in a more secure place,
            // for example, the Certificate Store.
            string certFile = Path.Combine(applicationBasePath, "content", O365Config.ClientCertificatePfx);
            X509Certificate2 cert = new X509Certificate2(certFile, "", 
                X509KeyStorageFlags.MachineKeySet | X509KeyStorageFlags.PersistKeySet | X509KeyStorageFlags.PersistKeySet | X509KeyStorageFlags.Exportable);

            ClientAssertionCertificate cac = new ClientAssertionCertificate(
                O365Config.ClientId,
                cert.Export(X509ContentType.Pkcs12, O365Config.ClientCertificatePassword),
                O365Config.ClientCertificatePassword);

            var authenticationResult = await authenticationContext.AcquireTokenAsync(resource, cac);
            return authenticationResult.AccessToken;
        }

        public async Task AddEventAppOnly(
            string userObjectIdOrPrincipalName,
            string subject,
            DateTimeOffset startTime,
            DateTimeOffset endTime,
            IEnumerable<string> attendeeEmails,
            string description,
            string locationDisplayName)
        {
            var accessToken = await GetAppOnlyAccessToken(O365Config.AccessTokenUri);
            string api = string.Format(O365Config.EventsApiFormatString, O365Config.ApiBaseUrl, O365Config.TenantId, userObjectIdOrPrincipalName);

            var @event = new 
            {
                Subject = subject,
                Body = new
                {
                    ContentType =  BodyType.Text.ToString(),
                    Content = description
                },
                Start = new
                {
                    DateTime = startTime.UtcDateTime.ToString("o"),
                    TimeZone = "UTC"
                },
                End = new
                {
                    DateTime = endTime.UtcDateTime.ToString("o"),
                    TimeZone = "UTC"
                },
                Attendees = attendeeEmails.Select(a => new { EmailAddress = new { Address = a, Name = a } }).ToArray(),
                Location = new
                {
                    DisplayName = locationDisplayName
                }
            };

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

        public async Task<IEnumerable<Doctor>> GetAADUsersAsync()
        {
            var accessToken = await GetAppOnlyAccessToken(O365Config.GraphResourceUri);
            string api = string.Format(O365Config.UserProfileApiFormatString, O365Config.ApiBaseUrl, O365Config.TenantId);

            Func<HttpRequestMessage> requestCreator = () =>
            {
                HttpRequestMessage request = new HttpRequestMessage(HttpMethod.Get, api);
                request.Headers.TryAddWithoutValidation("Content-Type", "application/json");
                return request;
            };

            string json = await HttpRequestHelper.MakeHttpRequestAsync(requestCreator, accessToken);
            var data = JObject.Parse(json).SelectToken("value");
            List<GraphUser> users = JsonConvert.DeserializeObject<List<GraphUser>>(data.ToString());
            List<Doctor> results = new List<Doctor>();
            foreach (var user in users)
            {
                results.Add(new Doctor { Email = user.userPrincipalName });
            }

            return results;
        }

        public async Task<byte[]> GetUserPhotoAsync(string userObjectIdOrPrincipalName)
        {
            var accessToken = await GetAppOnlyAccessToken(O365Config.AccessTokenUri);
            string api = string.Format(O365Config.UserPhotoApiFormatString, O365Config.ApiBaseUrl, O365Config.TenantId, userObjectIdOrPrincipalName);

            Func<HttpRequestMessage> requestCreator = () =>
            {
                HttpRequestMessage request = new HttpRequestMessage(HttpMethod.Get, api);
                request.Headers.TryAddWithoutValidation("Content-Type", "image/jpg");
                return request;
            };
            using (HttpClient client = new HttpClient())
            {
                string clientRequestId = Guid.NewGuid().ToString();
                client.DefaultRequestHeaders.Add("client-request-id", clientRequestId);
                client.DefaultRequestHeaders.Add("return-client-request-id", "true");
                client.DefaultRequestHeaders.Add("UserAgent", "HealthClinicBiz/0.1");
                client.DefaultRequestHeaders.Add("Authorization", String.Format("Bearer {0}", accessToken));

                using (HttpRequestMessage request = requestCreator.Invoke())
                {
                    try
                    {
                        HttpResponseMessage httpResponse = await client.SendAsync(request);
                        if (httpResponse.StatusCode == HttpStatusCode.OK)
                        {
                            return await httpResponse.Content.ReadAsByteArrayAsync();
                        }
                        else
                        {
                            string responseString = await httpResponse.Content.ReadAsStringAsync();
                            return Convert.FromBase64String(FakeImages.UnknownUserImage);
                        }
                    }
                    catch (Exception)
                    {
                        return null;
                    }
                }
            }
        }

        private async Task<IEnumerable<Event_Beta>> GetUserEventsForTimeRangeBeta(string userObjectIdOrPrincipalName, DateTimeOffset start, DateTimeOffset end, int pageSize = 10, int pageCount = 0)
        {
            var accessToken = await GetAppOnlyAccessToken(O365Config.AccessTokenUri);
            string api = string.Format(O365Config.CalendarApiFormatString.Replace("/events", "/calendarview"),
                O365Config.ApiBaseUrl.Replace("/v1.0/", "/beta/"),
                O365Config.TenantId, userObjectIdOrPrincipalName);

            var filter = $"?startDateTime={start.UtcDateTime.ToString("o")}&endDateTime={end.UtcDateTime.ToString("o")}&$top={pageSize}&$skip={pageCount}";
            api = api + filter;

            Func<HttpRequestMessage> requestCreator = () =>
            {
                HttpRequestMessage request = new HttpRequestMessage(HttpMethod.Get, api);
                request.Headers.TryAddWithoutValidation("Content-Type", "application/json");
                return request;
            };

            string json = await HttpRequestHelper.MakeHttpRequestAsync(requestCreator, accessToken);
            var data = JObject.Parse(json).SelectToken("value");
            var result = JsonConvert.DeserializeObject<List<Event_Beta>>(data.ToString());
            return result;
        }

        private async Task<IEnumerable<Event>> GetUserEventsForTimeRange(string userObjectIdOrPrincipalName, DateTimeOffset start, DateTimeOffset end, int pageSize = 10, int pageCount = 0)
        {
            var accessToken = await GetAppOnlyAccessToken(O365Config.AccessTokenUri);
            string api = string.Format(O365Config.CalendarApiFormatString.Replace("/events", "/calendarview"),
                O365Config.ApiBaseUrl,
                O365Config.TenantId, userObjectIdOrPrincipalName);

            var filter = $"?startDateTime={start.UtcDateTime.ToString("o")}&endDateTime={end.UtcDateTime.ToString("o")}&$top={pageSize}&$skip={pageCount}";
            api = api + filter;

            Func<HttpRequestMessage> requestCreator = () =>
            {
                HttpRequestMessage request = new HttpRequestMessage(HttpMethod.Get, api);
                request.Headers.TryAddWithoutValidation("Content-Type", "application/json");
                return request;
            };

            string json = await HttpRequestHelper.MakeHttpRequestAsync(requestCreator, accessToken);
            var data = JObject.Parse(json).SelectToken("value");
            var result = JsonConvert.DeserializeObject<List<Event>>(data.ToString());
            return result;
        }

        /// <summary>
        /// Retrieves given user's calender events in a given month.
        /// </summary>
        /// <param name="userObjectIdOrPrincipalName"></param>
        /// <param name="month"></param>
        /// <returns></returns>
        public async Task<IEnumerable<Event_Beta>> GetUserEventsForMonthAsync_Beta(string userObjectIdOrPrincipalName, DateTimeOffset? month, int pageSize = 10, int pageCount = 0)
        {
            DateTimeOffset start;
            DateTimeOffset end;
            if (month != null)
            {
                start = new DateTimeOffset(new DateTime(month.Value.Date.Year, month.Value.Date.Month, 1));
                end = start + TimeSpan.FromDays(DateTime.DaysInMonth(month.Value.Date.Year, month.Value.Date.Month));
            }
            else
            {
                var currentDate = DateTime.UtcNow.ToLocalTime().Date;
                start = new DateTimeOffset(new DateTime(currentDate.Date.Year, currentDate.Date.Month, 1));
                end = start + TimeSpan.FromDays(DateTime.DaysInMonth(currentDate.Year, currentDate.Month));
            }

            return await GetUserEventsForTimeRangeBeta(userObjectIdOrPrincipalName, start, end, pageSize, pageCount);
        }

        /// <summary>
        /// Retrieves given user's calender events in a given month.
        /// </summary>
        /// <param name="userObjectIdOrPrincipalName"></param>
        /// <param name="month"></param>
        /// <returns></returns>
        public async Task<IEnumerable<Event>> GetUserEventsForMonthAsync(string userObjectIdOrPrincipalName, DateTimeOffset? month, int pageSize = 10, int pageCount = 0)
        {
            DateTimeOffset start;
            DateTimeOffset end;
            if (month != null)
            {
                start = new DateTimeOffset(new DateTime(month.Value.Date.Year, month.Value.Date.Month, 1));
                end = start + TimeSpan.FromDays(DateTime.DaysInMonth(month.Value.Date.Year, month.Value.Date.Month));
            }
            else
            {
                var currentDate = DateTime.UtcNow.ToLocalTime().Date;
                start = new DateTimeOffset(new DateTime(currentDate.Date.Year, currentDate.Date.Month, 1));
                end = start + TimeSpan.FromDays(DateTime.DaysInMonth(currentDate.Year, currentDate.Month));
            }

            return await GetUserEventsForTimeRange(userObjectIdOrPrincipalName, start, end, pageSize, pageCount);
        }

        /// <summary>
        /// Retrieves given user's calender events on a given day.
        /// </summary>
        /// <param name="userObjectIdOrPrincipalName"></param>
        /// <param name="day"></param>
        /// <returns></returns>
        public async Task<IEnumerable<Event_Beta>> GetUserEventsForDayAsync_Beta(string userObjectIdOrPrincipalName, DateTimeOffset? day, int pageSize = 10, int pageCount = 0)
        {
            DateTimeOffset start;
            DateTimeOffset end;
            if (day != null)
            {
                start = new DateTimeOffset(day.Value.Date);
            }
            else
            {
                start = new DateTimeOffset(DateTime.Now.Date);
            }

            end = start + TimeSpan.FromDays(1);

            return await GetUserEventsForTimeRangeBeta(userObjectIdOrPrincipalName, start, end, pageSize, pageCount);
        }

        public async Task<IEnumerable<Event>> GetUserEventsForDayAsync(string userObjectIdOrPrincipalName, DateTimeOffset? day, int pageSize = 10, int pageCount = 0)
        {
            DateTimeOffset start;
            DateTimeOffset end;
            if (day != null)
            {
                start = new DateTimeOffset(day.Value.Date);
            }
            else
            {
                start = new DateTimeOffset(DateTime.Now.Date);
            }

            end = start + TimeSpan.FromDays(1);

            return await GetUserEventsForTimeRange(userObjectIdOrPrincipalName, start, end, pageSize, pageCount);
        }

        public async Task<IEnumerable<TimeSlot>> GetUserOpenTimeSlots30MinutesOrLongerAsync(string userObjectIdOrPrincipalName, DateTimeOffset day)
        {
            var appointments = await GetUserEventsForDayAsync_Beta(userObjectIdOrPrincipalName, day);
            return GetOpenSlots30MinutesOrLonger(day, appointments);
        }

        private static TimeSpan minimumOpenSlotLength { get; } = TimeSpan.FromMinutes(30);

        private static IEnumerable<TimeSlot> GetOpenSlots30MinutesOrLonger(DateTimeOffset day, IEnumerable<Event_Beta> events)
        {
            // NOTE: This demo is not a real app, we use "Eastern Standard Time" as default Time Zone but in a real
            // application should be better to be able to manage different time zones
            TimeSpan offset = TimeZoneInfo.FindSystemTimeZoneById("Eastern Standard Time").BaseUtcOffset;
            var serverOffset = TimeZoneInfo.Local.BaseUtcOffset;

            DateTimeOffset startOfDay = new DateTimeOffset(day.Year, day.Month, day.Day, 7, 0, 0, offset);
            DateTimeOffset endOfDay = startOfDay + TimeSpan.FromHours(10); // 5pm
            var eventsWithinWorkingHour = events.Where(e =>
            {
                var eventStart = e.Start.DateTime + serverOffset;
                var eventEnd = e.End.DateTime + serverOffset;
                return eventStart >= startOfDay && eventEnd < endOfDay;
            }).ToList();
            if (eventsWithinWorkingHour.Count() == 0)
            {
                yield return new TimeSlot { Start = startOfDay, LengthInMinutes = (int)TimeSpan.FromHours(10).TotalMinutes };
            }
            else
            {
                var timespanBeforeFirstEvent = eventsWithinWorkingHour.First().Start.DateTime + serverOffset - startOfDay;
                if (timespanBeforeFirstEvent >= minimumOpenSlotLength)
                    yield return new TimeSlot { Start = startOfDay, LengthInMinutes = (int)timespanBeforeFirstEvent.TotalMinutes };
                for (int i = 0; i < eventsWithinWorkingHour.Count - 1; i++)
                {
                    var openSlot = eventsWithinWorkingHour[i + 1].Start.DateTime - eventsWithinWorkingHour[i].End.DateTime;
                    if (openSlot >= minimumOpenSlotLength)
                    {
                        yield return new TimeSlot { Start = eventsWithinWorkingHour[i].End.DateTime + serverOffset, LengthInMinutes = (int)openSlot.TotalMinutes };
                    }
                }
                var timespanAfterLastEvent = endOfDay - eventsWithinWorkingHour.Last().End.DateTime - serverOffset;
                if (timespanAfterLastEvent >= minimumOpenSlotLength)
                {
                    yield return new TimeSlot { Start = eventsWithinWorkingHour.Last().End.DateTime + serverOffset, LengthInMinutes = (int)timespanAfterLastEvent.TotalMinutes };
                }
            }
        }
    }
}
