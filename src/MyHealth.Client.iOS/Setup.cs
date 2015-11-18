using Cirrious.CrossCore.Platform;
using Cirrious.MvvmCross.Touch.Platform;
using Cirrious.MvvmCross.Touch.Views;
using Cirrious.MvvmCross.Touch.Views.Presenters;
using Cirrious.MvvmCross.ViewModels;
using UIKit;
using System;
using Cirrious.CrossCore.Converters;
using Cirrious.CrossCore;
using Cirrious.MvvmCross.Binding.Binders;
using System.Reflection;
using System.Collections.Generic;
using MyHealth.Client.Core.Converters;
using MyHealth.Client.Core.Services;
using MyHealth.Client.iOS.Services;

namespace MyHealth.Client.iOS
{
	public class Setup : MvxTouchSetup
	{
		MvxApplicationDelegate _applicationDelegate;
		UIWindow _window;

		public Setup(MvxApplicationDelegate applicationDelegate, UIWindow window)
			: base(applicationDelegate, window)
		{
			_applicationDelegate = applicationDelegate;
			_window = window;
        }
		
		public Setup(MvxApplicationDelegate applicationDelegate, IMvxTouchViewPresenter presenter)
			: base(applicationDelegate, presenter)   
		{
        }

		protected override IMvxApplication CreateApp()
		{
			return new Core.App();
		}

        protected override void InitializeIoC()
        {
            base.InitializeIoC();

            Mvx.RegisterSingleton<IDialogService>(() => new DialogService());
            Mvx.RegisterSingleton<IHockeyAppFeedbackService>(() => new HockeyAppFeedbackService());
        }

        protected override IMvxTrace CreateDebugTrace()
		{
			return new DebugTrace();
		}

        protected override IMvxTouchViewsContainer CreateTouchViewsContainer()
        {
            return new StoryboardBasedContainer();
        }

		protected override IMvxTouchViewPresenter CreatePresenter ()
		{
			return new CustomPresenter (_applicationDelegate, _window);
		}
    }
}
