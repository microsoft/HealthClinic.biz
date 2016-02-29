using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.Threading.Tasks;
using Cirrious.MvvmCross.ViewModels;
using MvvmCross.Plugins.Messenger;
using MyHealth.Client.Core.Model;
using MyHealth.Client.Core.ServiceAgents;
using MyHealth.Client.Core.Extensions;
using System.Globalization;
using MyHealth.Client.Core.Services;

namespace MyHealth.Client.Core
{
    public class NewAppointmentViewModel : BaseViewModel
    {
        static readonly int AmountOfDoctors = 10;
        static readonly string ValidationMessage = "Please, choose speciality, Doctor, date and hour.";
        static readonly string ValidationTitle = "Missing information";
        static readonly string OkText = "OK";

        readonly IMyHealthClient client;
        readonly IDialogService dialogService;

        Doctor _selectedDoctor;
        DateTime _selectedDate;
        int _waitingTimeAvg;
        DateTime _selectedAppointmentDateAndHour;
        ObservableCollection<Doctor> _doctors;
        ObservableCollection<string> _possibleHours;
        string _selectedHour;
        Specialities _selectedSpeciality;
        List<Specialities> _availableSpecialities;
        bool _isEverythingCorrectlyFilled;
        Random _random;
        IEnumerable<Office365.Event> _patientEvents;

        #region Properties

        public Doctor SelectedDoctor
        {
            get { return _selectedDoctor; }
            set
            {
                if (value != _selectedDoctor)
                {
                    _selectedDoctor = value;
                    RaisePropertyChanged(() => SelectedDoctor);

                    SelectedDate = DateTime.Today;
                }
            }
        }

        public ObservableCollection<string> PossibleHours
        {
            get { return _possibleHours; }
            set { _possibleHours = value; RaisePropertyChanged(() => PossibleHours); }
        }

        public string SelectedHour
        {
            get { return _selectedHour; }
            set
            {
                if (value != _selectedHour)
                {
                    _selectedHour = value;
                    _selectedAppointmentDateAndHour = SelectedDate.WithTime(_selectedHour);
                    IsEverythingCorrectlyFilled = !string.IsNullOrWhiteSpace(_selectedHour);
                    RaisePropertyChanged(() => SelectedHour);
                }
            }
        }

        public List<Specialities> AvailableSpecialities
        {
            get { return _availableSpecialities; }
        }

        public Specialities SelectedSpeciality
        {
            get { return _selectedSpeciality; }
            set
            {
                if (value != _selectedSpeciality)
                { 
                    _selectedSpeciality = value;

                    RaisePropertyChanged(() => SelectedSpeciality);

                    SelectedDoctor = null;
                    GetDoctorsForSpecialtyAsync(_selectedSpeciality).Forget();
                }
            }
        }

        public ObservableCollection<Doctor> Doctors
        {
            get { return _doctors; }
            set { _doctors = value; RaisePropertyChanged(() => Doctors); }
        }

        public DateTime SelectedDate
        {
            get
            {
                return _selectedDate;
            }
            set
            {
                _selectedDate = value;
                GetAppointmentTimesAsync().Forget();
            }
        }

        public int WaitingTimeAvg
        {
            get
            {
                return _waitingTimeAvg;
            }
            set
            {
                _waitingTimeAvg = value;
                RaisePropertyChanged(() => WaitingTimeAvg);
            }
        }

        public bool IsEverythingCorrectlyFilled
        {
            get { return _isEverythingCorrectlyFilled; }
            set
            {
                _isEverythingCorrectlyFilled = value;
                RaisePropertyChanged(() => IsEverythingCorrectlyFilled);
            }
        }

        public IEnumerable<Office365.Event> PatientEvents
        {
            get { return _patientEvents; }
            set
            {
                _patientEvents = value;
                RaisePropertyChanged(() => PatientEvents);
            }
        }

        #endregion Properties

        #region Commands

        public IMvxCommand AcceptCommand
        {
            get
            {
                return new MvxCommand(async () =>
                    {
                        if (SelectedDoctor == null || SelectedDate == null || SelectedHour == null)
                        {
                            await dialogService.AlertAsync(ValidationMessage,
                                ValidationTitle,
                                OkText);
                            return;
                        }

                        await CreateNewAppointmentAsync();

                        Close(this);
                    });
            }
        }

        public IMvxCommand CancelCommand
        {
            get { return new MvxCommand(() => Close(this)); }
        }

        public IMvxCommand BackCommand
        {
            get { return new MvxCommand(() => Close(this)); }
        }

        #endregion Commands

        public NewAppointmentViewModel(IMyHealthClient client, IMvxMessenger messenger, IDialogService dlgSvc)
            : base(messenger)
        {
            this.client = client;
            this.dialogService = dlgSvc;

            var specialities = Enum.GetValues(typeof(Specialities));
            // Let's give our user the specialities ordered alphabetically :-)
            _availableSpecialities = specialities.OfType<Specialities>()
                 .OrderBy(s => s.ToString())
                 .ToList();

            Doctors = new ObservableCollection<Doctor>();

            _random = new Random();
        }

        public override void Start()
        {
            base.Start();

            ReloadDataAsync().Forget();
        }

        protected override async Task InitializeAsync()
        {
            await base.InitializeAsync();

            SelectedSpeciality = Specialities.Cardiologist;
            PossibleHours = new ObservableCollection<string>();

            var tenant = await client.TenantsService.GetAsync();
            WaitingTimeAvg = tenant.WaitTimeAvg;
        }

        async Task CreateNewAppointmentAsync()
        {
            try
            {
                IsBusy = true;

                var patient = await client.PatientsService.GetAsync(
                    AppSettings.CurrentPatientId);
                int roomNumber = _random.Next(AppSettings.MinimumRoomNumber,
                        AppSettings.MaximumRoomNumber);
                var appointment = new ClinicAppointment
                {
                    PatientId = patient.PatientId,
                    DoctorId = _selectedDoctor.DoctorId,
                    TenantId = _selectedDoctor.TenantId,
                    Speciality = _selectedDoctor.Speciality,
                    DateTime = _selectedAppointmentDateAndHour,
                    Description = AppSettings.DefaultAppointmentDescription,
                    RoomNumber = roomNumber
                };

                await client.AppointmentsService.PostAsync(appointment);

                if (AppSettings.OutlookIntegration)
                {
                    // Add the event to the patient's calendar
                    await MicrosoftGraphService.AddEventAsync(
                        subject: "Clinic Appointment with " + _selectedDoctor.Name,
                        startTime: _selectedAppointmentDateAndHour,
                        endTime: _selectedAppointmentDateAndHour + TimeSpan.FromMinutes(45),
                        attendeeEmails: new string[0],
                        description: AppSettings.DefaultAppointmentDescription,
                        locationDisplayName: $"Room {roomNumber}");

                    // Add the events to the doctor's calendar.
                    var @event = new Office365.Appointment
                    {
                        DoctorPrincipalName = _selectedDoctor.Email,
                        Subject = "Clinic Appointment with " + patient.Name,
                        Description = AppSettings.DefaultAppointmentDescription,
                        PatientEmail = patient.Email,
                        Start = _selectedAppointmentDateAndHour,
                        LengthInMinutes = 45,
                        Location = $"Room {roomNumber}"
                    };

                    //TODO: Uncomment to enable doctor calendar integration.
                    //await client.DoctorCalendarService.PostAsync(@event);

                }

                await dialogService.AlertAsync("The appointment was created successfully.",
                    "New appointment", OkText);
            }
            finally
            {
                IsBusy = false;
            }
        }

        async Task GetDoctorsForSpecialtyAsync(Specialities speciality)
        {
            try
            {
                IsBusy = true;

                Doctors.Clear();

                var doctors = await client.DoctorsService.GetBySpecialityAsync(
                    speciality,
                    AmountOfDoctors);

                Doctors.AddRange(doctors);
            }
            finally
            {
                IsBusy = false;
            }
        }

        void AddFixedHoursForDemo()
        {
            var hours = new List<string>(3);
            hours.Add("9:00 am");
            hours.Add("9:15 am");
            hours.Add("9:30 am");
            PossibleHours.AddRange(hours);
        }

        async Task AddHoursRetrievedFromAPIAsync()
        {
            var hours = new List<DateTime>();
            hours = await client.DoctorsService.GetAvailableHoursAsync(_selectedDoctor.DoctorId, _selectedDate.Day, _selectedDate.Month, _selectedDate.Year);
            var fi = new DateTimeFormatInfo {
                AMDesignator = "am",
                PMDesignator = "pm"
            };
            var actualHours = new List<string>();
            foreach (var hour in hours)
            {
                var date = hour.ToLocalTime().ToString("h:mm tt", fi);
                actualHours.Add(date);
            }
            // Remove times that are conflicting with doctor's calendar.
            if (AppSettings.OutlookIntegration)
            {
                // Get patient events from calendar.
                //TODO: Use Rest api instead to workaround issue. Revert to Microsoft Graph Service after the issue is resolved.
                //events = await MicrosoftGraphService.GetEventsAsync(_selectedDate);
                PatientEvents = await MicrosoftGraphService.GetEventsAsync(_selectedDate);
                //TODO: uncomment the following to enable doctor calendar integration.
                //if (_selectedDoctor != null)
                //{
                //    var doctorEvents = await client.DoctorCalendarService.GetDoctorEventsByDayAsync(_selectedDoctor.Email, _selectedDate);
                //    var filteredHours = RemoveConflictingHours(hours, doctorEvents, fi);
                //    actualHours.Clear();
                //    actualHours.AddRange(filteredHours);
                //}
            }
            PossibleHours.AddRange(actualHours);
        }

        async Task GetAppointmentTimesAsync()
        {
            if (_selectedDoctor == null || PossibleHours == null)
                return;

            try
            {
                IsBusy = true;

                PossibleHours.Clear();

                if (_selectedDate.Year == 2015 && 
                    _selectedDate.Month == 11 && 
                    _selectedDate.Day == 19)
                {
                    AddFixedHoursForDemo();
                }
                else
                {
                    await AddHoursRetrievedFromAPIAsync();
                }
            }
            finally
            {
                SelectedHour = PossibleHours.FirstOrDefault();
                IsBusy = false;
            }
        }

        private IEnumerable<string> RemoveConflictingHours(IEnumerable<DateTime> originalHours, IEnumerable<Office365.Event_Beta> doctorEvents, DateTimeFormatInfo fi)
        {
            var filteredHours = new List<string>();
            // Some doctors are not in the Azure AD so the above api could not find any info about their calendars.
            if (doctorEvents.Count() != 0)
            {
                foreach (var hourStart in originalHours)
                {
                    var hourEnd = hourStart + TimeSpan.FromMinutes(15);
                    bool conflicting = false;
                    foreach (var @event in doctorEvents)
                    {
                        if ((@event.Start.DateTime <= hourStart && hourStart <= @event.End.DateTime) ||
                            (@event.Start.DateTime <= hourEnd && hourEnd <= @event.End.DateTime))
                        {
                            conflicting = true;
                            break;
                        }
                    }
                    if (!conflicting)
                    {
                        var date = hourStart.ToString("h:mm tt", fi);
                        filteredHours.Add(date);
                    }
                }
            }
            else
            {
                filteredHours.AddRange(PossibleHours);
            }

            return filteredHours;
        }
    }
}