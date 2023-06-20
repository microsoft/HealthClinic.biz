using MyHealth.Model;
using System.Threading.Tasks;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

namespace MyHealth.Data.Repositories
{
    public class PatientsRepository
    {
        MyHealthContext _context;

        public PatientsRepository(MyHealthContext dbcontext)
        {
            _context = dbcontext;
        }

        public async Task<Patient> GetAsync(int tenantId, int patientId)
        {
            var patient = await _context.Patients
                .Where(p => p.PatientId == patientId && p.TenantId == tenantId && !p.Deleted)
                .SingleOrDefaultAsync();

            return Build(patient);
        }

        public async Task<IEnumerable<Patient>> GetAsync(int tenantId, int pageSize, int pageCount)
        {
            var patients = await _context.Patients
                .Where(p => p.TenantId == tenantId && !p.Deleted)
                .OrderByDescending(p => p.Name)
                .Skip(pageSize * pageCount)
                .Take(pageSize)
                .ToListAsync();

            return patients.Select(p => Build(p)).ToList();
        }


        public async Task<IEnumerable<Patient>> GetAsync(int tenantId, string name, int count)
        {
            var patients = await _context.Patients
                .Where(p => p.TenantId == tenantId && !p.Deleted)
                .Where(p => p.Name.StartsWith(name))
                .OrderBy(p => p.Name)
                .Take(count)
                .ToListAsync();

            return patients.Select(p => Build(p)).ToList();
        }

        public async Task DeleteAsync(int tenantId, int patientId)
        {
            var patient = await _context.Patients
                .SingleOrDefaultAsync(p => p.PatientId == patientId && p.TenantId == tenantId && !p.Deleted);

            if (patient != null)
            {
                patient.Deleted = true;
                await _context.SaveChangesAsync();
            }
        }

        Patient Build(Patient patient)
        {
            return new Patient()
            {
                PatientId = patient.PatientId,
                Gender = patient.Gender,
                Name = patient.Name,
                ClinicId = patient.ClinicId,
                Picture = patient.Picture,
                Age = patient.Age,
                DateOfBirth = patient.DateOfBirth,
                Email = patient.Email,
                Phone = patient.Phone,
                BloodType = patient.BloodType,
                Weight = patient.Weight,
                Height = patient.Height
            };
        }
    }
}
