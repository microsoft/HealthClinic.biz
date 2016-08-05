using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using MyHealth.API.AppExtensions;
using MyHealth.API.Validators;
using MyHealth.Data.Repositories;
using MyHealth.Model;
using System.Collections.Generic;
using System.Threading.Tasks;
using MyHealth.API.Infrastructure;

namespace MyHealth.API.Controllers
{
    public struct TenantRequest
    {
        public Tenant tenant { get; set; }
        public string password { get; set; }
    }

    public struct TenantResponse
    {
        public bool status { get; set; }
        public string message { get; set; }
    }

    [ResponseCache(Duration = 0, NoStore = true, VaryByHeader = "*")]
    [Route("api/[controller]")]
    public class TenantsController : Controller
    {
        private readonly TenantsRepository _TenantsRepository = null;
        private readonly ApplicationUsersRepository _ApplicationUsersRepository = null;
        private readonly ApplicationUserValidators _UserValidators = null;

        public TenantsController(TenantsRepository tenantsRepository, ApplicationUsersRepository applicationUsersRepository, ApplicationUserValidators userValidators)
        {
            _TenantsRepository = tenantsRepository;
            _ApplicationUsersRepository = applicationUsersRepository;
            _UserValidators = userValidators;
        }

        [HttpGet()]
        public async Task<Tenant> GetAllAsync()
        {
            return await _TenantsRepository.GetAsync(Request.GetTenant());
        }

        [HttpGet("list")]
        [Authorize(Policies.Tenant)]
        public async Task<IEnumerable<Tenant>> GetAsync(int pageSize, int pageCount)
        {
            ApplicationUser user = await _ApplicationUsersRepository.GetByUserNameAsync(User.Identity.Name);
            if(User.HasClaim("ManageUsers", "Allowed"))
            {
                return await _TenantsRepository.GetAllAsync(pageSize, pageCount);
            }
            else
            {
                return await _TenantsRepository.GetByCreator(user, pageSize, pageCount);
            }
        }

        [HttpGet("{tenantId}")]
        [Authorize(Policies.Tenant)]
        public async Task<Tenant> GetAsync(int tenantId)
        {
            return await _TenantsRepository.GetAsync(tenantId);
        }

        [HttpPost]
        [Authorize(Policies.Tenant)]
        public async Task<TenantResponse> AddAsync([FromBody]TenantRequest request)
        {
            if (!await _UserValidators.ValidatePasswordAsync(new ApplicationUser(), request.password))
                return GetResponse(false, _UserValidators.InvalidPasswordMessage);

            if (!await _UserValidators.ValidateUserName(request.tenant.AssociatedUsername))
                return GetResponse(false, _UserValidators.InvalidUserNameMessage);

            var tenant = request.tenant;

            var creator = await _ApplicationUsersRepository.GetByUserNameAsync(User.Identity.Name);
            var result = await _TenantsRepository.AddAsync(tenant, creator);

            if(!result)
                return GetResponse(false);

            var addAssociatedUserResult = await AddAssociatedUserAsync(tenant, request.password);

            if (!addAssociatedUserResult)
            {
                await _TenantsRepository.DeleteAsync(tenant.TenantId);
                return GetResponse(false);
            }

            return GetResponse(true);
        }

        private async Task<bool> AddAssociatedUserAsync(Tenant tenant, string password)
        {
            var associatedUser = new ApplicationUser { UserName = tenant.AssociatedUsername };
            associatedUser.TenantId = tenant.TenantId;
            return await _ApplicationUsersRepository.AddAsync(associatedUser, password);
        }

        [HttpPut]
        [Authorize(Policies.Tenant)]
        public async Task<TenantResponse> UpdateAsync([FromBody]TenantRequest request)
        {
            if (request.password != null && !await _UserValidators.ValidatePasswordAsync(new ApplicationUser(), request.password))
                return GetResponse(false, _UserValidators.InvalidPasswordMessage);

            var tenant = request.tenant;
            var actualTenant = await _TenantsRepository.GetAsync(tenant.TenantId);

            if (actualTenant.AssociatedUsername != tenant.AssociatedUsername && !await _UserValidators.ValidateUserName(request.tenant.AssociatedUsername))
                return GetResponse(false, _UserValidators.InvalidUserNameMessage);

            var associatedUser = await _ApplicationUsersRepository.GetByUserNameAsync(actualTenant.AssociatedUsername);

            if(tenant.AssociatedUsername != actualTenant.AssociatedUsername)
            {
                associatedUser.UserName = tenant.AssociatedUsername;
                await _ApplicationUsersRepository.UpdateAsync(associatedUser);
            }

            if(request.password != null)
            {
                await _ApplicationUsersRepository.ChangePassword(associatedUser, request.password);
            }

            var result = await _TenantsRepository.UpdateAsync(tenant);

            return GetResponse(result);
        }

        [HttpDelete("{tenantId}")]
        [Authorize(Policies.Tenant)]
        public async Task DeleteAsync(int tenantId)
        {
            await _TenantsRepository.DeleteAsync(tenantId);
        }

        private TenantResponse GetResponse(bool status, string message = null)
        {
            return new TenantResponse
            {
                status = status,
                message = message
            };
        }
    }
}
