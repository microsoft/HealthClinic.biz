using Microsoft.AspNet.Mvc;
using MyHealth.Data.Repositories;
using MyHealth.Model;
using System.Threading.Tasks;
using MyHealth.API.AppExtensions;

namespace MyHealth.API.Controllers
{
    [Route("api/[controller]")]
    public class TenantsController : Controller
    {
        private readonly TenantsRepository _TenantsRepository = null;

        public TenantsController(TenantsRepository tenantsRepository)
        {
            _TenantsRepository = tenantsRepository;
        }

        [HttpGet()]
        public async Task<Tenant> GetAsync()
        {
            return await _TenantsRepository.GetAsync(Request.GetTenant());
        }

    }
}
