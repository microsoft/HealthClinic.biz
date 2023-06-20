using MyHealth.Data;
using MyHealth.Model;
using System.Threading.Tasks;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System;

namespace MyHealth.Data.Repositories
{
    public class DoctorsRepository
    {
        MyHealthContext _context;

        public DoctorsRepository(MyHealthContext dbcontext)
        {
            _context = dbcontext;
        }

        public async Task<Doctor> GetAsync(int tenantId, int doctorId)
        {
            var doctor = await _context.Doctors
                .Where(ic => ic.DoctorId == doctorId && ic.TenantId == tenantId)
                .Where(ic => !ic.Deleted)
                .SingleOrDefaultAsync();

            return Build(doctor);
        }

        public async Task<IEnumerable<Doctor>> GetAsync(int tenantId, int pageSize, int pageCount)
        {
            var doctors = await _context.Doctors
                .Where(d => d.TenantId == tenantId && !d.Deleted)
                .Where(d => !d.Deleted)
                .OrderBy(d => d.Name)
                .Skip(pageSize * pageCount)
                .Take(pageSize)
                .ToListAsync();

            return doctors.Select(c => Build(c)).ToList();
        }

        public async Task<IEnumerable<Doctor>> GetBySpecialityAsync(int tenantId, Specialities specialty, int count)
        {
            var doctors = await _context.Doctors
                .Where(d => d.TenantId == tenantId && !d.Deleted)
                .Where(d => d.Speciality == specialty)
                .OrderBy(d => d.Name)
                .Take(count)
                .ToListAsync();

            return doctors.Select(c => Build(c)).ToList();
        }

        public async Task<IEnumerable<int>> GetDaysWithAppoinmentsAsync(int tenantId, int doctorId, int month, int year)
        {
            return await _context.ClinicAppointments
                    .Where(d => d.DoctorId == doctorId
                                && d.DateTime.Month == month && d.DateTime.Year == year)
                    .Select(d => d.DateTime.Day)
                    .OrderBy(d => d)
                    .Distinct()
                    .ToListAsync();
        }

        public async Task<IEnumerable<DateTime>> GetAvailableHoursAsync(int tenantId, int doctorId, int day, int month, int year)
        {
            var slots = GetDoctorSlots(day, month, year);

            var existingAppoinments = await GetExistingAppoinments(doctorId, day, month, year);

            // Return available slots without appointments
            return slots.Where(s => !existingAppoinments.Any(a => a == s)).ToList();

        }

        private async Task<IEnumerable<DateTime>> GetExistingAppoinments(int doctorId, int day, int month, int year)
        {
            return await _context.ClinicAppointments
                   .Where(d => d.DoctorId == doctorId
                               && d.DateTime.Day == day
                               && d.DateTime.Month == month
                               && d.DateTime.Year == year)
                   .Select(d => d.DateTime)
                   .Distinct()
                   .ToListAsync();
        }

        private static IEnumerable<DateTime> GetDoctorSlots(int day, int month, int year)
        {
            var slots = new List<DateTime>();
            int startOfWorkingDay = 7;
            int endOfWorkingDay = 17;
            int slotMinutes = 15;
            int slotsPerHour = 4;
            int seconds = 0;

            // NOTE: This demo is not a real app, we use "Eastern Standard Time" as default Time Zone but in a real
            // application should be better to be able to manage different time zones

            TimeSpan offset = TimeZoneInfo.FindSystemTimeZoneById("Eastern Standard Time").BaseUtcOffset;

                for (int hour = startOfWorkingDay; hour <= endOfWorkingDay; hour++)
                {
                    for (int slotNumber = 1; slotNumber < slotsPerHour; slotNumber++)
                    {
                        var slot = 
                            new DateTimeOffset(year, month, day, hour, slotMinutes * slotNumber, seconds, offset)
                            .UtcDateTime;

                        slots.Add(slot);
                    }
                }

            return slots;
        }

        public async Task DeleteAsync(int tenantId, int doctorId)
        {
            var doctor = await _context.Doctors
                .Where(ic => !ic.Deleted)
                .SingleOrDefaultAsync(p => p.DoctorId == doctorId && p.TenantId == tenantId);

            if (doctor != null)
            {
                doctor.Deleted = true;
                await _context.SaveChangesAsync();
            }
        }

        public async Task<int> AddAsync(Doctor doctor)
        {
            doctor.Id = Guid.NewGuid().ToString();
            _context.Doctors.Add(doctor);
            await _context.SaveChangesAsync();
            return doctor.DoctorId;
        }

        public async Task UpdateAsync(Doctor doctor)
        {
            _context.Doctors.Update(doctor);
            await _context.SaveChangesAsync();
        }

        Doctor Build(Doctor doctor)
        {
            return new Doctor()
            {
                Name = doctor.Name,
                Address = doctor.Address,
                Description = doctor.Description,
                Phone = doctor.Phone,
                Mobile = doctor.Mobile,
                Email = doctor.Email,
                Picture = doctor.Picture,
                DoctorId = doctor.DoctorId,
                Deleted = doctor.Deleted,
                Speciality = doctor.Speciality,
                TenantId = doctor.TenantId,
                PatientCount = doctor.PatientCount,
                CurrentRoomNumber = doctor.CurrentRoomNumber,
                CreatedAt = doctor.CreatedAt
            };
        }
    }
}
