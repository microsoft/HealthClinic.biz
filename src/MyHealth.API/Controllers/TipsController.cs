using Microsoft.AspNetCore.Mvc;
using MyHealth.Data.Repositories;
using MyHealth.Model;
using System.Threading.Tasks;
using MyHealth.API.AppExtensions;

namespace MyHealth.API.Controllers
{
    [ResponseCache(Duration = 0, NoStore = true, VaryByHeader = "*")]
    [Route("api/[controller]")]
    public class TipsController : Controller
    {
        private readonly TipsRepository _TipsRepository = null;

        public TipsController(TipsRepository tipsRepository)
        {
            _TipsRepository = tipsRepository;
        }

        [HttpGet("next")]
        public async Task<Tip> Get()
        {
            return await _TipsRepository.GetNextAsync(Request.GetTenant());
        }

    }
}
