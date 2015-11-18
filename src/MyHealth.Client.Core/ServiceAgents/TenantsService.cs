using MyHealth.Client.Core.Model;
using System.Threading.Tasks;

namespace MyHealth.Client.Core.ServiceAgents
{
    public class TenantsService : BaseRequest
    {
        public TenantsService(string urlPrefix, int tenantId)
            : base(urlPrefix, tenantId)
        {

        }

        public async Task<Tenant> GetAsync()
        {
            string url = $"{_UrlPrefix}api/tenants";

            return await GetAsync<Tenant>(url);
        }

    }
}
