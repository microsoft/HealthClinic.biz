using Cirrious.CrossCore;
using MvvmCross.Plugins.Messenger;
using System;
using Windows.ApplicationModel;
using Windows.ApplicationModel.Activation;
using Windows.UI.Xaml;
using Windows.UI.Xaml.Controls;
using Windows.UI.Xaml.Navigation;
using MyHealth.Client.Core.ViewModels;
using MyHealth.Client.W10.UWP.Services;
using System.Threading.Tasks;
using Microsoft.IdentityModel.Clients.ActiveDirectory;
using MyHealth.Client.Core.ServiceAgents;
using MyHealth.Client.Core.Helpers;

namespace MyHealth.Client.W10.UWP
{
    sealed partial class App : Application
    {
        public App()
        {
            Microsoft.ApplicationInsights.WindowsAppInitializer.InitializeAsync(
                Microsoft.ApplicationInsights.WindowsCollectors.Metadata |
                Microsoft.ApplicationInsights.WindowsCollectors.Session);

            InitializeComponent();
            Suspending += OnSuspending;
        }

        protected async override void OnLaunched(LaunchActivatedEventArgs args)
        {
            var rootFrame = Window.Current.Content as Frame;

            // Do not repeat app initialization when the Window already has content,
            // just ensure that the window is active
            if (rootFrame == null)
            {
                // Create a Frame to act as the navigation context and navigate to the first page
                rootFrame = new Frame();

                if (args.PreviousExecutionState == ApplicationExecutionState.Terminated)
                {
                    //TODO: Load state from previously suspended application
                }
            }

            if (Window.Current.Content == null)
            {
                // When the navigation stack isn't restored navigate to the first page,
                // configuring the new page by passing required information as a navigation
                // parameter

                var setup = new Setup(rootFrame);
                setup.Initialize();

                await AskForADCredentialsAsync();

                Window.Current.Content = new Views.MainView(rootFrame, Mvx.Resolve<IMvxMessenger>());

                var start = Mvx.Resolve<Cirrious.MvvmCross.ViewModels.IMvxAppStart>();
                start.Start();

                ((MainViewModel)((Views.MainView)Window.Current.Content).DataContext).NavigateToHomeCommand.Execute();
            }
            // Ensure the current window is active
            Window.Current.Activate();
            PushNotifications.UploadChannel();
        }

        private async Task AskForADCredentialsAsync()
        {
            if (Settings.SecurityEnabled)
            {
                var messenger = Mvx.Resolve<IMvxMessenger>();
                MyHealthClient client = new MyHealthClient(messenger);
                await client.AuthenticationService.SignInAsync(new PlatformParameters(PromptBehavior.Always, false));
            }
        }

        /// <summary>
        /// Invoked when Navigation to a certain page fails
        /// </summary>
        /// <param name="sender">The Frame which failed navigation</param>
        /// <param name="e">Details about the navigation failure</param>
        void OnNavigationFailed(object sender, NavigationFailedEventArgs e)
        {
            throw new Exception("Failed to load Page " + e.SourcePageType.FullName);
        }

        /// <summary>
        /// Invoked when application execution is being suspended.  Application state is saved
        /// without knowing whether the application will be terminated or resumed with the contents
        /// of memory still intact.
        /// </summary>
        /// <param name="sender">The source of the suspend request.</param>
        /// <param name="e">Details about the suspend request.</param>
        private void OnSuspending(object sender, SuspendingEventArgs e)
        {
            var deferral = e.SuspendingOperation.GetDeferral();
            //TODO: Save application state and stop any background activity
            deferral.Complete();
        }
    }
}
