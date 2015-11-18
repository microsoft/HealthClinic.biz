using System;
using Cirrious.MvvmCross.ViewModels;
using MvvmCross.Plugins.Messenger;
using System.Threading.Tasks;

namespace MyHealth.Client.Core
{
	public class BaseViewModel : MvxViewModel, IDisposable
    {
        protected IMvxMessenger _messenger;
		protected MvxSubscriptionToken _token;

        bool _isBusy;

        public bool IsBusy
        {
            get { return _isBusy; }
            set { _isBusy = value; RaisePropertyChanged(() => IsBusy); }
        }

        public BaseViewModel(IMvxMessenger messenger) : base()
        {
            _messenger = messenger;

            _token = _messenger.Subscribe<ReloadDataMessage>(async _ => 
				await ReloadDataAsync());
        }

		#region IDisposable implementation
		public void Dispose ()
		{
			_messenger.Unsubscribe<ReloadDataMessage> (_token);
			_messenger = null;
		}
		#endregion

        protected async Task ReloadDataAsync()
        {
            try
            {
                IsBusy = true;
                _messenger.Publish(new BusyIndicatorMessage(this, isBusy: true));
                await InitializeAsync();
            }
            catch (Exception ex)
            {
                System.Diagnostics.Debug.WriteLine(ex.ToString());
            }
            finally
            {
                IsBusy = false;
                _messenger.Publish(new BusyIndicatorMessage(this, isBusy: false));
            }
        }

        protected virtual Task InitializeAsync()
        {
            return Task.FromResult(0);
        }
    }
}

