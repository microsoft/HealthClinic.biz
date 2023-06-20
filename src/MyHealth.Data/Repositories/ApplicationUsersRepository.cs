using Microsoft.AspNetCore.Identity;
using MyHealth.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

namespace MyHealth.Data.Repositories
{
    public class ApplicationUsersRepository
    {
        MyHealthContext _context;
        UserManager<ApplicationUser> _userManager { get; set; }

        public ApplicationUsersRepository(MyHealthContext context, UserManager<ApplicationUser> userManager)
        {
            _context = context;
            _userManager = userManager;
        }

        public async Task<ApplicationUser> GetAsync(string username)
        {
            return Build(await GetByUserNameAsync(username));
        }

        public async Task<ApplicationUser> GetByUserNameAsync(string username)
        {
            var user = await _userManager.FindByNameAsync(username);
            return user;
        }

        public async Task<ApplicationUser> GetByIdAsync(string id)
        {
            var user = await _userManager.FindByIdAsync(id);
            return user;
        }

        public async Task<IEnumerable<ApplicationUser>> GetAsync(int pageSize, int pageCount)
        {
            var adminUsers = await _userManager.GetUsersForClaimAsync(new Claim("ManageUsers", "Allowed"));
            var tenantManagerUsers = await _userManager.GetUsersForClaimAsync(new Claim("ManageTenants", "Allowed"));

            var users = _context.Users
                .Where(u => tenantManagerUsers.Contains(u) && !adminUsers.Contains(u))
                .OrderBy(p => p.UserName)
                .Skip(pageSize * pageCount)
                .Take(pageSize)
                .ToList();

            return users.Select(u => Build(u)).ToList();
        }

        public async Task<bool> AddTenantManagerAsync(ApplicationUser user, string password)
        {
            var newUser = await addAsync(user, password);
            if (newUser != null)
                await SetTenantManagerRole(newUser);
            else
                return false;

            return true;
        }

        public async Task<bool> AddAsync(ApplicationUser user, string password)
        {
            var newUser = await addAsync(user, password);
            return newUser != null;
        }

        private async Task<ApplicationUser> addAsync(ApplicationUser user, string password)
        {
            var result = await _userManager.CreateAsync(user, password);

            if (result.Succeeded)
                return user;
            else
                return null;
        }

        public async Task<bool> SetTenantManagerRole(ApplicationUser user)
        {
            var result = await _userManager.AddClaimAsync(user, new Claim("ManageTenants", "Allowed"));
            return result.Succeeded;
        }

        public async Task<bool> UpdateAsync(ApplicationUser user)
        {
            var existingUser = await GetByIdAsync(user.Id);

            existingUser.FirstName = user.FirstName;
            existingUser.LastName = user.LastName;
            existingUser.Email = user.Email;
            existingUser.UserName = user.UserName;

            var updateResult = await _userManager.UpdateAsync(existingUser);

            return updateResult.Succeeded;
        }

        public async Task<bool> DeleteAsync(string username)
        {
            var user = await GetByUserNameAsync(username);

            if (user != null)
                return (await _userManager.DeleteAsync(user)).Succeeded;
            else
                return false;
        }

        public async Task<bool> ChangePassword(ApplicationUser user, string password)
        {
            await _userManager.RemovePasswordAsync(user);
            var result = await _userManager.AddPasswordAsync(user, password);

            return result.Succeeded;
        }

        private ApplicationUser Build(ApplicationUser user)
        {
            var _user = new ApplicationUser { };
            _user.Id = user.Id;
            _user.FirstName = user.FirstName;
            _user.LastName = user.LastName;
            _user.Email = user.Email;
            _user.UserName = user.UserName;
            _user.TenantId = user.TenantId;

            return _user;
        }
    }
}
