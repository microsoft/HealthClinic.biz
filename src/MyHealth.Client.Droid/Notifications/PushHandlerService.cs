using System;
using Android.App;
using Android.Content;
using Gcm.Client;
using Microsoft.WindowsAzure.MobileServices;
using MyHealth.Client.Droid.Views;
using Newtonsoft.Json.Linq;
using MyHealth.Client.Core;
using System.Net.Http;
using System.Net.Http.Headers;
using Android.Media;
using Newtonsoft.Json;

namespace MyHealth.Client.Droid.Notifications
{
    [Service]
    public class PushHandlerService : GcmServiceBase
    {
        public static string RegistrationID { get; private set; }
        public PushHandlerService() : base(BroadcastReceiver.senderIDs) { }

        protected async override void OnRegistered(Context context, string registrationId)
        {
            System.Diagnostics.Debug.WriteLine("The device has been registered with GCM.", "Success!");

            // Get the MobileServiceClient from the current activity instance.
            var client = MainActivity.CurrentActivity.CurrentClient;
            Push push = client.GetPush();

            try
            {
                var notificationTemplate = "{\"data\":{\"message\":\"$(message)\"}}";

                JObject templateBody = new JObject();
                templateBody["body"] = notificationTemplate;

                JObject templates = new JObject();
                templates["testGcmTemplate"] = templateBody;

                var tags = new JArray();
                tags.Add(AppSettings.DefaultTenantId);

                MainActivity.CurrentActivity.RunOnUiThread(
                    async () =>
                    {
                        await push.RegisterAsync(registrationId, templates);
                   
                        await client.InvokeApiAsync("updatetags/" + client.InstallationId, tags);
                    }
                );
            }
            catch (MobileServiceInvalidOperationException ex)
            {
                System.Diagnostics.Debug.WriteLine(
                    string.Format("Error with Azure push registration: {0}", ex.Message));
            }
        }

        protected override void OnMessage(Context context, Intent intent)
        {
            string message = string.Empty;
            // Extract the push notification message from the intent.
            if (intent.Extras.ContainsKey("message"))
            {
                message = intent.Extras.Get("message").ToString();
                var title = "Doctor Notification";

                // Create a notification manager to send the notification.
                var notificationManager =
                    GetSystemService(NotificationService) as NotificationManager;

                // Create a new intent to show the notification in the UI. 
                PendingIntent contentIntent =
                    PendingIntent.GetActivity(context, 0,
                    new Intent(this, typeof(MainActivity)), 0);

                // Create the notification using the builder.
                var builder = new Notification.Builder(context);
                builder.SetAutoCancel(true);
                builder.SetContentTitle(title);
                builder.SetContentText(message);
                builder.SetSmallIcon(Resource.Drawable.ic_launcher);
                builder.SetContentIntent(contentIntent);
                var notification = builder.Build();

                // Display the notification in the Notifications Area.
                notificationManager.Notify(1, notification);

                ShowPopUp(context, message);
            }
        }

        protected override void OnUnRegistered(Context context, string registrationId)
        {
            throw new NotImplementedException();
        }

        protected override void OnError(Context context, string errorId)
        {
            System.Diagnostics.Debug.WriteLine(
                string.Format("Error occurred in the notification: {0}.", errorId));
        }

        private static void ShowPopUp(Context context, string message)
        {
            try
            {
                AlertDialog.Builder alert = new AlertDialog.Builder(MainActivity.CurrentActivity);

                alert.SetTitle("Doctor Notification");
                alert.SetMessage(message);
                alert.SetIcon(Resource.Drawable.ic_launcher);
                alert.SetPositiveButton("Good", (senderAlert, args) => { });

                //run the alert in UI thread to display in the screen
                MainActivity.CurrentActivity.RunOnUiThread(() => { alert.Show(); });
            }
            catch (Exception ex)
            {
                System.Diagnostics.Debug.WriteLine(
                    string.Format("Error occurred in the notification: {0}.", ex.Message));
            }
        }
    }
}