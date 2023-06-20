using MyHealth.Model;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System;
using System.Collections.Generic;
using System.Security.Claims;
using Microsoft.AspNetCore.Identity;
using MyHealth.Data.Infraestructure;

namespace MyHealth.Data.Repositories
{
    public class TenantsRepository
    {
        MyHealthContext _context;
        private static readonly Random Randomize = new Random();
        private static UserManager<ApplicationUser> _userManager;
        private static MyHealthDataInitializer _myHealthDataInitializer;
        private static IServiceProvider _serviceProvider;

        public TenantsRepository(IServiceProvider serviceProvider, MyHealthContext dbcontext, UserManager<ApplicationUser> userManager, MyHealthDataInitializer myHealthDataInitializer)
        {
            _context = dbcontext;
            _userManager = userManager;
            _myHealthDataInitializer = myHealthDataInitializer;
            _serviceProvider = serviceProvider;
        }

        public async Task<IEnumerable<Tenant>> GetAllAsync(int pageSize, int pageCount)
        {
            var tenants = await _context.Tenants
                .OrderBy(t => t.TenantId)
                .Skip(pageSize * pageCount)
                .Take(pageSize)
                .Select(t => new Tenant()
                {
                    TenantId = t.TenantId,
                    Address = t.Address,
                    AssociatedUsername = t.AssociatedUsername,
                    City = t.City,
                    Creator = t.Creator,
                    WaitTimeAvg = t.WaitTimeAvg,
                    Name = t.Name,
                    // patientId is calculated each time due to it could change in any moment.
                    PatientId = _context.Patients.Where(p => p.TenantId == t.TenantId).Min(p => p.PatientId)
                })
                .ToListAsync();

            return tenants;
        }

        public async Task<IEnumerable<Tenant>> GetByCreator(ApplicationUser creator, int pageSize, int pageCount)
        {
            var tenants = await _context.Tenants
                .Where(t => t.Creator == creator.UserName)
                .OrderByDescending(t => t.TenantId)
                .Skip(pageSize * pageCount)
                .Take(pageSize)
                .Select(t => new Tenant()
                {
                    TenantId = t.TenantId,
                    Address = t.Address,
                    AssociatedUsername = t.AssociatedUsername,
                    City = t.City,
                    Creator = t.Creator,
                    WaitTimeAvg = t.WaitTimeAvg,
                    Name = t.Name,
                    // patientId is calculated each time due to it could change in any moment.
                    PatientId = _context.Patients.Where(p => p.TenantId == t.TenantId).Min(p => p.PatientId)
                })
                .ToListAsync();

            return tenants;
        }

        public async Task<Tenant> GetAsync(int tenantId)
        {
            return await _context.Tenants
                .Where(t => t.TenantId == tenantId)
                .SingleOrDefaultAsync();
        }

        public async Task<bool> AddAsync(Tenant tenant, ApplicationUser creator)
        {
            tenant.Creator = creator.UserName;

            _context.Tenants.Add(tenant);
            await _context.SaveChangesAsync();

            _myHealthDataInitializer.CreateTenantSampleData(_serviceProvider, tenant.TenantId);

            return true;
        }

        public async Task<bool> UpdateAsync(Tenant tenant)
        {
            var actualTenant = _context.Tenants
                .Where(t => t.TenantId == tenant.TenantId)
                .First();

            if (actualTenant == null)
                return false;

            actualTenant.Name = tenant.Name;
            actualTenant.Address = tenant.Address;
            actualTenant.City = tenant.City;
            actualTenant.AssociatedUsername = tenant.AssociatedUsername;

            _context.Tenants.Update(actualTenant);

            await _context.SaveChangesAsync();

            return true;
        }

        public async Task DeleteAsync(int tenantId)
        {
            await _myHealthDataInitializer.RemoveTenantSampleData(_context, _userManager, tenantId);
        }
    }
}
