using MyHealth.Model;
using System.Threading.Tasks;
using System.Linq;
using Microsoft.EntityFrameworkCore;

namespace MyHealth.Data.Repositories
{
    public class TipsRepository
    {
        MyHealthContext _context;

        public TipsRepository(MyHealthContext dbcontext)
        {
            _context = dbcontext;
        }

        public async Task<Tip> GetNextAsync(int tenantId)
        {
            return await _context.Tips
                .Where(t => t.TenantId == tenantId)
                .OrderByDescending(t => t.Date)
                .FirstOrDefaultAsync();
        }
    }
}