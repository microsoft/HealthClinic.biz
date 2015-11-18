namespace MyHealth.Web.Stress.Models
{
    using System;
    using System.ComponentModel.DataAnnotations;
    using System.Collections.Generic;
    public class Appointment
    {
        public Appointment()
        {
            AppointmentAttendees = new HashSet<AppointmentAttendee>();
        }

        public int Id { get; set; }
        public string UserEmail { get; set; }
        public string Description { get; set; }
        public DateTime Start { get; set; }
        public DateTime End { get; set; }
        public virtual ICollection<AppointmentAttendee> AppointmentAttendees { get; set; }
    }
}
