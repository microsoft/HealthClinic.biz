namespace MyHealth.Web.Stress.Models
{
    public class AppointmentAttendee
    {
        public int AppointmentId { get; set; }
        public virtual Appointment Appointment { get; set; }
        public int AttendeeId { get; set; }
        public virtual Attendee Attendee { get; set; }
    }
}
