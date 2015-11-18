using System.Collections.Generic;

namespace MyHealth.Web.Stress.Models
{
    using System.ComponentModel.DataAnnotations;

    public class Attendee
    {

        public Attendee()
        {
            AppointmentAttendees = new HashSet<AppointmentAttendee>();
        }
      
        public int Id { get; set; }
        public string Email { get; set; }
        public string Name { get; set; }
        public virtual ICollection<AppointmentAttendee> AppointmentAttendees { get; set; }
    }
}
