using Cirrious.CrossCore;
using Cirrious.MvvmCross.Touch.Platform;
using Cirrious.MvvmCross.ViewModels;
using MyHealth.Client.Core.ViewModels;
using Foundation;
using UIKit;
using Xamarin.Forms;
using System.Diagnostics;
using Microsoft.WindowsAzure.MobileServices;
using MyHealth.Client.Core;
using HockeyApp;
using System;
using System.Threading.Tasks;
using ObjCRuntime;
using Newtonsoft.Json.Linq;

namespace MyHealth.Client.iOS
{
    [Register("AppDelegate")]
    public partial class MyHealthAppDelegate : MvxApplicationDelegate
    {   
        public UITabBarController Tabs { get; set; }

		// Push Notifications related vars
		private MobileServiceClient _client;

        UIWindow _window;

        public override bool FinishedLaunching(UIApplication app, NSDictionary options) {
            SetupNotifications();

            //We MUST wrap our setup in this block to wire up
            // Mono's SIGSEGV and SIGBUS signals
            HockeyApp.Setup.EnableCustomCrashReporting(() =>
            {
                //Get the shared instance
                var manager = BITHockeyManager.SharedHockeyManager;
                BITHockeyManager.SharedHockeyManager.DebugLogEnabled = true;

                //Configure it to use our APP_ID
                manager.Configure(AppSettings.HockeyAppiOSAppID);

                //Start the manager
                manager.StartManager();

                //Authenticate (there are other authentication options)
                //manager.Authenticator will be null if HockeyAppiOSAppID was not set
                if (manager.Authenticator != null)
                {
                manager.Authenticator.AuthenticateInstallation();

                //Rethrow any unhandled .NET exceptions as native iOS 
                // exceptions so the stack traces appear nicely in HockeyApp
                TaskScheduler.UnobservedTaskException += (sender, e) =>
                    HockeyApp.Setup.ThrowExceptionAsNative(e.Exception);

                    AppDomain.CurrentDomain.UnhandledException += (sender, e) =>
                        HockeyApp.Setup.ThrowExceptionAsNative(e.ExceptionObject);
                }
            });

            Forms.Init();

            _window = new UIWindow(UIScreen.MainScreen.Bounds);

            Akavache.BlobCache.ApplicationName = "MyHealth";

            var setup = new Setup(this, _window);
            setup.Initialize();

            var startup = Mvx.Resolve<IMvxAppStart>();
            startup.Start();

            _window.MakeKeyAndVisible();

            var shouldPerformAdditionalDelegateHandling = true;

            // Get possible shortcut item
            if (options != null)
            {
                LaunchedShortcutItem = options[UIApplication.LaunchOptionsShortcutItemKey] as UIApplicationShortcutItem;
                shouldPerformAdditionalDelegateHandling = (LaunchedShortcutItem == null);
            }

            return shouldPerformAdditionalDelegateHandling;
        }

        #region Quick Action
        public UIApplicationShortcutItem LaunchedShortcutItem { get; set; }
        public override void OnActivated(UIApplication application)
        {
            // Handle any shortcut item being selected
            HandleShortcutItem(LaunchedShortcutItem);

            // Clear shortcut after it's been handled
            LaunchedShortcutItem = null;
        }
        // if app is already running
        public override void PerformActionForShortcutItem(UIApplication application, UIApplicationShortcutItem shortcutItem, UIOperationHandler completionHandler)
        {
            // Perform action
            completionHandler(HandleShortcutItem(shortcutItem));
        }
        public bool HandleShortcutItem(UIApplicationShortcutItem shortcutItem)
        {
            var handled = false;

            // Anything to process?
            if (shortcutItem == null) return false;

            // Take action based on the shortcut type
            switch (shortcutItem.Type)
            {
                case ShortcutHelper.ShortcutIdentifiers.Appointments:
                    Tabs.SelectedIndex = 2;
                    Tabs.Title = "Appointments";
                    handled = true;
                    break;
                case ShortcutHelper.ShortcutIdentifiers.Treatments:
                    Tabs.SelectedIndex = 3;
                    Tabs.Title = "Treatments";
                    handled = true;
                    break;
                case ShortcutHelper.ShortcutIdentifiers.User:
                    Tabs.SelectedIndex = 1;
                    Tabs.Title = "User";
                    // Show user
                    handled = true;
                    break;
            }

            // Return results
            return handled;
        }
        #endregion

        private void SetupNotifications()
        {
			// If iOS is >= 8.0...
			if (UIDevice.CurrentDevice.CheckSystemVersion (8, 0)) 
            {
                var pushSettings = UIUserNotificationSettings.GetSettingsForTypes (
                    UIUserNotificationType.Alert |
                    UIUserNotificationType.Badge |
                    UIUserNotificationType.Sound,
                    new NSSet ()
                );

                UIApplication.SharedApplication.RegisterUserNotificationSettings (pushSettings);
                UIApplication.SharedApplication.RegisterForRemoteNotifications ();
			}
        }

        public override async void RegisteredForRemoteNotifications(UIApplication application, NSData deviceToken)
        {
            try
            {
				// Instantiate a MobileService Client
                _client = new MobileServiceClient(AppSettings.MobileAPIUrl);

                // Register for push with your mobile app
                var push = _client.GetPush();
                var notificationTemplate = "{\"aps\":{\"alert\":\"$(message)\"}}";

                JObject templateBody = new JObject();
				templateBody["body"] = notificationTemplate;

                JObject templates = new JObject();
                templates["testApsTemplate"] = templateBody;

				await push.RegisterAsync(deviceToken, templates);

                // Add a new tag to get only the notification for the default patientId.
                var tags = new JArray();
                tags.Add(AppSettings.DefaultTenantId);

                await _client.InvokeApiAsync("updatetags/" + _client.InstallationId, tags);

            }
            catch (Exception e)
            {
                Debug.WriteLine("RegisteredForRemoteNotifications -> exception -> " + e.Message);
            }
        }

        public override void DidReceiveRemoteNotification(UIApplication application, NSDictionary userInfo, Action<UIBackgroundFetchResult> completionHandler)
        {
            var notificationContent = userInfo["aps"] as NSDictionary;

            if (notificationContent == null)
            {
                return;
            }
            var message = notificationContent["alert"]?.ToString();
            if (string.IsNullOrWhiteSpace(message.ToString()))
            {
                return;
            }

            //show alert
            if (!string.IsNullOrEmpty(message))
            {
                UIAlertView avAlert = new UIAlertView("Notification", message, null, "OK", null);
                avAlert.Show();
            }
        }
    }
}