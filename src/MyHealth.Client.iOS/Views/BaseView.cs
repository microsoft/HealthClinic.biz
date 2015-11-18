using System;
using Cirrious.MvvmCross.Touch.Views;
using MyHealth.Client.Core;
using Cirrious.MvvmCross.Binding.BindingContext;
using UIKit;

namespace MyHealth.Client.iOS
{
	public class BaseView : MvxViewController
	{
		BindableProgress _bindableProgress;

		public BaseView (IntPtr handle) : base(handle)
		{
		}

		public override void ViewDidLoad ()
		{
			base.ViewDidLoad ();

			_bindableProgress = new BindableProgress (View);

			SetUpUI ();

			SetUpBindings ();
		}

		protected virtual void SetUpBindings()
		{
			var set = this.CreateBindingSet<BaseView, BaseViewModel>(); 

			set.Bind(_bindableProgress)
				.For(progress => progress.Visible)
				.To(vm => vm.IsBusy);
			
			set.Apply(); 
		}

		protected virtual void SetUpNavigationBar ()
		{
		}

		protected virtual void SetUpUI()
		{
			SetUpNavigationBar ();
		}
	}
}

