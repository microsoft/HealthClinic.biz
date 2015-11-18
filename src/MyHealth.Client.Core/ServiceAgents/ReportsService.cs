using MyHealth.Client.Core.Model;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace MyHealth.Client.Core.ServiceAgents
{
    public class ReportsService : BaseRequest
    {
        public ReportsService(string urlPrefix, int tenantId)
            : base(urlPrefix, tenantId)
        {

        }

        public async Task<ClinicSummary> GetClinicSummaryAsync()
        {
            string url = $"{_UrlPrefix}api/reports/clinicsummary";
            
            return await GetAsync<ClinicSummary>(url);
        }


        public async Task<List<ExpensesSummary>> GetExpensesSummaryAsync(int year)
        {
            string url = $"{_UrlPrefix}api/reports/expenses/{year}";

            return await GetAsync<List<ExpensesSummary>>(url);
        }


        public async Task<List<PatientsSummary>> GetPatientsSummaryAsync(int year)
        {
            string url = $"{_UrlPrefix}api/reports/patients/{year}";

            return await GetAsync<List<PatientsSummary>>(url);
        }
    }
}
