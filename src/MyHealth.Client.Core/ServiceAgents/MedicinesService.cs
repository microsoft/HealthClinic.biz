using MyHealth.Client.Core.Model;
using System.Collections.Generic;
using System.Threading.Tasks;


namespace MyHealth.Client.Core.ServiceAgents
{
    public class MedicinesService : BaseRequest
    {
        public MedicinesService(string urlPrefix, int tenantId)
            : base(urlPrefix, tenantId)
        {
        }

        public async Task<Medicine> GetAsync(int id)
        {
            string url = $"{_UrlPrefix}api/medicines/{id}";

            return await GetAsync<Medicine>(url);
        }

        public async Task<Medicine> GetNextAsync()
        {
            string url = $"{_UrlPrefix}api/medicines/next";

            return await GetAsync<Medicine>(url);
        }

        public async Task<List<MedicineWithDoses>> GetMedicinesWithDosesAsync(int patientId, int count)
        {
            string url = $"{_UrlPrefix}api/medicines/doses/patient/{patientId}?count={count}";

            return await GetAsync<List<MedicineWithDoses>>(url);
        }

        public async Task<List<ApiMedicine>> GetMedicinesAsync(int patientId, int count)
        {
            string url = $"{_UrlPrefix}api/medicines/patient/{patientId}?count={count}";

            return await GetAsync<List<ApiMedicine>>(url);
        }
    }
}
