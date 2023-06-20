using System;
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
    public class ReportsController : Controller
    {
        private readonly ReportsRepository _ReportsRepository = null;

        public ReportsController(ReportsRepository reportsRepository)
        {
            _ReportsRepository = reportsRepository;
        }

        [HttpGet("clinicsummary")]
        public async Task<ClinicSummary> GetClinicSummaryAsync()
        {
            return await _ReportsRepository.GetClinicSummaryAsync(Request.GetTenant());
        }

        [HttpGet("expenses/{year}")]
        public async Task<IEnumerable<ExpensesSummary>> GetExpensesSummaryAsync(int year)
        {
            return await _ReportsRepository.GetExpensesSummaryAsync(Request.GetTenant(), year);
        }

        [HttpGet("patients/{year}")]
        public async Task<IEnumerable<PatientsSummary>> GetPatientsSummaryAsync(int year)
        {
            return await _ReportsRepository.GetPatientsSummaryAsync(Request.GetTenant(), year);
        }
    }
}
