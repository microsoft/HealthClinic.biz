using MyHealth.Model;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System;

namespace MyHealth.Data.Repositories
{
    public class ClinicAppointmentsRepository
    {
        MyHealthContext _context;
        private static readonly Random Randomize = new Random();

        public ClinicAppointmentsRepository(MyHealthContext dbcontext)
        {
            _context = dbcontext;
        }

        public async Task<ClinicAppointment> GetAsync(int tenantId, int appointmentId)
        {
            var appointment = await _context.ClinicAppointments
                .Include(a => a.Doctor)
                .Where(a => a.AppointmentId == appointmentId && a.TenantId == tenantId)
                .OrderBy(a => a.DateTime)
                .SingleOrDefaultAsync();

            return Build(appointment);
        }

        public async Task<IEnumerable<ClinicAppointment>> GetClinicAppointmentsAsync(int tenantId, int count)
        {
            var appointments = await _context.ClinicAppointments
                .Include(a => a.Doctor)
                .Include(a => a.Patient)
                .Where(a => a.TenantId == tenantId)
                .Where(a => a.DateTime >= DateTime.UtcNow)
                .OrderBy(a => a.DateTime)
                .Take(count)
                .ToListAsync();

            return appointments
                .Select(a => Build(a))
                .OrderBy(a => a.DateTime)
                .ToList();
        }

        public async Task<IEnumerable<ClinicAppointment>> GetPatientAppointmentsAsync(int tenantId, int patientId, int count)
        {
            var appointments = await _context.ClinicAppointments
                .Include(a => a.Doctor)
                .Where(a => a.PatientId == patientId && a.TenantId == tenantId)
                .Where(a => a.DateTime >= DateTime.UtcNow)
                .OrderBy(a => a.DateTime)
                .Take(count)
                .ToListAsync();

            return appointments.Select(a => Build(a)).ToList();
        }

        public async Task<int> AddAsync(ClinicAppointment appointment)
        {
            // these properties are updated for demo porpouse.
            if (appointment.RoomNumber == 0)
                appointment.RoomNumber = Randomize.Next(3, 15);

            if (string.IsNullOrEmpty(appointment.Description))
                appointment.Description = "Follow up in order to determine the effectiveness of treatment received";

            _context.ClinicAppointments.Add(appointment);
            await _context.SaveChangesAsync();
            return appointment.AppointmentId;
        }

        ClinicAppointment Build(ClinicAppointment appointment)
        {
            return new ClinicAppointment()
            {
                AppointmentId = appointment.AppointmentId,
                DateTime = appointment.DateTime,
                IsUrgent = appointment.IsUrgent,
                Speciality = appointment.Speciality,
                DoctorId = appointment.DoctorId,
                RoomNumber = appointment.RoomNumber,
                Description = appointment.Description,
                PatientId = appointment.PatientId,
                TenantId = appointment.TenantId,
                Doctor = new Doctor()
                {
                    Name = appointment.Doctor.Name,
                    Picture = appointment.Doctor.Picture,
                    Speciality = appointment.Doctor.Speciality
                },
                Patient = appointment.Patient == null ? null : new Patient()
                {
                    PatientId = appointment.Patient.PatientId,
                    DateOfBirth = appointment.Patient.DateOfBirth,
                    Gender = appointment.Patient.Gender, 
                    Name = appointment.Patient.Name,
                    ClinicId = appointment.Patient.ClinicId,
                    Picture = appointment.Patient.Picture,
                    Age = appointment.Patient.Age,
                    Email = appointment.Patient.Email,
                    Phone = appointment.Patient.Phone,
                    BloodType = appointment.Patient.BloodType,
                    Weight = appointment.Patient.Weight,
                    Height = appointment.Patient.Height
                }
            };
        }

    }
}
