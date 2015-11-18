using Cirrious.CrossCore;
using Cirrious.MvvmCross.ViewModels;
using MvvmCross.Plugins.Messenger;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Input;

namespace MyHealth.Client.Core.ViewModels
{
    public class MainViewModel : MvxViewModel
    {
        private readonly IMvxMessenger _messenger;

        private readonly Lazy<IMvxViewModel> _homeViewModel;
        private readonly Lazy<IMvxViewModel> _userViewModel;
        private readonly Lazy<AppointmentsViewModel> _appointmentsViewModel;
        private readonly Lazy<TreatmentViewModel> _treatmentViewModel;
        private readonly Lazy<SettingsViewModel> _settingsViewModel;

        private MvxSubscriptionToken _busySubscriptionToken;

        private bool _isBusy;

        public IMvxViewModel HomeViewModel { get { return _homeViewModel.Value; } }

        public IMvxViewModel UserViewModel { get { return _userViewModel.Value; } }

        public IMvxViewModel AppointmentsViewModel { get { return _appointmentsViewModel.Value; } }

        public IMvxViewModel TreatmentViewModel { get { return _treatmentViewModel.Value; } }

        public IMvxViewModel SettingsViewModel { get { return _settingsViewModel.Value; } }

        public bool IsBusy
        {
            get { return _isBusy; }
            set { _isBusy = value; RaisePropertyChanged(() => IsBusy); }
        }

		public MvxCommand SettingsCommand
		{ 
			get { return new MvxCommand(ShowSettings); }
		}

        public MvxCommand NavigateToHomeCommand { get { return new MvxCommand(ShowHome); } }

        public MvxCommand NavigateToAppointmentsCommand { get { return new MvxCommand(ShowAppointments); } }

        public MvxCommand NavigateToSettingsCommand { get { return new MvxCommand(ShowSettings); } }

        public MvxCommand NavigateToUserCommand { get { return new MvxCommand(ShowUser); } }

        public MvxCommand NavigateToTreatmentCommand { get { return new MvxCommand(ShowTreatment); } }

        public MainViewModel(IMvxMessenger messenger)
        {
            _messenger = messenger;

            _homeViewModel = new Lazy<IMvxViewModel>(() => Mvx.IocConstruct<HomeViewModel>());
            _userViewModel = new Lazy<IMvxViewModel>(() => Mvx.IocConstruct<UserViewModel>());
            _appointmentsViewModel = new Lazy<AppointmentsViewModel>(() => Mvx.IocConstruct<AppointmentsViewModel>());
            _treatmentViewModel = new Lazy<TreatmentViewModel>(() => Mvx.IocConstruct<TreatmentViewModel>());
            _settingsViewModel = new Lazy<SettingsViewModel>(() => Mvx.IocConstruct<SettingsViewModel>());
        }

        public override void Start()
        {
            _busySubscriptionToken = _messenger.Subscribe<BusyIndicatorMessage>(ChangeIsBusy);
        }

        public void ShowMenu()
        {
            ShowViewModel<MenuViewModel>();
        }

        public void ShowHome()
        {
            ShowViewModel<HomeViewModel>();
        }

        public void ShowAppointments()
        {
            ShowViewModel<AppointmentsViewModel>();
        }

        public void ShowSettings()
        {
            ShowViewModel<SettingsViewModel>();
        }

        public void ShowUser()
        {
            ShowViewModel<UserViewModel>();
        }

        public void ShowTreatment()
        {
            ShowViewModel<TreatmentViewModel>();
        }

        public void ShowNewAppointment()
        {
            ShowViewModel<NewAppointmentViewModel>();
        }

        private void ChangeIsBusy(BusyIndicatorMessage msg)
        {
            IsBusy = msg.IsBusy;
        }
    }
}
