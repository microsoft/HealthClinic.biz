using MyHealth.Client.Core.Model;
using System.Collections.Generic;
using System.Threading.Tasks;


namespace MyHealth.Client.Core.ServiceAgents
{
    public class PatientsService : BaseRequest
    {
        public PatientsService(string urlPrefix, int tenantId)
            : base(urlPrefix, tenantId)
        {
        }

        public async Task<Patient> GetAsync(int id)
        {
            string url = $"{_UrlPrefix}api/patients/{id}";

            return await GetAsync<Patient>(url);
        }

        public async Task<List<Patient>> GetAsync(int pageSize, int pageCount)
        {
            string url = $"{_UrlPrefix}api/patients?pageSize={pageSize}&pageCount={pageCount}";

            return await GetAsync<List<Patient>>(url);
        }

        public async Task<List<Patient>> GetByNameAsync(string name, int count)
        {
            string url = $"{_UrlPrefix}api/patients/name/{name}?count={count}";

            return await GetAsync<List<Patient>>(url);
        }

        public async Task DeleteAsync(int id)
        {
            string url = $"{_UrlPrefix}api/patients/{id}";

            await DeleteAsync(url);
        }
    }
}
