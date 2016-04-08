using Cirrious.MvvmCross.ViewModels;
using MyHealth.Client.Core.ServiceAgents;
using MyHealth.Client.Core.Model;
using System.Linq;
using MvvmCross.Plugins.Messenger;
using System.Threading.Tasks;
using MyHealth.Client.Core.Helpers;
using System.Collections.ObjectModel;
using System.Collections.Generic;
using System.Globalization;
using MyHealth.Client.Core.Messages;

namespace MyHealth.Client.Core.ViewModels
{
    public class HomeViewModel 
		: BaseViewModel
    {
		static readonly int AmountOfAppointments = 2;
		static readonly int AmountOfMedicines = 2;

		readonly IMyHealthClient _myHealthClient;

		bool _firstMedicineSelected = true;
		int _firstMedicineCountDown, _secondMedicineCountDown, _countDown;
		MedicineWithDoses _firstMedicine, _secondMedicine, _currentMedicine;
		ClinicAppointment _firstAppointment, _secondAppointment;
        ObservableCollection<Appointment> _appointments;
		Tip _tip;
		MvxSubscriptionToken _loggedUserInfoChangedSubscriptionToken;

		public bool FirstMedicineSelected
		{ 
			get { return _firstMedicineSelected; }
			set { _firstMedicineSelected = value; RaisePropertyChanged (() => FirstMedicineSelected); }
		}

		public int CountDown
		{ 
			get { return _countDown; }
			set { _countDown = value; RaisePropertyChanged (() => CountDown); }
		}

		public int FirstMedicineCountDown
		{ 
			get { return _firstMedicineCountDown; }
			set { _firstMedicineCountDown = value; RaisePropertyChanged (() => FirstMedicineCountDown); }
		}

		public int SecondMedicineCountDown
		{ 
			get { return _secondMedicineCountDown; }
			set { _secondMedicineCountDown = value; RaisePropertyChanged (() => SecondMedicineCountDown); }
		}

		public MedicineWithDoses FirstMedicine { 
			get { return _firstMedicine; }
			set { 
				_firstMedicine = value; 

				RaisePropertyChanged (() => FirstMedicine); 

				FirstMedicineCountDown = CountdownHelper.CalcCountDownValue (_firstMedicine);
			}
		}

		public MedicineWithDoses SecondMedicine
		{ 
			get { return _secondMedicine; }
			set { 
				_secondMedicine = value; 

				RaisePropertyChanged (() => SecondMedicine); 

				SecondMedicineCountDown = CountdownHelper.CalcCountDownValue(_secondMedicine);
			}
		}

		public MedicineWithDoses CurrentMedicine
		{ 
			get { return _currentMedicine; }
			set { 
				_currentMedicine = value; 

				RaisePropertyChanged (() => CurrentMedicine); 

				CountDown = CountdownHelper.CalcCountDownValue(_currentMedicine);
			}
		}

        public ClinicAppointment FirstAppointment
		{ 
			get { return _firstAppointment; }
			set { _firstAppointment = value; RaisePropertyChanged (() => FirstAppointment); }
		}

		public ClinicAppointment SecondAppointment
		{ 
			get { return _secondAppointment; }
			set { _secondAppointment = value; RaisePropertyChanged (() => SecondAppointment); }
		}

        public ObservableCollection<Appointment> Appointments
        {
            get { return _appointments; }
            set { _appointments = value; RaisePropertyChanged(() => Appointments); }
        }

        public Tip Tip
		{ 
			get { return _tip; }
			set { _tip = value; RaisePropertyChanged (() => Tip); }
		}

		public IMvxCommand ChangeToFirstMedicineCommand
		{
			get { return new MvxCommand(() => UpdateCurrentMedicine(_firstMedicine)); }
		}

		public IMvxCommand ChangeToSecondMedicineCommand
		{
			get { return new MvxCommand(() => UpdateCurrentMedicine(_secondMedicine)); }
		}

        public IMvxCommand ShowAppointmentCommand
        {
            get { return new MvxCommand(() => ShowAppointment()); }
        }

        public HomeViewModel (IMyHealthClient myHealthClient, IMvxMessenger messenger) 
			: base(messenger)
		{
			_myHealthClient = myHealthClient;

			// If secutiry was enabled in Settings, I'd like this VM to load when auth. happens,
			// not before (to avoid data seen in background while auth. is happening)
			if (Settings.SecurityEnabled) {
				_loggedUserInfoChangedSubscriptionToken = _messenger.Subscribe<LoggedUserInfoChangedMessage> (
					_ => ReloadDataAsync ().Forget ());
			}
        }

        public override void Start()
        {
            base.Start();

			if (!Settings.SecurityEnabled)
            	ReloadDataAsync().Forget();
        }

        protected override async Task InitializeAsync ()
		{
			ResetBindableProperties ();

			var medecinesTask = RetrieveMedecinesAsync ();
			var appointmentsTask = RetrieveAppointmentsAsync ();
			var tipTask = _myHealthClient.TipsService.GetNextAsync ();

			await Task.WhenAll(medecinesTask, appointmentsTask, tipTask);

			Tip = await tipTask;
		}

		async Task RetrieveAppointmentsAsync ()
		{
			var appointments = await _myHealthClient.AppointmentsService.GetPatientAppointmentsAsync (AppSettings.CurrentPatientId, AmountOfAppointments);
			if (appointments.Count > 0)
				FirstAppointment = appointments.First ();
            if (appointments.Count >= 2)
            {
                SecondAppointment = appointments.ElementAt(1);
                Appointments = new ObservableCollection<Appointment>(appointments.Skip(2));
            }
        }

		async Task RetrieveMedecinesAsync ()
		{
			var medicines = await _myHealthClient.MedicinesService.GetMedicinesWithDosesAsync (AppSettings.CurrentPatientId, AmountOfMedicines);
			if (medicines.Count > 0)
				FirstMedicine = medicines.First ();
			if (medicines.Count >= 2)
				SecondMedicine = medicines.ElementAt (1);
			if (_firstMedicine != null)
				CurrentMedicine = _firstMedicine;
		}

		void ResetBindableProperties ()
		{
			FirstMedicine = null;
			SecondMedicine = null;
			CurrentMedicine = null;
			FirstAppointment = null;
			SecondAppointment = null;
			Tip = null;
		}

		void UpdateCurrentMedicine (MedicineWithDoses medicine)
		{
			CurrentMedicine = medicine;
			FirstMedicineSelected = _firstMedicine == medicine;
		}

        private void ShowAppointment()
        {
            var parameters = new MvxBundle(new Dictionary<string, string>
            {
                ["appointmentId"] = SecondAppointment.AppointmentId.ToString(CultureInfo.InvariantCulture)
            });

            ShowViewModel<AppointmentDetailsViewModel>(parameters);
        }
    }
}
