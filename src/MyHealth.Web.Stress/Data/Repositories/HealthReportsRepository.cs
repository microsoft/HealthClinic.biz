using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Data.Entity;
using MyHealth.Web.Stress.Models;

namespace MyHealth.Web.Stress.Data.Repositories
{
    public class HealthReportsRepository : IHealthReportsRepository
    {
        readonly MyHealthContext _context;

        public HealthReportsRepository(MyHealthContext dbcontext)
        {
            _context = dbcontext;
        }

        public async Task<ICollection<HealthReport>> GetAsync(string userEmail, int year, int month, int day)
        {

            var date = new DateTime(year, month, day);
        
            var healthReports = await _context.HealthReports
                .Where(a => userEmail == a.UserEmail && a.Time.Date == date.Date)
                .OrderBy(hr=>hr.Time)
                .ToListAsync();

            return healthReports;
        }
    }
}
