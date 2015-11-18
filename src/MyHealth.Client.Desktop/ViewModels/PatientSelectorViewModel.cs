using MyHealth.Client.Core.Model;
using MyHealth.Client.Core.ServiceAgents;
using MyHealth.Client.Desktop.Infrastructure;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.Threading.Tasks;
using System.Windows.Input;

namespace MyHealth.Client.Desktop.ViewModels
{
    public class PatientSelectorViewModel : BaseViewModel
    {
        readonly IMyHealthClient _myClient;
        private List<Patient> patients = null;
        private ObservableCollection<Patient> filteredPatients;
        private Patient selectedPatient;
        private bool _isLoadingDetails;

        public PatientSelectorViewModel(IMyHealthClient client)
        {
            this._myClient = client;
            SetHeaderValues(this.Header);
            patients = ((App)App.Current).AppViewModel.Patients;
        }

        public override async void Load()
        {
            await LoadDetailsAsync();
        }

        public override void Update()
        {

        }

        public ObservableCollection<Patient> FilteredPatients
        {
            get
            {
                return filteredPatients;
            }
            set
            {
                filteredPatients = value;
                RaisePropertyChanged();
            }
        }

        public Patient SelectedPatient
        {
            get { return selectedPatient; }
            set
            {
                selectedPatient = value;
                RaisePropertyChanged();
            }
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
                Header.ActionText = GetActionTextString();
            }
        }

        public override RelayCommand ActionCommand
        {
            get
            {
                if (actionCommand == null)
                {
                    actionCommand = new RelayCommand(NavigationHelper.NavigateToNewAppointment, CanExecuteAction);
                    CommandManager.RequerySuggested += (s, e) => { actionCommand.RaiseCanExecutedChanged(); };
                }
                return actionCommand;
            }
        }

        protected override bool CanExecuteAction()
        {
            return SelectedPatient != null;
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

        protected async virtual Task LoadDetailsAsync()
        {
            IsLoadingDetails = true;
            if (patients == null || patients.Count == 0)
                patients = await _myClient.PatientsService.GetAsync(10, 0);
            FilteredPatients = new ObservableCollection<Patient>(patients);
            SelectedPatient = FilteredPatients.FirstOrDefault();    //do we need the first patient in list selected by default? 
            IsLoadingDetails = false;
            ((App)App.Current).AppViewModel.Patients = await _myClient.PatientsService.GetAsync(20, 0);
        }

        public void Filter(string filterString)
        {

            if (patients != null)
            {
                if (string.IsNullOrEmpty(filterString))
                {
                    FilteredPatients = new ObservableCollection<Patient>(patients);
                }
                else
                {
                    FilteredPatients = new ObservableCollection<Patient>(patients.Where(pat => pat.Name.ToUpperInvariant().Contains(filterString.ToUpperInvariant())));
                }
                SelectedPatient = FilteredPatients.FirstOrDefault();  //do we need the first patient in list selected by default? 
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
            headerViewModel.ActionText = GetActionTextString();
            headerViewModel.HeaderText = "NEW APPOINTMENT";
            headerViewModel.NavCommand = NavigateBackCommand;
            headerViewModel.ActionCommand = ActionCommand;
            headerViewModel.InfoText = string.Empty;
        }

        private string GetActionTextString()
        {
            if (!IsLoadingDetails)
                return "Select";
            else return "";
        }
    }
}
