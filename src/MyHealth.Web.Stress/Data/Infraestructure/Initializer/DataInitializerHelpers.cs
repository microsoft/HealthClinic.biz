using System;
using System.Collections.Generic;
using System.Linq;
using MyHealth.Web.Stress.Models;

namespace MyHealth.Web.Stress.Data.Infraestructure.Initializer
{

    static class DataInitializerHelpers
    {

        private static readonly Random Randomize = new Random();

        internal static void GenerateAppointmentsAttendessRelationData(MyHealthContext context, Appointment appointment, ICollection<Attendee> attendees)
        {

            foreach (var attendee in attendees)
            {
                appointment.AppointmentAttendees.Add(new AppointmentAttendee
                {
                    AttendeeId = attendee.Id,
                    AppointmentId = appointment.Id
                });
            }

            context.SaveChanges();
        }

        internal static void GenerateAppointmentsWithRandomAttendessRelationData(MyHealthContext context, ICollection<Appointment> appointments)
        {
            var totalAttendees = DataInitializerValues.Attendees.Length;

            foreach (var appointment in appointments)
            {

                var attendeesOfAppointment = DataInitializerValues.Attendees
                    .OrderBy(a => Randomize.Next())
                    .Take(Randomize.Next(1, totalAttendees))
                    .ToList();

                GenerateAppointmentsAttendessRelationData(context, appointment, attendeesOfAppointment);

            }
        }

        internal static ICollection<Appointment> GenerateDayAppointmentsData(MyHealthContext context, DateTime day, string userEmail)
        {
            var totalAppointments = Randomize.Next(1, DataInitializerValues.MaxAppointmentsPerDay);
            var appointments = new List<Appointment>();

            var allowedMaxDurationPerBlock = (DataInitializerValues.EndOfWorkingDay - DataInitializerValues.StartOfWorkingDay) / totalAppointments;

            for (var i = 0; i < totalAppointments; i++)
            {
                var duration = Randomize.Next(DataInitializerValues.MinAppointmentHours, DataInitializerValues.MaxAppointmentHours);
                var blockStartHour = DataInitializerValues.StartOfWorkingDay + i * allowedMaxDurationPerBlock;
                var blockEndHour = DataInitializerValues.StartOfWorkingDay + (i + 1) * allowedMaxDurationPerBlock;
                var startHour = Randomize.Next(blockStartHour, blockEndHour - duration);

                var start = new DateTime(day.Year, day.Month, day.Day, startHour, GenerateRandomBoolean() ? 0 : 30, 0);

                var endHour = start.AddHours(duration);

                var appointment = new Appointment
                {
                    UserEmail = userEmail,
                    Description = DataInitializerValues.AppointmentDescriptions[Randomize.Next(1, DataInitializerValues.AppointmentDescriptions.Length)],
                    Start = start,
                    End = endHour
                };

                appointments.Add(appointment);
            };

            context.Appointments.AddRange(appointments);
            context.SaveChanges();

            return appointments;
        }
        internal static bool GenerateRandomBoolean()
        {
            return Randomize.Next(2) == 1;
        }


    }

}
