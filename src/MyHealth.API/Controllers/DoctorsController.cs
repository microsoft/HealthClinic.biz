using Microsoft.AspNetCore.Mvc;
using MyHealth.Data.Repositories;
using MyHealth.Model;
using System.Collections.Generic;
using System.Threading.Tasks;
using MyHealth.API.AppExtensions;
using System;

namespace MyHealth.API.Controllers
{
    [ResponseCache(Duration = 0, NoStore = true, VaryByHeader = "*")]
    [Route("api/[controller]")]
    public class DoctorsController : Controller
    {
        private readonly DoctorsRepository _DoctorsRepository = null;

        public DoctorsController(DoctorsRepository doctorRepository)
        {
            _DoctorsRepository = doctorRepository;
        }

        [HttpGet("{id}")]
        public async Task<Doctor> GetAsync(int id)
        {
            return await _DoctorsRepository.GetAsync(Request.GetTenant(), id);
        }

        [HttpGet]
        public async Task<IEnumerable<Doctor>> GetAsync(int pageSize, int pageCount)
        {
            return await _DoctorsRepository.GetAsync(Request.GetTenant(), pageSize, pageCount);
        }

        [HttpGet("speciality/{speciality}")]
        public async Task<IEnumerable<Doctor>> GetBySpecialityAsync(Specialities speciality, int count)
        {
            return await _DoctorsRepository.GetBySpecialityAsync(Request.GetTenant(), speciality, count);
        }

        [HttpGet("availability/hours/{doctorId}")]
        public async Task<IEnumerable<DateTime>> GetAvailableHoursAsync(int doctorId, int day, int month, int year)
        {
            return await _DoctorsRepository.GetAvailableHoursAsync(Request.GetTenant(), doctorId, day, month, year);
        }

        [HttpGet("appointments/days/{doctorId}")]
        public async Task<IEnumerable<int>> GetDaysWithAppoinmentsAsync(int doctorId, int month, int year)
        {
            return await _DoctorsRepository.GetDaysWithAppoinmentsAsync(Request.GetTenant(), doctorId, month, year);
        }


        [HttpDelete("{id}")]
        public async Task DeleteAsync(int id)
        {
            await _DoctorsRepository.DeleteAsync(Request.GetTenant(), id);
        }

        [HttpPost]
        public async Task<int> AddAsync([FromBody]Doctor doctor)
        {
            return await _DoctorsRepository.AddAsync(doctor);
        }

        [HttpPut]
        public async Task UpdateAsync([FromBody]Doctor doctor)
        {
            await _DoctorsRepository.UpdateAsync(doctor);
        }
    }
}
