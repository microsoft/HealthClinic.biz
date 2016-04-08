using Cirrious.MvvmCross.ViewModels;
using MvvmCross.Plugins.Messenger;
using MyHealth.Client.Core.Messages;
using MyHealth.Client.Core.Model;
using MyHealth.Client.Core.ServiceAgents;
using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MyHealth.Client.Core.ViewModels
{
    public class MenuViewModel
            : BaseViewModel
    {
        private readonly ICurrentUserService _userSvc;
        private Patient _currentUser;
		private IDisposable _subscriptionToken;
        
		public ObservableCollection<MenuItem> MenuItems { get; private set; }

        public MvxCommand<MenuItem> ItemSelectedCommand { get; private set; }

        public event EventHandler CloseMenu;

        public Patient CurrentUser
        {
            get
            {
                return _currentUser;
            }
            set
            {
                _currentUser = value;
                RaisePropertyChanged(() => CurrentUser);
            }
        }

        public MenuViewModel(ICurrentUserService usvc, IMvxMessenger messenger) : base(messenger)
        {
            _userSvc = usvc;

			_subscriptionToken = _messenger.Subscribe<LoggedUserInfoChangedMessage>(UpdateLoggedUserInfo);

            MenuItems = new ObservableCollection<MenuItem>();
            ItemSelectedCommand = new MvxCommand<MenuItem>(OnSelectItem);

            MenuItems.Add(new MenuItem
            {
                Title = "Home",
                ViewModelType = typeof(HomeViewModel),
                Option = MenuOption.Home,
                IsSelected = true
            });

            MenuItems.Add(new MenuItem
            {
                Title = "Appointments",
                ViewModelType = typeof(AppointmentsViewModel),
                Option = MenuOption.Appointment
            });

            MenuItems.Add(new MenuItem
            {
                Title = "Treatments",
                ViewModelType = typeof(TreatmentViewModel),
                Option = MenuOption.Treatment
            });

            MenuItems.Add(new MenuItem
            {
                Title = "User",
                ViewModelType = typeof(UserViewModel),
                Option = MenuOption.User
            });

            MenuItems.Add(new MenuItem
            {
                Title = "Settings",
                ViewModelType = typeof(SettingsViewModel),
                Option = MenuOption.Settings
            });
        }

        private void OnSelectItem(MenuItem item)
        {
            if (item.IsSelected)
            {
                RaiseCloseMenu();
                return;
            }

            if (item.Option != MenuOption.Settings)
            {
                HighlightNewMenuOption(item);
            }

            ShowViewModel(item.ViewModelType);
        }

        private void RaiseCloseMenu()
        {
            var handler = CloseMenu;
            
			if (handler != null)
            {
                handler(this, EventArgs.Empty);
            }
        }

        private void HighlightNewMenuOption(MenuItem item)
        {
            foreach (var menuItem in MenuItems.Where(m => m != item))
            {
                if (menuItem.IsSelected)
                {
                    menuItem.IsSelected = false;
                }
            }
            
			item.IsSelected = true;
        }

        public override void Start()
        {
            base.Start();
            
			ReloadDataAsync().Forget();
        }

        protected override async Task InitializeAsync()
        {
            CurrentUser = await _userSvc.GetCurrentAsync();
        }

		private void UpdateLoggedUserInfo(LoggedUserInfoChangedMessage msg)
        {
			CurrentUser.Name = MicrosoftGraphService.LoggedUser;
			CurrentUser.Email = MicrosoftGraphService.LoggedUserEmail;
			CurrentUser.Picture = MicrosoftGraphService.LoggedUserPhoto;

            RaisePropertyChanged(() => CurrentUser);
        }
    }
}
