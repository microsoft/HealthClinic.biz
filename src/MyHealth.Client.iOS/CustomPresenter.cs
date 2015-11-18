using System;
using Cirrious.MvvmCross.Touch.Views.Presenters;
using MyHealth.Client.Core;
using UIKit;
using Xamarin.Forms;
using Cirrious.MvvmCross.ViewModels;
using MyHealth.Client.Core.ViewModels;
using Cirrious.CrossCore;
using Cirrious.MvvmCross.Touch.Views;

namespace MyHealth.Client.iOS
{
	public class CustomPresenter : MvxTouchViewPresenter
	{
		UIWindow _window;

		public CustomPresenter(UIApplicationDelegate applicationDelegate, UIWindow window) : 
			base(applicationDelegate, window)
		{
			_window = window;
		}

		public override void Show (Cirrious.MvvmCross.ViewModels.MvxViewModelRequest request)
		{
			if (request.ViewModelType == typeof(NewAppointmentViewModel))
            {
                var viewController = Mvx.Resolve<IMvxTouchViewCreator>()
                    .CreateView(request) as UIViewController;

                PresentModalViewController(viewController, true);

                return;
            }

			base.Show (request);
		}

		public override void ChangePresentation (Cirrious.MvvmCross.ViewModels.MvxPresentationHint hint)
		{
			if (hint is MvxClosePresentationHint && 
                _window.RootViewController.ModalViewController is NewAppointmentView)
                this.CloseModalViewController();

			base.ChangePresentation (hint);
		}

        public override void CloseModalViewController()
        {
            _window.RootViewController.PresentedViewController.DismissModalViewController(true);
        }
	}
}

