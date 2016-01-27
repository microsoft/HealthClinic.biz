
using MyHealth.Web.Stress.Models;

namespace MyHealth.Web.Stress.Data.Infraestructure.Initializer
{
    public class DataInitializerValues
    {

        internal const int MonthsWithData = 4;
        internal const int DaysWithAppointmentsPerMonth = 5;

        internal const int StartOfWorkingDay = 6;
        internal const int EndOfWorkingDay = 18;
        internal const int MinAppointmentHours = 2;
        internal const int MaxAppointmentHours = 4;

        internal const int MinHeartValue = 60;
        internal const int MaxHeartValue = 170;
        internal const int HeartStep = 4;

        internal const int MinGlucoseValue = 80;
        internal const int MaxGlucoseValue = 140;
        internal const int GlucoseStep = 3;

        internal const int MinStressValue = 30;
        internal const int MaxStressValue = 100;
        internal const int StressStep = 2;

        internal const int MaxAppointmentsPerDay = 3;

        internal static readonly string[] AppointmentDescriptions = {
           "Sprint planning",
           "Retrospective",
           "Review",
           "Meeting",
           "Videoconference"
        };

        internal static readonly Attendee Attende1 = new Attendee
        {
            Email = "attende1@healthclinic.biz",
            Name = "Attende 1"
        };

        internal static readonly Attendee Attendee2 = new Attendee
        {
            Email = "attendee2@healthclinic.com",
            Name = "Attendee 2"
        };

        internal static readonly Attendee Attendee3 = new Attendee
        {
            Email = "attendee3@healthclinic.biz",
            Name = "Attendee 3"
        };

        internal static readonly Attendee Attendee4 = new Attendee
        {
            Email = "atttende4@healthclinic.biz",
            Name = "Attendee 4"
        };

        internal static readonly Attendee[] Attendees = { Attende1, Attendee2, Attendee3, Attendee4 };

       
    }

}
