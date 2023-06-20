using Microsoft.AspNetCore.Mvc;

namespace MyHealth.Web.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

    }
}
