using Microsoft.AspNet.Authorization;
using Microsoft.AspNet.Mvc;
using MyHealth.Data;
using System.Threading.Tasks;
using System.Linq;
using Microsoft.Data.Entity;
using MyHealth.Model;

namespace MyHealth.API.Controllers
{

    [Route("api/[controller]")]
    [Authorize()]
    public class UsersController : Controller
    {
        private readonly MyHealthContext _Context;

        public UsersController(MyHealthContext context)
        {
            _Context = context;
        }

        [HttpGet("current/avatar")]
        public async Task<IActionResult> GetCurrentUserAvatarAsync()
        {
            var picture = await _Context.Users
                .Where(u => u.UserName == User.Identity.Name)
                .Select(u => u.Picture)
                .FirstOrDefaultAsync();

            if (picture != null)
            {
                return new FileContentResult(picture, "image/png");
            }

            return null;
        }

        [HttpGet("current/user")]
        public async Task<string> GetCurrentUserAsync()
        {
            return await _Context.Users
                .Where(u => u.UserName == User.Identity.Name)
                .Select(u => u.UserName)
                .FirstOrDefaultAsync();
        }

        [HttpGet("current/tenant")]
        public async Task<int> GetCurrentTenantAsync()
        {
            return await _Context.Users
                .Where(u => u.UserName == User.Identity.Name)
                .Select(u => u.TenantId)
                .FirstOrDefaultAsync();

        }
    }
}
