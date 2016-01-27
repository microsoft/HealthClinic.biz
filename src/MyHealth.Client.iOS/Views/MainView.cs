using Cirrious.MvvmCross.Touch.Views;
using Cirrious.MvvmCross.ViewModels;
using Foundation;
using CoreGraphics;
using MyHealth.Client.Core.ViewModels;
using System;
using System.CodeDom.Compiler;
using UIKit;
using MyHealth.Client.Core;
using Xamarin.Forms;
using MyHealth.Client.Core.Helpers;
using System.Threading.Tasks;

namespace MyHealth.Client.iOS
{
    partial class MainView : MvxTabBarViewController<MainViewModel>
	{
        private int tabsCreatedSoFar = 0;

        public MainView(IntPtr handle)
            : base(handle)
        {
        }

        public override void ViewDidLoad()
        {
            base.ViewDidLoad();

            if (this.ViewModel == null)
            {
                return;
            }

            // Settings needed by the Microsoft Graph service client.
            MicrosoftGraphService.SetAuthenticationUiContext(new Microsoft.Experimental.IdentityModel.Clients.ActiveDirectory.PlatformParameters(this));
            MicrosoftGraphService.SetClientId(AppSettings.iOSClientId);
            MicrosoftGraphService.SetRedirectUri(AppSettings.RedirectUri);

            if (Settings.ADAuthenticationEnabled)
                InvokeOnMainThread(() => MicrosoftGraphService.SignInAsync());

            SetUpNavBar();
            this.SetUpTabBar();
            var appDelegate = (MyHealthAppDelegate) UIApplication.SharedApplication.Delegate;
            appDelegate.Tabs = this;
        }

        public override void ItemSelected(UITabBar tabbar, UITabBarItem item)
        {
            Title = item.Title;
        }

		void SetUpNavBar ()
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
            // selectedviewcontorller change
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
                tabsCreatedSoFar);
			screen.TabBarItem.SelectedImage = UIImage.FromBundle(imageName + "active.png")
				.ImageWithRenderingMode(UIImageRenderingMode.AlwaysOriginal);

			var font = UIFont.FromName ("Avenir-Book", 10);

			screen.TabBarItem.SetTitleTextAttributes (
				new UITextAttributes { TextColor = Colors.TabBarNormalText, Font = font },
				UIControlState.Normal);
			screen.TabBarItem.SetTitleTextAttributes (
				new UITextAttributes { TextColor = Colors.Accent, Font = font },
				UIControlState.Selected);

            tabsCreatedSoFar++;
        }
        void SetupTabChangeAnimation()
        {
            //I want to animate the tab changes. Its subtle but it adds a little bitof flair
            ShouldSelectViewController = (tabController, controller) =>
            {
                if (SelectedViewController == null || controller == SelectedViewController)
                    return true;

                var fromView = SelectedViewController.View;
                var toView = controller.View;

                var destFrame = fromView.Frame;
                const float offset = 20;

                //Position toView off screen
                fromView.Superview.AddSubview(toView);
                toView.Frame = new CGRect(offset, destFrame.Y, destFrame.Width, destFrame.Height);

                UIView.Animate(0.25,
                    () =>
                    {
                        toView.Frame = new CGRect(0, destFrame.Y, destFrame.Width, destFrame.Height);
                    }, () =>
                    {
                        //Completion handler. Remove old view
                        fromView.RemoveFromSuperview();
                        SelectedViewController = controller;
                    });
                return true;
            };
        }
    }
}
