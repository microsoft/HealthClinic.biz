namespace MyHealth.MobileApp.DataObjects
{
    public class HomeAppointment : Appointment
    {
        public string Address { get; set; }

        public double Latitude { get; set; }

        public double Longitude { get; set; }

        public bool Visited { get; set; }
    }
}