using MyHealth.Client.Core.Model;
using System.Threading.Tasks;

namespace MyHealth.Client.Core.ServiceAgents
{
    public class TipsService : BaseRequest
    {
        public TipsService(string urlPrefix, int tenantId)
            : base(urlPrefix, tenantId)
        {

        }

        public async Task<Tip> GetNextAsync()
        {
            string url = $"{_UrlPrefix}api/tips/next";

            return await GetAsync<Tip>(url);
        }
    }
}
