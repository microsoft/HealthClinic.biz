using Microsoft.AspNetCore.Mvc;
using MyHealth.Data.Repositories;
using MyHealth.Model;
using System.Collections.Generic;
using System.Threading.Tasks;
using MyHealth.API.AppExtensions;

namespace MyHealth.API.Controllers
{
    [ResponseCache(Duration = 0, NoStore = true, VaryByHeader = "*")]
    [Route("api/[controller]")]
    public class ClinicAppointmentsController : Controller
    {
        private readonly ClinicAppointmentsRepository _AppointmentsRepository = null;

        public ClinicAppointmentsController(ClinicAppointmentsRepository appointmentsRepository)
        {
            _AppointmentsRepository = appointmentsRepository;
        }

        [HttpGet("{id}")]
        public async Task<ClinicAppointment> GetAsync(int id)
        {
            return await _AppointmentsRepository.GetAsync(Request.GetTenant(), id);
        }

        [HttpGet("clinic/next")]
        public async Task<IEnumerable<ClinicAppointment>> GetClinicAppointmentsAsync(int count)
        {
            return await _AppointmentsRepository.GetClinicAppointmentsAsync(Request.GetTenant(), count);
        }

        [HttpGet("patient/next/{patientId}")]
        public async Task<IEnumerable<ClinicAppointment>> GetPatientAppointmentsAsync(int patientId, int count)
        {
            return await _AppointmentsRepository.GetPatientAppointmentsAsync(Request.GetTenant(), patientId, count);
        }

        [HttpPost]
        public async Task<int> AddAsync([FromBody]ClinicAppointment appointment)
        {
            return await _AppointmentsRepository.AddAsync(appointment);
        }
    }
}
