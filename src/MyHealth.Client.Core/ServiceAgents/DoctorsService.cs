using MyHealth.Client.Core.Model;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;


namespace MyHealth.Client.Core.ServiceAgents
{
    public class DoctorsService : BaseRequest
    {
        public DoctorsService(string urlPrefix, int tenantId)
            : base(urlPrefix, tenantId)
        {

        }
        public async Task<Doctor> GetAsync(int id)
        {
            string url = $"{_UrlPrefix}api/doctors/{id}";

            return await GetAsync<Doctor>(url);
        }

        public async Task<List<Doctor>> GetAsync(int pageSize, int pageCount)
        {
            string url = $"{_UrlPrefix}api/doctors?pageSize={pageSize}&pageCount={pageCount}";

            return await GetAsync<List<Doctor>>(url);
        }

        public async Task<List<Doctor>> GetBySpecialityAsync(Specialities speciality, int count)
        {
            string url = $"{_UrlPrefix}api/doctors/speciality/{speciality}/?count={count}";

            return await GetAsync<List<Doctor>>(url);
        }

        public async Task<List<DateTime>> GetAvailableHoursAsync(int doctorId, int day, int month, int year)
        {
            string url = $"{_UrlPrefix}api/doctors/availability/hours/{doctorId}/?day={day}&month={month}&year={year}";

            return await GetAsync<List<DateTime>>(url);
        }

        public async Task<List<int>> GetDaysWithAppoinmentsAsync(int doctorId, int month, int year)
        {
            string url = $"{_UrlPrefix}api/doctors/appointments/days/{doctorId}/?month={month}&year={year}";

            return await GetAsync<List<int>>(url);
        }

        public async Task DeleteAsync(int doctorId)
        {
            string url = $"{_UrlPrefix}api/doctors/{doctorId}";

            await DeleteAsync(url);
        }

        public async Task<int> PostAsync(Doctor doctor)
        {
            string url = $"{_UrlPrefix}api/doctors";

            return await PostAsync<int, Doctor>(url, doctor);
        }

        public async Task PutAsync(Doctor doctor)
        {
            string url = $"{_UrlPrefix}api/doctors";

            await PutAsync(url, doctor);
        }
    }
}
