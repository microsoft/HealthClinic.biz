using MyHealth.Client.Core.Model;
using System;

namespace MyHealth.Client.Desktop
{
    public class DesignAppointmentViewModel
    {
        public ClinicAppointment SelectedAppointment { get; set; }

        public Doctor Doctor
        {
            get
            {
                return SelectedAppointment.Doctor;
            }
        }

        public Patient Patient { get { return SelectedAppointment.Patient; } }

        public int RoomNumber { get { return SelectedAppointment.RoomNumber; } }

        public DateTime DateTime { get { return SelectedAppointment.DateTime; } }

        public DesignAppointmentViewModel()
        {
            this.SelectedAppointment = DesignData.StandardAppointments[0];
        }
    }
}