using MyHealth.Client.Core.Model;
using MyHealth.Client.Core.ServiceAgents;
using MyHealth.Client.Desktop.Infrastructure;
using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.Threading.Tasks;
using MyHealth.Client.Desktop.Helpers;

namespace MyHealth.Client.Desktop.ViewModels
{
    class NewAppointmentViewModel : BaseViewModel
    {
        readonly IMyHealthClient client;
        private AppointmentSuggestion selectedAppointment;
        private Patient patient;
        private Doctor doctor;
        private ObservableCollection<AppointmentSuggestion> possibleAppointments;
        private DateTime selectedDate;
        private DateTime displayDate;
        private IList<Doctor> allDoctors;
        private ObservableCollection<Doctor> filteredDoctors;
        private string infoText = defaultInfoText;
        private bool isCreatingAppointment;
        private static string defaultInfoText = "Please select a specialty, a doctor and a day";

        public NewAppointmentViewModel(IMyHealthClient client)
        {
            this.client = client;
            SetHeaderValues(this.Header);
            GetDoctors().ConfigureAwait(false);
        }

        private async Task GetDoctors()
        {
            allDoctors = await client.DoctorsService.GetAsync(50, 0);
        }

        #region properties
        public Patient Patient
        {
            get
            {
                return patient;
            }
            set
            {
                patient = value;
                RaisePropertyChanged();
            }
        }

        public Doctor Doctor
        {
            get
            {
                return doctor;
            }
            set
            {
                doctor = value;
                RaisePropertyChanged();
                IsCalendarEnabled = (doctor != null);
                GetFirstAvailableDay(DateTime.Now).ConfigureAwait(false);
                if (value != null)
                    InfoText = String.Empty;
                else
                    InfoText = defaultInfoText;
            }
        }

        public IList<Specialities> Specialties
        {
            get
            {
                var specialities = Enum.GetValues(typeof(Specialities));
                return specialities as IList<Specialities>;
            }
        }

        private Specialities specialty;
        public Specialities Specialty
        {
            get
            {
                return specialty;
            }
            set
            {
                specialty = value;
                GetDoctorsForSpecialty(specialty);
                InfoText = defaultInfoText;
            }
        }

        public AppointmentSuggestion SelectedAppointment
        {
            get
            {
                return selectedAppointment;
            }
            set
            {
                selectedAppointment = value;
                RaisePropertyChanged();
                ActionCommand.RaiseCanExecutedChanged();
                Header.ActionText = GetActionTextString(selectedAppointment != null);
                this.Header.InfoText = SetAppointmentInfo();
            }
        }

        public ObservableCollection<Doctor> FilteredDoctors
        {
            get
            {
                return filteredDoctors;
            }
            set
            {
                filteredDoctors = value;
                RaisePropertyChanged();
                IsDoctorsEnabled = (filteredDoctors != null);
            }
        }

        public DateTime DisplayDate
        {
            get
            {
                return displayDate;
            }
            set
            {
                if (displayDate != value)
                {
                    displayDate = value;
                    RaisePropertyChanged();
                }
            }
        }

        public DateTime SelectedDate
        {
            get
            {
                return selectedDate;
            }
            set
            {
                if (selectedDate.Date != value.Date)
                {
                    selectedDate = value;
                    RaisePropertyChanged();
                    GetAppointmentTimes().ConfigureAwait(false);
                }
            }
        }


        public string InfoText
        {
            get
            {
                return infoText;
            }
            set
            {
                infoText = value;
                RaisePropertyChanged();
            }
        }
        private bool isDoctorsEnabled = false;
        public bool IsDoctorsEnabled
        {
            get { return isDoctorsEnabled; }
            set
            {
                isDoctorsEnabled = value;
                RaisePropertyChanged();
                if (!isDoctorsEnabled)
                {
                    PossibleAppointments.Clear();
                    RaisePropertyChanged("PossibleAppointments");
                }
            }
        }

        private bool isCalendarEnabled = false;
        public bool IsCalendarEnabled
        {
            get { return isCalendarEnabled; }
            set
            {
                isCalendarEnabled = value;
                RaisePropertyChanged();
                if (!isCalendarEnabled)
                {
                    PossibleAppointments.Clear();
                    RaisePropertyChanged("PossibleAppointments");
                }
            }
        }

        //Can create new appointment 
        protected override bool CanExecuteAction()
        {
            return (!IsCreatingAppointment && (SelectedAppointment != null));
        }

        public bool IsCreatingAppointment
        {
            get
            {
                return isCreatingAppointment;
            }
            set
            {
                isCreatingAppointment = value;
                RaisePropertyChanged();
                ActionCommand.RaiseCanExecutedChanged();
            }
        }
        public override RelayCommand ActionCommand
        {
            get
            {
                if (actionCommand == null)
                {
                    actionCommand = new RelayCommand(this.CreateNewAppointment, CanExecuteAction);
                }
                return actionCommand;
            }
        }

        public override RelayCommand NavigateBackCommand
        {
            get
            {
                if (navCommand == null)
                {
                    navCommand = new RelayCommand(NavigationHelper.NavigateToPatientSelector);
                }
                return navCommand;
            }
        }

        public ObservableCollection<AppointmentSuggestion> PossibleAppointments
        {
            get
            {
                return possibleAppointments;
            }
            set
            {
                possibleAppointments = value;
                RaisePropertyChanged();
                if (value == null)
                    InfoText = "There are no available appointments for the selected date";
                else
                    InfoText = String.Empty;
            }
        }
        #endregion

        #region public methods
        public async override void Load()
        {
            Patient = ((App)App.Current).AppViewModel.CurrentPatient;
            allDoctors = await client.DoctorsService.GetAsync(10, 2);
        }

        public override void Update()
        {
        }


        public async void CreateNewAppointment()
        {
            if (this.Patient == null || this.Doctor == null || this.SelectedAppointment == null)
                return;
            IsCreatingAppointment = true;
            ClinicAppointment clinicAppointment = new ClinicAppointment();
            clinicAppointment.Patient = Patient;
            clinicAppointment.PatientId = Patient.PatientId;
            clinicAppointment.Doctor = this.Doctor;
            clinicAppointment.DoctorId = this.Doctor.DoctorId;
            clinicAppointment.TenantId = this.Doctor.TenantId;
            clinicAppointment.Speciality = this.Doctor.Speciality;
            clinicAppointment.RoomNumber = this.SelectedAppointment.RoomNumber;
            clinicAppointment.DateTime = this.SelectedAppointment.StartTime.ToUniversalTime();

            clinicAppointment.Description = "Follow up in order to determine the effectiveness of treatment received";
            clinicAppointment.IsUrgent = this.SelectedAppointment.IsUrgent;

            await this.CreateNewAppointment(clinicAppointment);
            IsCreatingAppointment = false;
            NavigationHelper.NavigateToPatientInfo();
        }
        #endregion

        #region internal/private methods
        internal async void GetDoctorsForSpecialty(Specialities speciality)
        {
            if (allDoctors == null)
                await GetDoctors();

            var filtered = from d in allDoctors
                           where d.Speciality == specialty
                           select d;
            FilteredDoctors = new ObservableCollection<Doctor>(filtered.ToList());
        }


        internal async Task CreateNewAppointment(ClinicAppointment appointment)
        {
            await this.client.AppointmentsService.PostAsync(appointment);
        }

        //Get appointment times for the selected date.
        //Note the selected date may have no appointments available
        internal async Task GetAppointmentTimes()
        {
            if (Doctor != null)
            {
                List<DateTime> possibleTimes = await this.client.DoctorsService.GetAvailableHoursAsync(Doctor.DoctorId, SelectedDate.Day, SelectedDate.Month, SelectedDate.Year);

                //Convert UTC time to local hour
                DateTimeHelper.ConvertToLocalTime(possibleTimes);

                //remove the appointment times that already occured
                DateTimeHelper.RemoveAlreadyOccured(possibleTimes);

                SetAppointmentSuggestions(possibleTimes);

            }
        }

        //Get first available day for doctor, starting at startDate
        internal async Task GetFirstAvailableDay(DateTime startDate)
        {
            if (Doctor == null)
                return;

            if (startDate.DayOfWeek == DayOfWeek.Saturday)
                startDate = startDate.AddDays(2);
            else if (startDate.DayOfWeek == DayOfWeek.Sunday)
                startDate = startDate.AddDays(1);

            List<DateTime> possibleTimes = await this.client.DoctorsService.GetAvailableHoursAsync(Doctor.DoctorId, startDate.Day, startDate.Month, startDate.Year);

            if (possibleTimes.Count != 0)
            {
                //Convert UTC time to local hour
                DateTimeHelper.ConvertToLocalTime(possibleTimes);

                //remove the appointment times that already occured
                DateTimeHelper.RemoveAlreadyOccured(possibleTimes);
            }

            //check again if there are available appointments left
            if (possibleTimes.Count == 0)
            {
                //try the next day
                //also stop recursion if it goes too far
                if (startDate < DateTime.Now.AddMonths(3))
                {
                    await GetFirstAvailableDay(startDate.AddDays(1));
                    return;
                }
                else  //no possible times
                {
                    this.PossibleAppointments = null;
                    this.SelectedAppointment = null;
                }
            }

            SetAppointmentSuggestions(possibleTimes);
            DisplayDate = PossibleAppointments[0].StartTime;
            selectedDate = PossibleAppointments[0].StartTime;
            RaisePropertyChanged("SelectedDate");
        }

        internal void SetAppointmentSuggestions(List<DateTime> possibleTimes)
        {
            if (possibleTimes.Count > 0)
            {
                List<AppointmentSuggestion> suggestions = new List<AppointmentSuggestion>();

                foreach (DateTime appointmentTime in possibleTimes)
                {
                    AppointmentSuggestion suggestion = new AppointmentSuggestion();
                    suggestion.RoomNumber = Doctor.CurrentRoomNumber;
                    suggestion.StartTime = appointmentTime;
                    suggestions.Add(suggestion);
                }
                this.PossibleAppointments = new ObservableCollection<AppointmentSuggestion>(suggestions);
                this.SelectedAppointment = this.PossibleAppointments[0];
            }
            else
            {
                this.PossibleAppointments = null;
                this.SelectedAppointment = null;
            }
        }
        protected override void SetHeaderValues(HeaderViewModel headerViewModel)
        {
            headerViewModel.ActionImgPath = @"..\Assets\btn_OK.png";
            headerViewModel.ActionImgPath_Hover = @"..\Assets\btn_OK_hover.png";
            headerViewModel.ActionImgPath_Press = @"..\Assets\btn_OK_press.png";
            headerViewModel.NavImgPath = @"..\Assets\btn_back.png";
            headerViewModel.NavImgPath_Hover = @"..\Assets\btn_back_hover.png";
            headerViewModel.NavImgPath_Press = @"..\Assets\btn_back_press.png";
            headerViewModel.ActionText = GetActionTextString(false);
            headerViewModel.HeaderText = "NEW APPOINTMENT";
            headerViewModel.NavCommand = NavigateBackCommand;
            headerViewModel.ActionCommand = ActionCommand;
            headerViewModel.InfoText = String.Empty;
        }

        private string GetActionTextString(bool SelectionAvailable)
        {
            if (SelectionAvailable)
                return "Accept";
            else return String.Empty;
        }

        private string SetAppointmentInfo()
        {
            if (Doctor == null || SelectedAppointment == null)
                return String.Empty;

            return String.Format("{0:d} - {0:HH:mm} - {1} ({2})", SelectedAppointment.StartTime, Doctor.Name, Doctor.Speciality.ToString());
        }
        #endregion
    }

    public class AppointmentSuggestion
    {
        public DateTime StartTime { get; set; }
        public int RoomNumber { get; set; }
        public bool IsUrgent { get; set; }
    }

}
