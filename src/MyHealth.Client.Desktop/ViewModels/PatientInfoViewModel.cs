using MyHealth.Client.Core.Model;
using MyHealth.Client.Core.ServiceAgents;
using MyHealth.Client.Desktop.Helpers;
using MyHealth.Client.Desktop.Infrastructure;
using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.Threading.Tasks;

namespace MyHealth.Client.Desktop.ViewModels
{
    class PatientInfoViewModel : BaseViewModel
    {
        readonly IMyHealthClient client;
        private ObservableCollection<Appointment> appointments;
        private Appointment selectedAppointment;
        private ObservableCollection<Doctor> doctors;  //doctors to display in the PatientInfo view
        private static readonly int MaxDoctors = 4;  //max number of doctor pictures that would be displayed in the PatientInfo view
        private bool _isLoadingDetails;
        private List<DateTime> appointmentDates = null;
        private DateTime calendarSelectedDate;
        private DateTime calendarDisplayDate;

        public PatientInfoViewModel(IMyHealthClient client)
        {
            SetHeaderValues(this.Header);
            this.client = client;
        }

        public override async void Load()
        {
            await LoadDetailsAsync();
        }

        public Patient Patient
        {
            get
            {
                return ((MyHealth.Client.Desktop.App)App.Current).AppViewModel.CurrentPatient;
            }
        }

        public async Task LoadDetailsAsync()
        {
            IsLoadingDetails = true;
            var appointmentList = await client.AppointmentsService.GetPatientAppointmentsAsync(Patient.PatientId, 20);
            DateTimeHelper.ConvertToLocalTime(appointmentList);
            if (appointmentList != null && appointmentList.Count > 0)
            {
                appointmentDates = new List<DateTime>(appointmentList.Count);
                foreach (Appointment appt in appointmentList)
                {
                    DateTime date = appt.DateTime.Date;
                    if (!appointmentDates.Contains(date))
                        appointmentDates.Add(date);
                }
                AppointmentDates = appointmentDates;
                Appointments = new ObservableCollection<Appointment>(appointmentList);
                SelectedAppointment = Appointments[0];

                SetDoctors(appointmentList);
            }
            IsLoadingDetails = false;
        }

        public void SetDoctors(List<ClinicAppointment> appointmentList)
        {
            if (appointmentList == null)
                return;

            Doctor[] doctorsArr = new Doctor[MaxDoctors];
            int index = 0;
            foreach (ClinicAppointment appt in appointmentList)
            {
                if (index >= MaxDoctors)
                    break;
                if (!doctorsArr.Contains(appt.Doctor, new DoctorComparer()))
                {
                    doctorsArr[index] = appt.Doctor;
                    index++;
                }
            }
            Doctors = new ObservableCollection<Doctor>(doctorsArr);
        }

        public override void Update()
        {

        }

        public bool IsLoadingDetails
        {
            get
            {
                return _isLoadingDetails;
            }
            set
            {
                _isLoadingDetails = value;
                RaisePropertyChanged();
            }
        }
        protected override void SetHeaderValues(HeaderViewModel headerViewModel)
        {
            headerViewModel.ActionImgPath = "";
            headerViewModel.InfoText = "";
            headerViewModel.NavImgPath = @"..\Assets\btn_back.png";
            headerViewModel.NavImgPath_Hover = @"..\Assets\btn_back_hover.png";
            headerViewModel.NavImgPath_Press = @"..\Assets\btn_back_press.png";
            headerViewModel.ActionText = "";
            headerViewModel.HeaderText = "PATIENT INFO";
            headerViewModel.NavCommand = NavigateBackCommand;
            headerViewModel.ActionCommand = ActionCommand;
        }

        public ObservableCollection<Appointment> Appointments
        {
            get
            {
                return appointments;
            }
            set
            {
                appointments = value;
                RaisePropertyChanged();
            }
        }

        public ObservableCollection<Doctor> Doctors
        {
            get
            {
                return doctors;
            }
            set
            {
                doctors = value;
                RaisePropertyChanged();
            }
        }

        public Appointment SelectedAppointment
        {
            get { return selectedAppointment; }
            set
            {
                selectedAppointment = value;
                RaisePropertyChanged();
                if (CalendarSelectedDate != selectedAppointment.DateTime.Date || IsLoadingDetails)  //force updating calendar if it is loading time
                {
                    CalendarSelectedDate = selectedAppointment.DateTime.Date;
                    CalendarDisplayDate = selectedAppointment.DateTime.Date;
                }
            }
        }

        public List<DateTime> AppointmentDates
        {
            get
            {
                return appointmentDates;
            }
            set
            {
                appointmentDates = value;
                RaisePropertyChanged();
            }
        }

        public DateTime CalendarDisplayDate
        {
            get
            {
                return calendarDisplayDate;
            }
            set
            {
                if (calendarDisplayDate != value)
                {
                    calendarDisplayDate = value;
                    RaisePropertyChanged();
                }
            }
        }

        public DateTime CalendarSelectedDate
        {
            get
            {
                return calendarSelectedDate;
            }
            set
            {
                if (calendarSelectedDate != value.Date)
                {
                    calendarSelectedDate = value;
                    RaisePropertyChanged();
                    SetSelectedAppointment(value);
                }
            }
        }

        private void SetSelectedAppointment(DateTime value)
        {
            if (SelectedAppointment == null)
                return;
            if(SelectedAppointment.DateTime.Date != value.Date)
            {
                SelectAppointmentByDate(value);
            }
        }
        public bool SelectAppointmentByDate(DateTime calendarDate)
        {
            foreach (Appointment appt in Appointments)
            {
                if (appt.DateTime.Date == calendarDate.Date)
                {
                    SelectedAppointment = appt;  // if there are multiple appointments on the same date, just the first will be selected          
                    return true;
                }
            }
            return false;
        }
        class DoctorComparer : IEqualityComparer<Doctor>
        {
            public bool Equals(Doctor x, Doctor y)
            {
                if (x == null)
                {
                    if (y == null)
                        return true;
                    return false;
                }
                else if (y == null)
                    return false;

                return x.Name.Equals(y.Name, StringComparison.Ordinal);
            }
            public int GetHashCode(Doctor codeh)
            {
                return codeh.Name.GetHashCode();
            }
        }

        public override RelayCommand ActionCommand
        {
            get
            {
                if (actionCommand == null)
                {
                    actionCommand = new RelayCommand(null, CanExecuteAction);
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
                    navCommand = new RelayCommand(NavigationHelper.NavigateToMainPage);
                }
                return navCommand;
            }
        }
    }
}
