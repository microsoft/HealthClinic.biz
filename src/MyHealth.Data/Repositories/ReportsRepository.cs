using MyHealth.Model;
using System.Threading.Tasks;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;


namespace MyHealth.Data.Repositories
{
    public class ReportsRepository
    {
        MyHealthContext _context;

        public ReportsRepository(MyHealthContext dbcontext)
        {
            _context = dbcontext;
        }

        public async Task<ClinicSummary> GetClinicSummaryAsync(int tenantId)
        {
            return await _context.ClinicSummaries
                .Where(c => c.TenantId == tenantId)
                .OrderBy(c => c.Date)
                .FirstOrDefaultAsync();
        }

        public async Task<IEnumerable<ExpensesSummary>> GetExpensesSummaryAsync(int tenantId, int year)
        {
            return await _context.ExpensesSummaries
                .Where(p => p.TenantId == tenantId && p.Year == year)
                .OrderBy(e => e.Month)
                .ToListAsync();
        }

        public async Task<IEnumerable<PatientsSummary>> GetPatientsSummaryAsync(int tenantId, int year)
        {
            return await _context.PatientsSummaries
                .Where(p => p.TenantId == tenantId && p.Year == year)
                .Where(p => p.Year == year)
                .OrderBy(p => p.Month)
                .ToListAsync();
        }
    }
}
