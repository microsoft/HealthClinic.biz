using MyHealth.Client.Core.Model;
using MyHealth.Client.Core.ServiceAgents;
using MyHealth.Client.Desktop.Helpers;
using MyHealth.Client.Desktop.Infrastructure;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.IO;
using System.Net.Http;
using System.Threading.Tasks;


namespace MyHealth.Client.Desktop.ViewModels
{
    public class MainViewModel : BaseViewModel
    {
        readonly IMyHealthClient _myClient;
        private bool _isLoadingDetails;
        private ObservableCollection<Appointment> appointments;
        private static List<ClinicAppointment> appointmentListCache = null;
        private static string appointmentListCacheFileName = "AppointmentListCache.json";
        private Appointment selectedAppointment;

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
        public MainViewModel(IMyHealthClient client)
        {
            this._myClient = client;
            if (appointmentListCache == null)
            {
                ReadCacheFromFile();
            }
            SetHeaderValues(this.Header);
        }

        public override async void Load()
        {
            await LoadDetailsAsync();
            Preload();
        }

        public async void Preload()
        {
            //preload for next pages
            ((App)App.Current).AppViewModel.Patients = await _myClient.PatientsService.GetAsync(20, 0);
        }

        public override void Update()
        {
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

        public Appointment SelectedAppointment
        {
            get { return selectedAppointment; }
            set
            {
                selectedAppointment = value;
                if (selectedAppointment != null)
                    ((App)App.Current).AppViewModel.CurrentPatient = selectedAppointment.Patient;
                RaisePropertyChanged();
            }
        }

        protected async virtual Task LoadDetailsAsync()
        {
            IsLoadingDetails = true;
            appointments = null;

            //first try loading the cache
            if (appointmentListCache != null)
            {
                UpdateDetails(appointmentListCache);
            }

            //Now load the real data
            string response = null;
            List<ClinicAppointment> appointmentList;
            try
            {
                response = await GetClinicAppointmentsStringAsync(20);
                appointmentList = JsonConvert.DeserializeObject<List<ClinicAppointment>>(response);
                //appointments coming from the server have UTC time
                DateTimeHelper.ConvertToLocalTime(appointmentList);
                appointmentListCache = appointmentList;
            }
            catch (Exception)
            {
                //To do: Error message here, and close the application?
                appointmentList = new List<ClinicAppointment>();
                response = null;
            }

            UpdateDetails(appointmentList);
            IsLoadingDetails = false;

            if (response != null)
                await WriteCacheToFileAsync(response);
        }

        private void UpdateDetails(List<ClinicAppointment> appointmentsList)
        {
            Appointments = new ObservableCollection<Appointment>(appointmentsList);

            if (appointmentsList.Count > 0)
            {
                SelectedAppointment = appointmentsList[0];
            }
        }

        public override RelayCommand ActionCommand
        {
            get
            {
                if (actionCommand == null)
                {
                    actionCommand = new RelayCommand(NavigationHelper.NavigateToPatientSelector);
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
                    navCommand = new RelayCommand(null);
                }

                return navCommand;
            }
        }

        protected override void SetHeaderValues(HeaderViewModel headerViewModel)
        {
            //var container = ((App)App.Current).Container;
            //HeaderViewModel header = container.Resolve<HeaderViewModel>();
            headerViewModel.ActionImgPath = @"..\Assets\btn_new_appointment.png";
            headerViewModel.ActionImgPath_Hover = @"..\Assets\btn_new_appointment_hover.png";
            headerViewModel.ActionImgPath_Press = @"..\Assets\btn_new_appointment_press.png";
            headerViewModel.ActionText = "New Appointment";
            headerViewModel.HeaderText = "DASHBOARD";
            headerViewModel.NavCommand = NavigateBackCommand;
            headerViewModel.ActionCommand = ActionCommand;
            headerViewModel.InfoText = "";
            headerViewModel.NavImgPath = "";
        }

        private async Task<string> GetClinicAppointmentsStringAsync(int count)
        {
            ClinicAppointmentsService service = _myClient.AppointmentsService;
            string url = $"{service.UrlPrefix}api/clinicappointments/clinic/next/?count={count}";

            HttpClient httpClient = service.GetHttpClient();

            return await httpClient.GetStringAsync(url);
        }

        private async Task WriteCacheToFileAsync(string cache)
        {
            await Task.Run(() => File.WriteAllText(appointmentListCacheFileName, cache));
        }
        private void ReadCacheFromFile()
        {
            if (!File.Exists(appointmentListCacheFileName))
                return;

            string appointmentListString = File.ReadAllText(appointmentListCacheFileName);

            try
            {
                appointmentListCache = JsonConvert.DeserializeObject<List<ClinicAppointment>>(appointmentListString);
                DateTimeHelper.ConvertToLocalTime(appointmentListCache);
            }
            catch (Exception)
            {
                appointmentListCache = null;
            }

        }
    }
}

