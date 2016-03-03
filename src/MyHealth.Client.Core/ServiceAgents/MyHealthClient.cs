using MvvmCross.Plugins.Messenger;

namespace MyHealth.Client.Core.ServiceAgents
{
    public class MyHealthClient : IMyHealthClient
    {
        readonly IMvxMessenger _messenger;

        DoctorsService _doctorsService;
		MedicinesService _medicinesService;
		PatientsService _patientsService;
		ReportsService _reportsService;
		HomeAppointmentsService _visitsService;
		ClinicAppointmentsService _appointmentsService;
        TipsService _tipService;
        TenantsService _tenantsService;
        HomeAppointmentsService _homeAppointmentsService;
        DoctorCalendarService _doctorCalendarService;
        AuthenticationService _authenticationService;
        string _serverUrl;
        int _tenantId;
        MvxSubscriptionToken _token;

        #region Services Properties

        public AuthenticationService AuthenticationService
        {
            get
            {
                return _authenticationService ?? (_authenticationService = new AuthenticationService(PatientsService, _messenger));
            }
        }

        public TipsService TipsService
        {
            get
            {
                return _tipService ?? (_tipService = new TipsService(_serverUrl, _tenantId));
            }
        }

        public TenantsService TenantsService
        {
            get
            {
                return _tenantsService ?? (_tenantsService = new TenantsService(_serverUrl, _tenantId));
            }
        }

        public ClinicAppointmentsService AppointmentsService
        {
            get
            {
                return _appointmentsService ?? (_appointmentsService = new ClinicAppointmentsService(_serverUrl, _tenantId));
            }
        }

        public HomeAppointmentsService VisitsService
        {
            get
            {
                return _visitsService ?? (_visitsService = new HomeAppointmentsService(_serverUrl, _tenantId));
            }
        }

        public ReportsService ReportsService
        {
            get
            {
                return _reportsService ?? (_reportsService = new ReportsService(_serverUrl, _tenantId));
            }
        }

        public PatientsService PatientsService
        {
            get
            {
                return _patientsService ?? (_patientsService = new PatientsService(_serverUrl, _tenantId));
            }
        }

        public MedicinesService MedicinesService
        {
            get
            {
                return _medicinesService ?? (_medicinesService = new MedicinesService(_serverUrl, _tenantId));
            }
        }

        public DoctorsService DoctorsService
        {
            get
            {
                return _doctorsService ?? (_doctorsService = new DoctorsService(_serverUrl, _tenantId));
            }
        }

        public HomeAppointmentsService HomeAppointmentsService
        {
            get
            {
                return _homeAppointmentsService ?? (_homeAppointmentsService = new HomeAppointmentsService(_serverUrl, _tenantId));
            }
        }

        public DoctorCalendarService DoctorCalendarService
        {
            get
            {
                return _doctorCalendarService ?? (_doctorCalendarService = new DoctorCalendarService(_serverUrl, _tenantId));
            }
        }

        #endregion

        public MyHealthClient(IMvxMessenger messenger)
        {
            _messenger = messenger;

            _serverUrl = AppSettings.ServerlUrl;
            _tenantId = AppSettings.DefaultTenantId;

            _token = _messenger.Subscribe<SettingsChangedMessage>(_ => Refresh());
        }

        public MyHealthClient(string serverUrl, int tenantId)
        {
            _serverUrl = serverUrl;
            _tenantId = tenantId;
        }

        public MyHealthClient()
        {
            _serverUrl = AppSettings.ServerlUrl;
            _tenantId = AppSettings.DefaultTenantId;
        }

        // NOTE: In order to notify "child" _*Service on UrlPrefix
        // change, add below code for such service
        public void Refresh()
        {
            UpdateUrlPrefix(_doctorsService);
            UpdateUrlPrefix(_medicinesService);
            UpdateUrlPrefix(_patientsService);
            UpdateUrlPrefix(_reportsService);
            UpdateUrlPrefix(_visitsService);
            UpdateUrlPrefix(_appointmentsService);
            UpdateUrlPrefix(_tipService);

            _messenger.Publish(new ReloadDataMessage(this));

        }

        private void UpdateUrlPrefix(IBaseRequest service)
        {
            if (service != null)
            {
                service.UrlPrefix = AppSettings.ServerlUrl;
            }
        }
    }
}
