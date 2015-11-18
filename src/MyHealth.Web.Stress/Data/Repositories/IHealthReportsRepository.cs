using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using MyHealth.Web.Stress.Models;

namespace MyHealth.Web.Stress.Data.Repositories
{
    public interface IHealthReportsRepository
    {
        Task<ICollection<HealthReport>> GetAsync(string userEmail, int year, int month, int day);
    }
}
