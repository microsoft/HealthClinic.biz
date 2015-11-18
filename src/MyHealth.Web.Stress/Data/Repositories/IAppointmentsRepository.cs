using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using MyHealth.Web.Stress.Models;

namespace MyHealth.Web.Stress.Data.Repositories
{
    public interface IAppointmentsRepository
    {
        Task<ICollection<Appointment>> GetAsync(string userEmail, int year, int month);
        Task<ICollection<Appointment>> GetAsync(string userEmail, int year, int month, int day);
    }
}
