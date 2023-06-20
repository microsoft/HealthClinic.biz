using MyHealth.Model;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System;

namespace MyHealth.Data.Repositories
{
    public class HomeAppointmentRepository
    {
        MyHealthContext _context;

        public HomeAppointmentRepository(MyHealthContext dbcontext)
        {
            _context = dbcontext;
        }

        public async Task<HomeAppointment> GetAsync(int tenantId, int appointmentId)
        {
            var visit = await _context.HomeAppointments
                .Include(v => v.Patient)
                .Where(v => v.AppointmentId == appointmentId && v.TenantId == tenantId)
                .SingleOrDefaultAsync();


            return Build(visit);

        }

        public async Task<IEnumerable<HomeAppointment>> GetNextVisitsAsync(int tenantId, int patientId, int count)
        {
            var visits = await _context.HomeAppointments
                .Include(v => v.Patient)
                .Where(v => !v.Visited && v.TenantId == tenantId)
                .Where(v => v.DateTime >= DateTime.UtcNow)
                .OrderBy(c => c.DateTime)
                .Take(count)
                .ToListAsync();

            return visits.Select(v => Build(v)).ToList();
        }

        public async Task<IEnumerable<HomeAppointment>> GetVisitedAsync(int tenantId, int patientId, int count)
        {
            var visits = await _context.HomeAppointments
                .Include(v => v.Patient)
                .Where(v => v.Visited && v.TenantId == tenantId)
                .Where(v => v.DateTime <= DateTime.UtcNow)
                .OrderByDescending(c => c.DateTime)
                .Take(count)
                .ToListAsync();

            return visits.Select(v => Build(v)).ToList();
        }

        public async Task UpdateAsync(HomeAppointment homeAppointment)
        {
            _context.HomeAppointments.Update(homeAppointment);
            await _context.SaveChangesAsync();
        }

        HomeAppointment Build(HomeAppointment appointment)
        {
            return new HomeAppointment()
            {
                AppointmentId = appointment.AppointmentId,
                Address = appointment.Address,
                Latitude = appointment.Latitude,
                Longitude = appointment.Longitude,
                PatientId = appointment.PatientId,
                DoctorId = appointment.DoctorId,
                TenantId = appointment.TenantId,
                Visited = appointment.Visited,
                Patient = new Patient()
                {
                    Name = appointment.Patient.Name,
                    Picture = appointment.Patient.Picture,
                    ClinicId = appointment.Patient.ClinicId,
                }
            };
        }
    }
}
