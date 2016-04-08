using System;
using System.Collections.ObjectModel;
using System.Linq;
using System.Threading.Tasks;
using Cirrious.MvvmCross.ViewModels;
using MvvmCross.Plugins.Messenger;
using MyHealth.Client.Core.Helpers;
using MyHealth.Client.Core.Messages;
using MyHealth.Client.Core.Model;
using MyHealth.Client.Core.ServiceAgents;

namespace MyHealth.Client.Core.ViewModels
{
    public class UserViewModel : BaseViewModel
    {
        private const int MaxAppointmentsToList = 10;

        private readonly IMyHealthClient _myHealthClient;
        private Patient _user;
        private ObservableCollection<ClinicAppointment> _appointmentsHistory;
		private IDisposable _subscriptionToken;

        public Patient User
        {
            get { return _user; }
            set { _user = value; RaisePropertyChanged(() => User); }
        }

        public ObservableCollection<ClinicAppointment> AppointmentsHistory
        {
            get
            {
                return _appointmentsHistory;
            }

            private set
            {
                _appointmentsHistory = value;
                RaisePropertyChanged(() => AppointmentsHistory);
            }
        }

        public UserViewModel(IMyHealthClient client, IMvxMessenger messenger) : base(messenger)
        {
            _myHealthClient = client;

			// Since iOS creates this VM from the beginning because of the bottom TabBar 
			// (Android doesn't, due to the left drawer) we need to notice of Azure AD
			// auth. happening in a future
			_subscriptionToken = _messenger.Subscribe<LoggedUserInfoChangedMessage>(_ => 
            	UpdateUserInfoIfSuchWasRetrievedFromMicrosoftGraph());
        }

        public override void Start()
        {
            base.Start();

            ReloadDataAsync().Forget();
        }

        protected override async Task InitializeAsync()
		{
			User = await _myHealthClient.PatientsService.GetAsync (AppSettings.CurrentPatientId);
			UpdateUserInfoIfSuchWasRetrievedFromMicrosoftGraph ();

			var appointments = await _myHealthClient.AppointmentsService.GetPatientAppointmentsAsync (AppSettings.CurrentPatientId, MaxAppointmentsToList);
			AppointmentsHistory = new ObservableCollection<ClinicAppointment> (appointments);
		}

		private void UpdateUserInfoIfSuchWasRetrievedFromMicrosoftGraph ()
		{
			if (!string.IsNullOrWhiteSpace (MicrosoftGraphService.LoggedUser) &&
						   !string.IsNullOrWhiteSpace (MicrosoftGraphService.LoggedUserEmail)) {
				User.Name = MicrosoftGraphService.LoggedUser;
				User.Email = MicrosoftGraphService.LoggedUserEmail;

				RaisePropertyChanged (() => User);
			}

			if (MicrosoftGraphService.LoggedUserPhoto != null) {
				User.Picture = MicrosoftGraphService.LoggedUserPhoto;

				RaisePropertyChanged (() => User);
			}
		}
    }
}
