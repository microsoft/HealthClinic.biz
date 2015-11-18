using MyHealth.Model;
using System.Threading.Tasks;
using Microsoft.Data.Entity;
using System.Linq;
using System;

namespace MyHealth.Data.Repositories
{
    public class TenantsRepository
    {
        MyHealthContext _context;
        private static readonly Random Randomize = new Random();

        public TenantsRepository(MyHealthContext dbcontext)
        {
            _context = dbcontext;
        }

        public async Task<Tenant> GetAsync(int tenantId)
        {
            return await _context.Tenants
                .Where(t => t.TenantId == tenantId)
                .SingleOrDefaultAsync();
        }

       
    }
}
