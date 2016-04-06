using Android.App;
using Android.OS;
using MyHealth.Client.Core.ViewModels;
using Android.Support.V4.Widget;
using Cirrious.MvvmCross.ViewModels;
using System;
using Android.Content.PM;
using MyHealth.Client.Droid.Extensions;
using Cirrious.CrossCore;
using Cirrious.MvvmCross.Droid.Support.Fragging.Presenter;
using Cirrious.MvvmCross.Droid.Support.Fragging.Fragments;
using Cirrious.MvvmCross.Droid.Support.AppCompat;
using Toolbar = Android.Support.V7.Widget.Toolbar;
using Cirrious.MvvmCross.Binding.BindingContext;
using Android.Views;
using Android.Content.Res;
using MyHealth.Client.Core;
using Android.Widget;
using Microsoft.WindowsAzure.MobileServices;
using MyHealth.Client.Droid.Notifications;
using Gcm.Client;
using System.Threading.Tasks;
using MyHealth.Client.Core.Helpers;
using Microsoft.IdentityModel.Clients.ActiveDirectory;
using MyHealth.Client.Core.ServiceAgents;
using MvvmCross.Plugins.Messenger;
using MyHealth.Client.Core.Messages;

namespace MyHealth.Client.Droid.Views
{
    [Activity(Label = "Main Activity", LaunchMode = LaunchMode.SingleTask)]
    public class MainActivity :
        MvxCachingFragmentCompatActivity, IMvxFragmentHost
    {
        public MobileServiceClient mobileAppClient;
        private DrawerLayout _drawerLayout;
        private MvxActionBarDrawerToggle _drawerToggle;
        private FragmentManager _fragmentManager;
        private BindableProgress _bindableProgress;


        internal DrawerLayout DrawerLayout { get { return _drawerLayout; } }

        static MainActivity instance = new MainActivity();

        // Return the current activity instance.
        public static MainActivity CurrentActivity
        {
            get
            {
                return instance;
            }
        }

        // Return the Mobile Services client.
        public MobileServiceClient CurrentClient
        {
            get
            {
                return mobileAppClient;
            }
        }

        protected override void OnCreate(Bundle bundle)
        {
            base.OnCreate(bundle);

            RegisterForPushNotifications();

            RegisterFragments(bundle);
            SetContentView(Resource.Layout.MainView);
            var toolbar = FindViewById<Toolbar>(Resource.Id.toolbar);
            SetSupportActionBar(toolbar);
            _drawerLayout = FindViewById<DrawerLayout>(Resource.Id.drawer_layout);
            _drawerLayout.SetDrawerShadow(Resource.Drawable.drawer_shadow_light, (int)GravityFlags.Start);
            _drawerToggle = new MvxActionBarDrawerToggle(this, _drawerLayout,
                Resource.String.drawer_open, Resource.String.drawer_close);
            _drawerToggle.DrawerClosed += (_, e) => InvalidateOptionsMenu();
            _drawerToggle.DrawerOpened += (_, e) => InvalidateOptionsMenu();
            SupportActionBar.SetDisplayShowTitleEnabled(false);
            SupportActionBar.SetDisplayHomeAsUpEnabled(true);
            _drawerToggle.DrawerIndicatorEnabled = true;
            _drawerLayout.SetDrawerListener(_drawerToggle);
            _drawerLayout.Post(() => _drawerToggle.SyncState());
            _bindableProgress = new BindableProgress(this);
            SetUpBindings();

            Akavache.BlobCache.ApplicationName = "MyHealth";

            ViewModel.ShowMenu();
            ViewModel.ShowHome();

            var authContext = new PlatformParameters(this);
            Task.Run(() => SignIn(authContext));
        }

        async void SignIn(PlatformParameters authContext)
        {
            if (Settings.SecurityEnabled)
            {
                var messenger = Mvx.Resolve<IMvxMessenger>();
                await (new MyHealthClient(messenger)).AuthenticationService.SignInAsync(authContext);
            }
        }

        private void RegisterForPushNotifications()
        {
            try
            {
                // Create the Mobile Service Client instance, using the provided
                // Mobile Service URL and key
                mobileAppClient = new MobileServiceClient(AppSettings.MobileAPIUrl);

                instance = this;
                // Make sure the GCM client is set up correctly.
                GcmClient.CheckDevice(this);
                GcmClient.CheckManifest(this);

                // Register the app for push notifications.
                GcmClient.Register(this, BroadcastReceiver.senderIDs);
            }
            catch (Exception ex)
            {
                System.Diagnostics.Debug.WriteLine(
                   string.Format("Error with GCM push registration: {0}", ex.Message));
            }
        }

        internal void SetTitle(string title)
        {
            var toolbar = FindViewById<Toolbar>(Resource.Id.toolbar);
            var textTitle = toolbar.FindViewById<TextView>(Resource.Id.toolbar_title);
            textTitle.Text = title;
        }

        public override bool OnCreateOptionsMenu(IMenu menu)
        {
            MenuInflater.Inflate(Resource.Menu.toolbar_menu, menu);

            return base.OnCreateOptionsMenu(menu);
        }

        private void SetUpBindings()
        {
            var set = this.CreateBindingSet<MainActivity, MainViewModel>();

            set.Bind(_bindableProgress)
                .For(progress => progress.Visible)
                .To(vm => vm.IsBusy);

            set.Apply();
        }


        internal void CloseDrawerMenu()
        {
            _drawerLayout.CloseDrawers();
        }

        public override bool OnOptionsItemSelected(IMenuItem item)
        {
            if (_drawerToggle.OnOptionsItemSelected(item))
            {
                return true;
            }

            switch (item.ItemId)
            {
                case Resource.Id.action_new_appointment:
                    ViewModel.ShowNewAppointment();
                    return true;
            }

            return base.OnOptionsItemSelected(item);
        }

        public new MainViewModel ViewModel
        {
            get { return (MainViewModel)base.ViewModel; }
            set { base.ViewModel = value; }
        }

        private void RegisterFragments(Bundle bundle)
        {

            RegisterFragment<MenuFragment, MenuViewModel>(typeof(MenuViewModel).TagName(), bundle);
            RegisterFragment<HomeFragment, HomeViewModel>(typeof(HomeViewModel).TagName(), bundle);
            RegisterFragment<AppointmentsFragment, AppointmentsViewModel>(typeof(AppointmentsViewModel).TagName(), bundle);
            RegisterFragment<AppointmentDetailsFragment, AppointmentDetailsViewModel>(typeof(AppointmentDetailsViewModel).TagName(), bundle);
            RegisterFragment<TreatmentFragment, TreatmentViewModel>(typeof(TreatmentViewModel).TagName(), bundle);
            RegisterFragment<UserFragment, UserViewModel>(typeof(UserViewModel).TagName(), bundle);
        }

        public void RegisterFragment<TFragment, TViewModel>(string tag, Bundle args, IMvxViewModel viewModel = null)
            where TFragment : IMvxFragmentView
            where TViewModel : IMvxViewModel
        {
            var presenter = Mvx.Resolve<IMvxFragmentsPresenter>();
            presenter.RegisterViewModelAtHost<TViewModel>(this);
            RegisterFragment<TFragment, TViewModel>(tag);
        }

        public bool Show(MvxViewModelRequest request, Bundle bundle)
        {
            _drawerLayout.CloseDrawers();

            if (request.ViewModelType == typeof(MenuViewModel))
            {
                ShowFragment(typeof(MenuViewModel).TagName(), Resource.Id.left_drawer, bundle);
            }
            else
            {
                ShowFragment(request.ViewModelType.TagName(), Resource.Id.content_view, bundle, addToBackStack:true);
            }

            return true;
        }

        public override void OnBeforeFragmentChanging(string tag, Android.Support.V4.App.FragmentTransaction transaction)
        {
            base.OnBeforeFragmentChanging(tag, transaction);
        }

        protected override void OnStop()
        {
            base.OnStop();
        }

        protected override void OnStart()
        {
            base.OnStart();
        }

        protected override void OnPostCreate(Bundle savedInstanceState)
        {
            base.OnPostCreate(savedInstanceState);
            _drawerToggle.SyncState();
        }

        public override void OnConfigurationChanged(Configuration newConfig)
        {
            base.OnConfigurationChanged(newConfig);
            _drawerToggle.SyncState();
        }

        public bool Close(IMvxViewModel viewModel)
        {
            return true;
        }

        protected override void OnActivityResult(int requestCode, Result resultCode, Android.Content.Intent data)
        {
            base.OnActivityResult(requestCode, resultCode, data);
            Microsoft.IdentityModel.Clients.ActiveDirectory.AuthenticationAgentContinuationHelper
                .SetAuthenticationAgentContinuationEventArgs(requestCode, resultCode, data);
        }
    }
}