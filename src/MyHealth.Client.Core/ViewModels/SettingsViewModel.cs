using System;
using Cirrious.MvvmCross.ViewModels;
using MvvmCross.Plugins.Messenger;
using Xamarin.Forms;
using Cirrious.CrossCore;
using MyHealth.Client.Core.Services;

namespace MyHealth.Client.Core.ViewModels
{
	public class SettingsViewModel : MvxViewModel
	{
		static readonly string UriSchemeHttp = "http";
		static readonly string UriSchemeHttps = "https";

		readonly IMvxMessenger _messenger;

        string _serverAddress;
		bool _isInvalidUrl;
		Uri tempUri;

		public string ServerAddress
		{ 
			get { return _serverAddress; }
			set { 
				IsInvalidUrl = CheckInvalidUrl(value);

				_serverAddress = value; 
			}
		}

		public bool IsInvalidUrl
		{ 
			get { return _isInvalidUrl; }
			set { _isInvalidUrl = value; RaisePropertyChanged (() => IsInvalidUrl); }
		}

		public IMvxCommand AcceptCommand
		{
			get { return new MvxCommand (() => SaveSettingsAndClose()); }
		}

		public IMvxCommand CancelCommand
		{
			get { return new MvxCommand (() => CloseWithoutSaving()); }
		}

        public IMvxCommand HockeyAppFeedbackCommand
        {
            get { return new MvxCommand (LaunchHockeyAppFeedback); }
        }

		public SettingsViewModel (IMvxMessenger messenger) : base()
		{
			_messenger = messenger;

			ServerAddress = AppSettings.ServerlUrl;
		}

        void LaunchHockeyAppFeedback()
        {
            var hockeyAppFeedbackService = Mvx.Resolve<IHockeyAppFeedbackService>();

            hockeyAppFeedbackService?.LaunchHockeyAppFeedback();
        }

		bool CheckInvalidUrl(string url)
		{
			bool validUrl = Uri.TryCreate(url, UriKind.Absolute, out tempUri) && 
				(tempUri.Scheme == UriSchemeHttp || 
					tempUri.Scheme == UriSchemeHttps);

			return !validUrl;
		}

		void SaveSettingsAndClose ()
		{
			if (!_serverAddress.EndsWith("/"))
				_serverAddress = string.Concat(_serverAddress, "/");

			AppSettings.ServerlUrl = _serverAddress;
            _messenger.Publish(new SettingsChangedMessage(this));

            Device.OnPlatform(
                Android: () => Close (this));
		}

		void CloseWithoutSaving ()
		{
			Close (this);
		}
	}
}

