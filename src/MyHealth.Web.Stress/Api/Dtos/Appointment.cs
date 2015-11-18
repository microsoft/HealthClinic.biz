
using System;
using System.Collections.Generic;

namespace MyHealth.Web.Stress.Api.Dtos
{
    public class Appointment
    {
        public string Description { get; set; }
        public DateTime Start { get; set; }
        public DateTime End { get; set; }
        public ICollection<Attendee> Attendees { get; set; }
    }
}
