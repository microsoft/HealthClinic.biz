using Cirrious.CrossCore;
using MyHealth.Client.Core.ViewModels;
using System;
using System.Collections.Generic;

using Xamarin.Forms;

namespace MyHealth.Client.Core
{
	public partial class SettingsPage : ContentPage
	{
		public SettingsPage ()
		{
			InitializeComponent ();

            BindingContext = Mvx.IocConstruct<SettingsViewModel>();
		}
	}
}

