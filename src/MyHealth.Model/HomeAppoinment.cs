using System;

namespace MyHealth.Model
{
    public class HomeAppointment : Appointment
    {
        public string Address { get; set; }

        public double Latitude { get; set; }

        public double Longitude { get; set; }

        public bool Visited { get; set; }

        // This properties are needed to integrate the database with Mobile App
        public bool Deleted { get; set; }

        public DateTimeOffset? CreatedAt { get; set; }

        public string Id { get; set; }

        public DateTimeOffset? UpdatedAt { get; set; }

        public byte[] Version { get; set; }
    }
}
