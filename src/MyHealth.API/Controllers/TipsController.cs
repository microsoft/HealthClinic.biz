using Microsoft.AspNet.Mvc;
using MyHealth.Data.Repositories;
using MyHealth.Model;
using System.Threading.Tasks;
using MyHealth.API.AppExtensions;

namespace MyHealth.API.Controllers
{
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
