using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Data.Entity;
using MyHealth.Web.Stress.Models;

namespace MyHealth.Web.Stress.Data.Repositories
{
    public class LocalAppointmentsRepository : IAppointmentsRepository
    {

        private const int FirstDayOfMonth = 1;

        readonly MyHealthContext _context;

        public LocalAppointmentsRepository(MyHealthContext dbcontext)
        {
            _context = dbcontext;
        }

        public async Task<ICollection<Appointment>> GetAsync(string userEmail, int year, int month)
        {
            var fromDate = new DateTime(year, month, FirstDayOfMonth);
            var toDate = new DateTime(year, month, DateTime.DaysInMonth(year, month));

            var appointments = await _context.Appointments
                .Where(a => userEmail == a.UserEmail && a.Start >= fromDate && a.End <= toDate)
                .Include(a => a.AppointmentAttendees)
                .ThenInclude(aa => aa.Attendee)
                .ToListAsync();

            return appointments;
        }
        public async Task<ICollection<Appointment>> GetAsync(string userEmail, int year, int month, int day)
        {

            var date = new DateTime(year, month, day);

            var appointments = await _context.Appointments
                .Where(a => userEmail == a.UserEmail && a.Start.Date >= date.Date && a.End.Date <= date.Date)
                .Include(a => a.AppointmentAttendees)
                .ThenInclude(aa => aa.Attendee)
                .ToListAsync();

            return appointments;
        }

    }
}
