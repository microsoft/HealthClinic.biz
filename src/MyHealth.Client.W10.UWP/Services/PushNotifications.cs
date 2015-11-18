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

                client = new MobileServiceClient(AppSettings.MobileAPIUrl, AppSettings.MobileAPIGateway, string.Empty);

                await client.GetPush()
                    .RegisterAsync(channel.Uri, templates);

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
