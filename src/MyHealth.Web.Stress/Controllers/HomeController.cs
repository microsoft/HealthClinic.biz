using Microsoft.AspNet.Mvc;
using Microsoft.Extensions.OptionsModel;
using MyHealth.Web.Stress.Options;

namespace MyHealth.Web.Stress.Controllers
{
    public class HomeController : Controller
    {
        private readonly IOptions<DefaultUser> _defaultUser;

        public HomeController(IOptions<DefaultUser> defaultUser)
        {
            _defaultUser = defaultUser;
        }

        public IActionResult Index()
        {
            ViewBag.UserEmail = _defaultUser.Value.UserEmail;
            return View();
        }

        public IActionResult Error()
        {
            return View("~/Views/Shared/Error.cshtml");
        }
    }
}
