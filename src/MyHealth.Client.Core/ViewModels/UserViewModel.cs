using Cirrious.MvvmCross.ViewModels;
using MvvmCross.Plugins.Messenger;
using MyHealth.Client.Core.Helpers;
using MyHealth.Client.Core.Messages;
using MyHealth.Client.Core.Model;
using MyHealth.Client.Core.ServiceAgents;
using System.Collections.ObjectModel;
using System.Linq;
using System.Threading.Tasks;

namespace MyHealth.Client.Core.ViewModels
{
    public class UserViewModel : BaseViewModel
    {
        private const int MaxAppointmentsToList = 10;
        private readonly IMyHealthClient _myHealthClient;
        private Patient _user;
        private ObservableCollection<ClinicAppointment> _appointmentsHistory;

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
        }

        public override void Start()
        {
            base.Start();

            ReloadDataAsync().Forget();
        }

        protected override async Task InitializeAsync()
        {
            await InitializeUserAsync();
        }

        private async Task InitializeUserAsync()
        {
            var userTask = _myHealthClient.PatientsService.GetAsync(AppSettings.CurrentPatientId);
            var appointmentsTask = _myHealthClient.AppointmentsService.GetPatientAppointmentsAsync(AppSettings.CurrentPatientId, MaxAppointmentsToList);

            await Task.WhenAll(userTask, appointmentsTask);
            User = await userTask;

            _messenger.Subscribe<LoggedUserInfoChangedMessage>(UpdateLoggedUserInfo);
            UpdateLoggedUserInfo(null);

            AppointmentsHistory = new ObservableCollection<ClinicAppointment>(await appointmentsTask);
        }

        public void UpdateLoggedUserInfo(LoggedUserInfoChangedMessage msg)
        {
            if (Settings.SecurityEnabled && !AppSettings.OutlookIntegration)
            {
                User.Name = MicrosoftGraphService.LoggedUser;
                User.Email = MicrosoftGraphService.LoggedUserEmail;
                User.Picture = MicrosoftGraphService.LoggedUserPhoto;
                RaisePropertyChanged(() => User);
            }
        }
    }
}
