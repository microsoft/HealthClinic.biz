using Microsoft.AspNetCore.Identity;
using MyHealth.Model;
using System.Threading.Tasks;

namespace MyHealth.API.Validators
{
    public class ApplicationUserValidators
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly PasswordValidator<ApplicationUser> _passwordValidator;

        public string InvalidPasswordMessage { get; } = "Password is invalid, it must contain uppercase and lowercase characters, numbers and a symbol.";
        public string InvalidUserNameMessage { get; } = "That username is already in use.";

        public ApplicationUserValidators(UserManager<ApplicationUser> userManager)
        {
            _userManager = userManager;
            _passwordValidator = new PasswordValidator<ApplicationUser>();
        }

        public async Task<bool> ValidatePasswordAsync(ApplicationUser user, string password)
        {
            return (await _passwordValidator.ValidateAsync(_userManager, user, password)).Succeeded;
        }

        public async Task<bool> ValidateUserName(string username)
        {
            var user = await _userManager.FindByNameAsync(username);
            return user == null;
        }
    }
}
