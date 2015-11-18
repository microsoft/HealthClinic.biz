using Microsoft.AspNet.Authorization;
using Microsoft.AspNet.Mvc;

namespace MyHealth.Web.Controllers
{
    [Authorize]
    public class DashboardController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
