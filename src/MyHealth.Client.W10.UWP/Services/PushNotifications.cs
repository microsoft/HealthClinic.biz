using Microsoft.WindowsAzure.MobileServices;
using MyHealth.Client.Core;
using Newtonsoft.Json.Linq;
using System;
using Windows.Networking.PushNotifications;

namespace MyHealth.Client.W10.UWP.Services
{
    class PushNotifications
    {
        static MobileServiceClient client;

        public async static void UploadChannel()
        {
            PushNotificationChannel channel;
            try
            {
                channel = await PushNotificationChannelManager
                .CreatePushNotificationChannelForApplicationAsync();

                channel.PushNotificationReceived += channel_PushNotificationReceived;
            }
            catch (Exception)
            {
                // TODO: Do something when Push Notifications are not available?
                return;
            }

            try
            {
                JObject templateBody = new JObject();
                templateBody["body"] = String.Format(@"<toast>
                        <visual>
                            <binding template=""ToastText01"">
                                <text id=""1"">$(message)</text>
                            </binding>
                        </visual>
                        </toast>");

                JObject wnsToastHeaders = new JObject();
                wnsToastHeaders["X-WNS-Type"] = "wns/toast";
                templateBody["headers"] = wnsToastHeaders;

                JObject templates = new JObject();
                templates["MyHealthClinicTemplate"] = templateBody;

                client = new MobileServiceClient(AppSettings.MobileAPIUrl);

                await client.GetPush()
                    .RegisterAsync(channel.Uri, templates);

                // Add a new tag to get only the notification for the default patientId.
                var tags = new JArray();
                tags.Add(AppSettings.DefaultTenantId);

                // Call the custom API '/api/updatetags/<installationid>' with the JArray of tags.
                var response = await client
                    .InvokeApiAsync("updatetags/"
                    + client.InstallationId, tags);

            }
            catch (Exception)
            {
                // Handle Exception
            }
        }

        static void channel_PushNotificationReceived(PushNotificationChannel sender,
            PushNotificationReceivedEventArgs args)
        {

       
        }


    }
}
