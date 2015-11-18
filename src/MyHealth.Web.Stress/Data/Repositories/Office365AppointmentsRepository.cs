using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MyHealth.Web.Stress.Data.Office365;
using MyHealth.Web.Stress.Models;

namespace MyHealth.Web.Stress.Data.Repositories
{
    public class Office365AppointmentsRepository : IAppointmentsRepository
    {
        private readonly Office365HttpApi _office365HttpApi;


        public Office365AppointmentsRepository(Office365HttpApi office365HttpApi)
        {
            _office365HttpApi = office365HttpApi;
        }

        public async Task<ICollection<Appointment>> GetAsync(string userEmail, int year, int month)
        {
            var date = new DateTimeOffset(new DateTime(year, month, 1));
            var events = await _office365HttpApi.GetUserMonthEvents(userEmail, date);
            var appointments = MapEventsToAppointments(events);
            return appointments;
        }

        public async Task<ICollection<Appointment>> GetAsync(string userEmail, int year, int month, int day)
        {
            var date = new DateTimeOffset(new DateTime(year, month, day));
            var events = await _office365HttpApi.GetUserDayEvents(userEmail, date);
            var appointments = MapEventsToAppointments(events);
            return appointments;
        }


        private static ICollection<Appointment> MapEventsToAppointments(IEnumerable<Office365Dtos.Event> events)
        {
            var appointments = events
                .Select(e => new Appointment
                {
                    Description = e.Subject,
                    Start = e.Start.DateTime,
                    End = e.End.DateTime,
                    AppointmentAttendees = e.Attendees.Select(a => new AppointmentAttendee
                    {
                        Attendee = new Attendee { Email = a.EmailAddress.Address, Name = a.EmailAddress.Name }
                    }).ToList()
                })
                .ToList();

            return appointments;
        }

    }
}
