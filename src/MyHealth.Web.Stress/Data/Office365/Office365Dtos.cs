using System;
using System.Collections.Generic;

namespace MyHealth.Web.Stress.Data.Office365
{
    public class Office365Dtos
    {

        public class EmailAddress
        {
            public string Address { get; set; }
            public string Name { get; set; }
        }

        public class Attendee
        {
            public EmailAddress EmailAddress { get; set; }
        }

        public class Event
        {
            public IList<Attendee> Attendees { get; set; }
            public string Subject { get; set; }
            public DateTimeOffset Start { get; set; }
            public DateTimeOffset End { get; set; }
        }
    }
}
