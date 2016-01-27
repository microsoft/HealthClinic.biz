using Microsoft.Azure.Mobile.Server;
using Microsoft.Azure.Mobile.Server.Config;
using Microsoft.Azure.NotificationHubs;
using Newtonsoft.Json.Linq;
using System.Threading.Tasks;
using System.Web.Http;

namespace MyHealth.MobileApp.Controllers
{
    //[Authorize]
    [MobileAppController]
    public class NotifyDelayController : ApiController
    {
        public async Task Post(JObject data)
        {
            var message = new TemplatePushMessage()
            {
                { "tenantId",  data.GetValue("tenantId").Value<string>() },
                { "patientId",  data.GetValue("patientId").Value<string>() },
                { "doctorId",  data.GetValue("doctorId").Value<string>() },
                { "message", data.GetValue("message").Value<string>() }
            };

            var tags = new string[] { data.GetValue("tenantId").Value<string>() };

            await GetPushClient().SendTemplateNotificationAsync(message, tags);
        }

        NotificationHubClient GetPushClient()
        {
            // Get the settings for the server project.
            HttpConfiguration config = Configuration;

            MobileAppSettingsDictionary settings =
                config.GetMobileAppSettingsProvider().GetMobileAppSettings();

            // Get the Notification Hubs credentials for the Mobile App.
            string notificationHubName = settings.NotificationHubName;
            string notificationHubConnection = settings
                .Connections[MobileAppSettingsKeys.NotificationHubConnectionString].ConnectionString;

            // Create a new Notification Hub client.
            return NotificationHubClient
                    .CreateClientFromConnectionString(notificationHubConnection, notificationHubName);
        }

    }
}
