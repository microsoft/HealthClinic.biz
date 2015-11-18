using MyHealth.Client.Core.Model;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace MyHealth.Client.Core.ServiceAgents
{
    public class ClinicAppointmentsService : BaseRequest
    {
        public ClinicAppointmentsService(string urlPrefix, int tenantId)
            : base(urlPrefix, tenantId)
        {

        }

        public async Task<ClinicAppointment> GetAsync(int id)
        {
            string url = $"{_UrlPrefix}api/clinicappointments/{id}";

            return await GetAsync<ClinicAppointment>(url);
        }

        public async Task<List<ClinicAppointment>> GetClinicAppointmentsAsync(int count)
        {
            string url = $"{_UrlPrefix}api/clinicappointments/clinic/next/?count={count}";

            return await GetAsync<List<ClinicAppointment>>(url);
        }

        public async Task<List<ClinicAppointment>> GetPatientAppointmentsAsync(int patientId, int count)
        {
            string url = $"{_UrlPrefix}api/clinicappointments/patient/next/{patientId}?count={count}";

            return await GetAsync<List<ClinicAppointment>>(url);
        }


        public async Task<int> PostAsync(ClinicAppointment appointment)
        {
            string url = $"{_UrlPrefix}api/clinicappointments";

            return await PostAsync<int, ClinicAppointment>(url, appointment);
        }
    }
}
