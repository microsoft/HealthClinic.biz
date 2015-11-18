using MyHealth.Client.Core.Model;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace MyHealth.Client.Core.ServiceAgents
{
    public class HomeAppointmentsService : BaseRequest
    {
        public HomeAppointmentsService(string urlPrefix, int tenantId)
            : base(urlPrefix, tenantId)
        {

        }

        public async Task<HomeAppointment> GetAsync(int id)
        {
            string url = $"{_UrlPrefix}api/homeappointments/{id}";

            return await GetAsync<HomeAppointment>(url);
        }


        public async Task<List<HomeAppointment>> GetNextVisitsAsync(int patientId, int count)
        {
            string url = $"{_UrlPrefix}api/homeappointments/nextvisits/{patientId}?count={count}";
            
            return await GetAsync<List<HomeAppointment>>(url);
        }


        public async Task<List<HomeAppointment>> GetVisitedAsync(int patientId, int count)
        {
            string url = $"{_UrlPrefix}api/homeappointments/visited/{patientId}?count={count}";

            return await GetAsync<List<HomeAppointment>>(url);
        }

        public async Task PutAsync(HomeAppointment homeAppointment)
        {
            string url = $"{_UrlPrefix}api/homeappointments";

            await PutAsync(url, homeAppointment);
        }
    }
}
