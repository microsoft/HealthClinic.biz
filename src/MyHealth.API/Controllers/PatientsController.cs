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
    public class PatientsController : Controller
    {
        private readonly PatientsRepository _patientsRepository = null;

        public PatientsController(PatientsRepository patientsRepository)
        {
            _patientsRepository = patientsRepository;
        }

        [HttpGet]
        public async Task<IEnumerable<Patient>> Get(int pageSize, int pageCount)
        {
            return await _patientsRepository.GetAsync(Request.GetTenant(), pageSize, pageCount);
        }

        [HttpGet("name/{name}")]
        public async Task<IEnumerable<Patient>> GetByName(string name, int count)
        {
            return await _patientsRepository.GetAsync(Request.GetTenant(), name, count);
        }

        [HttpGet("{id}")]
        public async Task<Patient> Get(int id)
        {
            return await _patientsRepository.GetAsync(Request.GetTenant(), id);
        }

        [HttpDelete("{id}")]
        public async Task DeleteAsync(int id)
        {
            await _patientsRepository.DeleteAsync(Request.GetTenant(), id);
        }

    }
}
