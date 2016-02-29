using MvvmCross.Plugins.Messenger;
using MyHealth.Client.Core.Model;
using MyHealth.Client.Core.ServiceAgents;
using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.Threading.Tasks;
using Cirrious.MvvmCross.ViewModels;
using System.Globalization;
using Cirrious.CrossCore;

namespace MyHealth.Client.Core.ViewModels
{
    public class AppointmentsViewModel : BaseViewModel
    {
        private readonly IMyHealthClient _myHealthClient;

		private const int MaxAppointmentsToList = 10;

        private ObservableCollection<ClinicAppointment> _appointments;

		private ClinicAppointment appointmentSelectedItem;

        private Lazy<NewAppointmentViewModel> _newAppointmentViewModel;

        public NewAppointmentViewModel NewAppointmentViewModel { get { return _newAppointmentViewModel.Value; } }

        public ObservableCollection<ClinicAppointment> Appointments 
        { 
            get 
            { 
                return _appointments; 
            }

            private set 
            { 
                _appointments = value; 
                RaisePropertyChanged(() => Appointments); 
            }
        }
        
        public ClinicAppointment AppointmentSelectedItem
        {
            get
            {
                return appointmentSelectedItem;
            }
            set
            {
                if (appointmentSelectedItem == value) return;
                appointmentSelectedItem = value;
                RaisePropertyChanged(() => AppointmentSelectedItem);
            }
        }

        public IMvxCommand ShowDetailsCommand { get; private set; }

        public IMvxCommand RefreshCommand { get; private set; }

        public AppointmentsViewModel(IMyHealthClient client, IMvxMessenger messenger) 
			: base(messenger)
        {
            _myHealthClient = client;
            _messenger = messenger;

            Appointments = new ObservableCollection<ClinicAppointment>();
            ShowDetailsCommand = new MvxCommand<Appointment>(OnShowDetails);
            RefreshCommand = new MvxCommand(async () => await ReloadDataAsync());

            _newAppointmentViewModel = new Lazy<NewAppointmentViewModel>(() => 
                Mvx.IocConstruct<NewAppointmentViewModel>());
        }

        public override void Start()
        {
            base.Start();

            ReloadDataAsync().Forget();

            NewAppointmentViewModel.Start();
        }

        protected override async Task InitializeAsync()
        {
            Appointments.Clear();

            var appointments = await _myHealthClient.
                AppointmentsService.GetPatientAppointmentsAsync(AppSettings.CurrentPatientId, MaxAppointmentsToList);
            
			if (appointments.Count > 0)
				Appointments.AddRange(appointments);
			
            AppointmentSelectedItem = Appointments.FirstOrDefault();
        }

		private void OnShowDetails(Appointment appointment)
		{
			var parameters = new MvxBundle(new Dictionary<string, string>
				{
					["appointmentId"] = appointment.AppointmentId.ToString(CultureInfo.InvariantCulture)
				});

			ShowViewModel<AppointmentDetailsViewModel>(parameters);
		}
    }
}
