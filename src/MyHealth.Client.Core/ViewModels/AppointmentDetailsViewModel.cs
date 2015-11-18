using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Cirrious.MvvmCross.ViewModels;
using MvvmCross.Plugins.Messenger;
using MyHealth.Client.Core.Model;
using MyHealth.Client.Core.ServiceAgents;
using System.Globalization;

namespace MyHealth.Client.Core.ViewModels
{
    public class AppointmentDetailsViewModel : BaseViewModel
    {
        private readonly IMyHealthClient _client;
        private int? _appointmentId;

        private ClinicAppointment _appointment;
        public ClinicAppointment Appointment
        {
            get { return _appointment; }
            set
            {
                _appointment = value;
                RaisePropertyChanged(() => Appointment);
            }
        }

        public AppointmentDetailsViewModel(IMyHealthClient client, IMvxMessenger messenger) : base(messenger)
        {
            _client = client;
            _appointmentId = null;
        }

        protected override void InitFromBundle(IMvxBundle parameters)
        {
            base.InitFromBundle(parameters);
            _appointmentId = 0;
            if (parameters.Data.ContainsKey("appointmentId"))
            {
                int id;
                if (int.TryParse(parameters.Data["appointmentId"], NumberStyles.Integer, CultureInfo.InvariantCulture, out id))
                {
                    _appointmentId = id;
                    ReloadDataAsync().Forget();
                }
            }
        }

        protected override async Task InitializeAsync()
        {
            if (_appointmentId.HasValue)
            {
                Appointment = await _client.AppointmentsService.GetAsync(_appointmentId.Value);
            }
        }
    }
}
