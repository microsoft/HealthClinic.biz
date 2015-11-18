using System;
using System.Collections.Generic;

namespace MyHealth.Office365
{
    public class GraphUser
    {
        public string objectId;
        public string mail;
        public string userPrincipalName;
    }

    public class TimeSlot
    {
        public DateTimeOffset Start { get; set; }
        public int LengthInMinutes { get; set; }
    }

    public enum ResponseType
    {
        None = 0,
        Organizer = 1,
        TentativelyAccepted = 2,
        Accepted = 3,
        Declined = 4,
        NotResponded = 5
    }

    public class ResponseStatus
    {
        public ResponseType Response { get; set; }
        public DateTimeOffset? Time { get; set; }
    }

    public enum AttendeeType
    {
        Required = 0,
        Optional = 1,
        Resource = 2
    }

    public class EmailAddress
    {
        public string Address { get; set; }
        public string Name { get; set; }
    }

    public class Attendee
    {
        public EmailAddress EmailAddress { get; set; }
        public ResponseStatus Status { get; set; }
        public AttendeeType Type { get; set; }
    }

    public enum BodyType
    {
        Text = 0,
        HTML = 1
    }

    public class ItemBody
    {
        public string Content { get; set; }
        public BodyType ContentType { get; set; }
    }

    public class Event_Beta
    {
        public IList<Attendee> Attendees { get; set; }
        public ItemBody Body { get; set; }
        public string Subject { get; set; }
        public DateTimeOffset Start { get; set; }
        public DateTimeOffset End { get; set; }
        public Location Location { get; set; }
    }

    public class Event
    {
        public IList<Attendee> Attendees { get; set; }
        public ItemBody Body { get; set; }
        public string Subject { get; set; }
        public DateTimeAndTimeZone Start { get; set; }
        public DateTimeAndTimeZone End { get; set; }
        public Location Location { get; set; }
    }

    public class DateTimeAndTimeZone
    {
        public DateTimeOffset DateTime { get; set; }
        public string TimeZone { get; set; }
    }

    public class Location
    {
        public string DisplayName { get; set; }
    }

    public class Appointment
    {
        public string DoctorPrincipalName { get; set; }
        public string PatientEmail { get; set; }
        public string Subject { get; set; }
        public string Description { get; set; }
        public string Location { get; set; }
        public DateTimeOffset Start { get; set; }
        public int LengthInMinutes { get; set; }
    }
}
