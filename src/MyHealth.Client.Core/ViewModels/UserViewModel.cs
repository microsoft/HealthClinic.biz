using Cirrious.MvvmCross.ViewModels;
using MvvmCross.Plugins.Messenger;
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
            if (!string.IsNullOrEmpty(MicrosoftGraphService.LoggedInUser))
            {
                User = (await _myHealthClient.PatientsService.GetByNameAsync(MicrosoftGraphService.LoggedInUser, 1)).FirstOrDefault();
                return;
            }

			var userTask = _myHealthClient.PatientsService.GetAsync(AppSettings.DefaultPatientId);
			var appointmentsTask = _myHealthClient.AppointmentsService.GetPatientAppointmentsAsync(AppSettings.DefaultPatientId, MaxAppointmentsToList);

			await Task.WhenAll (userTask, appointmentsTask);

			User = await userTask;
			var appointments = await appointmentsTask;

            AppointmentsHistory = new ObservableCollection<ClinicAppointment>(appointments);
        }
    }
}
