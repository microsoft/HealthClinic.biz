using System;

namespace MyHealth.Client.Core.Model
{
    public abstract class Appointment
    {
        public int AppointmentId { get; set; }

        public int PatientId { get; set; }

        public Patient Patient { get; set; }

        public int DoctorId { get; set; }

        public Doctor Doctor { get; set; }

        public DateTime DateTime { get; set; }

        public string Description { get; set; }

        public Specialities Speciality { get; set; }

        public bool IsUrgent { get; set; }

        public int TenantId { get; set; }

    }
}
