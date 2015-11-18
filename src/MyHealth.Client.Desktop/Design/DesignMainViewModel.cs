using MyHealth.Client.Core.Model;
using Newtonsoft.Json;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;

namespace MyHealth.Client.Desktop
{
    public class DesignMainViewModel
    {
        public ObservableCollection<Appointment> Appointments { get; set; }

        public bool IsLoadingDetails { get; set; }

        public DesignDetailsViewModel Details { get; set; }

        public DesignMainViewModel()
        {
            IsLoadingDetails = true;
            Appointments = new ObservableCollection<Appointment>(DesignData.StandardAppointments);
            Details = new DesignDetailsViewModel();
            IsLoadingDetails = false;
        }
    }
}
