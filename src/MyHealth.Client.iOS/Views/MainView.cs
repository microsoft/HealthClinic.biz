using System;
using System.Threading.Tasks;
using Cirrious.CrossCore;
using Cirrious.MvvmCross.Touch.Views;
using Cirrious.MvvmCross.ViewModels;
using Foundation;
using LocalAuthentication;
using Microsoft.IdentityModel.Clients.ActiveDirectory;
using MyHealth.Client.Core;
using MyHealth.Client.Core.Helpers;
using MyHealth.Client.Core.ServiceAgents;
using MyHealth.Client.Core.Services;
using MyHealth.Client.Core.ViewModels;
using UIKit;
using Xamarin.Forms;

namespace MyHealth.Client.iOS
{
	partial class MainView : MvxTabBarViewController<MainViewModel>
	{
		private static readonly UIFont Font = UIFont.FromName ("Avenir-Book", 10);

		private int _tabsCreatedSoFar = 0;

        public MainView(IntPtr handle)
            : base(handle)
        {
        }

        public async override void ViewDidLoad()
        {
            base.ViewDidLoad();

            if (this.ViewModel == null)
            {
                return;
            }

            SetUpNavBar();
            SetUpTabBar();

            var appDelegate = (MyHealthAppDelegate) UIApplication.SharedApplication.Delegate;
            appDelegate.Tabs = this;

			if (Settings.SecurityEnabled)
			{
				if (Settings.TouchIdEnrolledAndFingerprintDetected)
					AuthenticateThroughFingerprint();
				else
					await AuthenticateThroughAzureADAndAddFingerprintAsync();
			}
        }

        private void AuthenticateThroughFingerprint()
        {
            var context = new LAContext();
            NSError authError;
            var myReason = new NSString(
                "Please, provide your fingerprint to access the app.");
            if (context.CanEvaluatePolicy(LAPolicy.DeviceOwnerAuthenticationWithBiometrics, out authError))
            {
                var replyHandler = new LAContextReplyHandler((success, error) => 
                    {
                        this.InvokeOnMainThread(async () => 
                            {
                                if (success)
								{
									await AuthenticateThroughAzureADAsync();
                                    return;
								}

                                var dialogService = Mvx.Resolve<IDialogService>();
                                await dialogService.AlertAsync(
                                    "We could not detect your fingerprint. " +
                                    "You will be asked again to enter your Azure AD credentials. " +
                                    "Thank you.",
                                    "Touch ID",
                                    "OK");

								// Since we're waking up, we need to silently sign in, and
								// sign out just after to clear local cache
								await AuthenticateThroughAzureADAsync ();
								SignOutFromAzureAD ();

                                // If fingerprint not detected, repeat Azure AD auth.
                                await AuthenticateThroughAzureADAndAddFingerprintAsync()
                                    .ConfigureAwait(false);
                            });
                    });
                context.EvaluatePolicy(LAPolicy.DeviceOwnerAuthenticationWithBiometrics, myReason, replyHandler);
            }
        }

		void SignOutFromAzureAD ()
		{
			var myHealthClient = Mvx.Resolve<IMyHealthClient> ();

			myHealthClient?.AuthenticationService?.SignOut ();
		}

		private async Task AuthenticateThroughAzureADAsync ()
		{
			var authenticationParentUiContext = new PlatformParameters (this);
			var myHealthClient = Mvx.Resolve<IMyHealthClient> ();

			ViewModel.IsBusy = true;

			if (myHealthClient != null)
				await myHealthClient.AuthenticationService.SignInAsync (authenticationParentUiContext);

			ViewModel.IsBusy = false;
		}

        private async Task AuthenticateThroughAzureADAndAddFingerprintAsync ()
        {
            await AuthenticateThroughAzureADAsync ();

            // If we went beyond this line the Azure AD auth. was a success
            AddFingerprintAuthentication();
        }

        private void AddFingerprintAuthentication()
        {
            var context = new LAContext();
            NSError authError;
            var myReason = new NSString(
                "Please, provide your fingerprint to simplify the authentication.");
            if (context.CanEvaluatePolicy(LAPolicy.DeviceOwnerAuthenticationWithBiometrics, out authError))
            {
                var replyHandler = new LAContextReplyHandler((success, error) => 
                {
                    this.InvokeOnMainThread(() => 
                    {
                        var dialogService = Mvx.Resolve<IDialogService>();

                        if (success)
                        {
                            Settings.TouchIdEnrolledAndFingerprintDetected = true;

                            dialogService.AlertAsync(
                                "Your fingerprint was successfully detected. " +
                                "You can access the app through it from now on. " +
                                "Thank you.",
                                "Touch ID",
                                "OK");
                        }
                        else
                        {
                            Settings.TouchIdEnrolledAndFingerprintDetected = false;

                            dialogService.AlertAsync(
                                "We could not detect your fingerprint. " +
                                "You will need to authenticate through Azure AD. " +
                                "Thank you.",
                                "Touch ID",
                                "OK");
                        }
                    });
                });
                context.EvaluatePolicy(LAPolicy.DeviceOwnerAuthenticationWithBiometrics, myReason, replyHandler);
            }
        }

		private void SetUpNavBar ()
		{
            var newAppointmentButton = new UIBarButtonItem (
                UIImage.FromBundle("ic_newappointment.png"),
				UIBarButtonItemStyle.Plain,
                (sender, args) => ViewModel.ShowNewAppointment());
           
            NavigationController.NavigationBar.BarTintColor = UIColor.FromRGB(0, 199, 188);
            NavigationController.HidesBarsOnSwipe = true;
            NavigationItem.SetRightBarButtonItem (newAppointmentButton, true);
		}

        private void SetUpTabBar()
        {
            var viewControllers = new UIViewController[]
            {
                CreateTabFor("Home", "ic_home_", this.ViewModel.HomeViewModel),
                CreateTabFor("Appointments", "ic_appointment_", this.ViewModel.AppointmentsViewModel),
                CreateTabFor("Treatments", "ic_treatment_", this.ViewModel.TreatmentViewModel),
				CreateTabFor("User", "ic_user_", this.ViewModel.UserViewModel),
                CreateTabFor("Settings", "ic_setting_", this.ViewModel.SettingsViewModel)
			};

            ViewControllers = viewControllers;
            CustomizableViewControllers = new UIViewController[] { };

            SelectedViewController = ViewControllers[0];
            Title = SelectedViewController.Title;

            TabBar.TintColor = Colors.Accent;
            NavigationItem.Title = SelectedViewController.Title;
            
			this.ViewControllerSelected += (o, e) =>
            {
                NavigationItem.Title = TabBar.SelectedItem.Title;
            };
        }

        private UIViewController CreateTabFor(string title, string imageName, IMvxViewModel viewModel)
        {
            UIViewController screen;

            if (viewModel.GetType() == typeof(SettingsViewModel)) {
                screen = new SettingsPage().CreateViewController();
            }
            else
            {
                screen = this.CreateViewControllerFor(viewModel) as UIViewController;

                viewModel.Start();
            }

            SetTitleAndTabBarItem(screen, title, imageName);

			return screen;
        }

        private void SetTitleAndTabBarItem(UIViewController screen, string title, string imageName)
        {
            screen.Title = title;
            screen.TabBarItem = new UITabBarItem(
                title,
                UIImage.FromBundle(imageName + "normal.png").ImageWithRenderingMode(UIImageRenderingMode.AlwaysOriginal),
                _tabsCreatedSoFar);
			screen.TabBarItem.SelectedImage = UIImage.FromBundle(imageName + "active.png")
				.ImageWithRenderingMode(UIImageRenderingMode.AlwaysOriginal);

			screen.TabBarItem.SetTitleTextAttributes (
				new UITextAttributes { TextColor = Colors.TabBarNormalText, Font = Font },
				UIControlState.Normal);
			screen.TabBarItem.SetTitleTextAttributes (
				new UITextAttributes { TextColor = Colors.Accent, Font = Font },
				UIControlState.Selected);

            _tabsCreatedSoFar++;
        }
    }
}
