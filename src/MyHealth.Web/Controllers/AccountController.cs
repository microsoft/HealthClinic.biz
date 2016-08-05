using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using MyHealth.Model;
using MyHealth.Web.Viewmodels;
using System.Threading.Tasks;

namespace MyHeatlh.Web.Controllers
{
    public class AccountController : Controller
    {
        public UserManager<ApplicationUser> _UserManager { get; set; }

        public SignInManager<ApplicationUser> _SignInManager { get; set; }

        public AccountController(UserManager<ApplicationUser> userManager,
            SignInManager<ApplicationUser> signInManager)
        {
            _UserManager = userManager;
            _SignInManager = signInManager;
        }

        public IActionResult Login()
        {
            return View();
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Login(LoginViewModel model, string returnUrl = null)
        {
            if (!ModelState.IsValid)
            {
                return View(model);
            }
            var result = await _SignInManager.PasswordSignInAsync(model.UserName, model.Password,
                isPersistent: false, lockoutOnFailure: false);
            
            if (result.Succeeded)
            {
                return RedirectToLocal(returnUrl);
            }
            else
            {
                ModelState.AddModelError("", "Invalid login attempt");
                return View(model);
            }
        }

        private ActionResult RedirectToLocal(string returnUrl)
        {
            if (Url.IsLocalUrl(returnUrl))
            {
                return Redirect(returnUrl);
            }
            else
            {
                return RedirectToAction("Index", "Dashboard");
            }
        }
    }
}
