using MyHealth.Client.Core.Model;
using System;

namespace MyHealth.Client.Desktop
{
    public class DesignDetailsViewModel
    {
        public DetailsViewModel CurrentHeaderViewModel { get; private set; }

        public DesignDetailsViewModel()
        {
            this.CurrentHeaderViewModel = new DetailsViewModel();
        }

        public class DetailsViewModel
        {
            public Appointment SelectedAppointment { get; set; }

            public Doctor SelectedDoctor
            {
                get
                {
                    return SelectedAppointment.Doctor;
                }
                set
                {
                    //nothing
                }
            }

            public Patient Patient { get { return SelectedAppointment.Patient; } }

            public DetailsViewModel()
            {
                this.SelectedAppointment = DesignData.StandardAppointments[0];
            }
        }
    }
}