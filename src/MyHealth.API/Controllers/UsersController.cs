using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using MyHealth.Data;
using System.Threading.Tasks;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using MyHealth.Model;
using System.Collections.Generic;
using System.Security.Claims;
using MyHealth.Data.Repositories;
using MyHealth.Data.Infraestructure;
using System;
using MyHealth.API.Infrastructure;
using MyHealth.API.Validators;

namespace MyHealth.API.Controllers
{
    public struct ApplicationUserAddRequest
    {
        public ApplicationUser user { get; set; }
        public string password { get; set; }
    }

    public struct ApplicationUserResponse
    {
        public bool status { get; set; }
        public string message { get; set; }
    }

    [ResponseCache(Duration = 0, NoStore = true, VaryByHeader = "*")]
    [Route("api/[controller]")]
    [Authorize()]
    public class UsersController : Controller
    {
        private readonly ApplicationUsersRepository _applicationUsersRepository;
        private readonly MyHealthContext _Context;
        private readonly ApplicationUserValidators _userValidators;

        private readonly List<string> _allowedClaims;

        public UsersController(ApplicationUsersRepository applicationUsersRepository, ApplicationUserValidators userValidators, MyHealthContext context)
        {
            _applicationUsersRepository = applicationUsersRepository;
            _Context = context;
            _userValidators = userValidators;

            _allowedClaims = new List<string>() { "ManageUsers", "ManageTenants" };
        }

        [HttpGet]
        [Authorize(Policies.Admin)]
        public async Task<IEnumerable<ApplicationUser>> Get(int pageSize, int pageCount)
        {
            return await _applicationUsersRepository.GetAsync(pageSize, pageCount);
        }

        [HttpGet("{username}")]
        [Authorize(Policies.Admin)]
        public async Task<ApplicationUser> GetAsync(string username)
        {
            return await _applicationUsersRepository.GetAsync(username);
        }

        [HttpPost]
        [Authorize(Policies.Admin)]
        public async Task<ApplicationUserResponse> AddAsync([FromBody]ApplicationUserAddRequest request)
        {
            if (!await _userValidators.ValidatePasswordAsync(request.user, request.password))
                return GetResponse(false, _userValidators.InvalidPasswordMessage);

            if (!await _userValidators.ValidateUserName(request.user.UserName))
                return GetResponse(false, _userValidators.InvalidUserNameMessage);

            var result = await _applicationUsersRepository.AddTenantManagerAsync(request.user, request.password);

            return GetResponse(result);
        }

        [HttpPut]
        [Authorize(Policies.Admin)]
        public async Task<ApplicationUserResponse> UpdateAsync([FromBody]ApplicationUserAddRequest request)
        {
            if (request.password != null && !await _userValidators.ValidatePasswordAsync(request.user, request.password))
                return GetResponse(false, _userValidators.InvalidPasswordMessage);

            var user = await _applicationUsersRepository.GetByIdAsync(request.user.Id);

            if (user.UserName != request.user.UserName && !await _userValidators.ValidateUserName(request.user.UserName))
                return GetResponse(false, _userValidators.InvalidUserNameMessage);

            var result = await _applicationUsersRepository.UpdateAsync(request.user);

            

            if (!result)
                return GetResponse(false);

            if (request.password != null)
            {
                var passwordChangeResult = await _applicationUsersRepository.ChangePassword(user, request.password);
                if (!passwordChangeResult)
                    return GetResponse(false);
            }

            return GetResponse(true);
        }

        [HttpDelete("{username}")]
        [Authorize(Policies.Admin)]
        public async Task<ApplicationUserResponse> DeleteAsync(string username)
        {
            var result = await _applicationUsersRepository.DeleteAsync(username);
            return GetResponse(result);
        }

        [HttpGet("current/avatar")]
        public FileContentResult GetCurrentUserAvatar()
        {
            return new FileContentResult(Convert.FromBase64String(UsersFakeImages.Users.First()), "image/png");
        }

        [HttpGet("current/user")]
        public async Task<string> GetCurrentUserAsync()
        {
            return await _Context.Users
                .Where(u => u.UserName == User.Identity.Name)
                .Select(u => u.UserName)
                .FirstOrDefaultAsync();
        }

        [HttpGet("current/claims")]
        public JsonResult GetCurrentClaimsAsync()
        {
            var claims = new Dictionary<string, bool>();

            foreach (Claim claim in User.Claims) {
                if(_allowedClaims.Contains(claim.Type))
                    claims.Add(claim.Type, claim.Value == "Allowed");
            }

            return new JsonResult(claims);
        }

        [HttpGet("current/tenant")]
        public async Task<int?> GetCurrentTenantAsync()
        {
            return await _Context.Users
                .Where(u => u.UserName == User.Identity.Name)
                .Select(u => u.TenantId)
                .FirstOrDefaultAsync();
        }

        private ApplicationUserResponse GetResponse(bool status, string message = null)
        {
            return new ApplicationUserResponse
            {
                status = status,
                message = message
            };
        }
    }
}
