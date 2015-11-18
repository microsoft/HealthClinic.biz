using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MyHealth.Client.Core.ServiceAgents
{
    public class DoctorCalendarService : BaseRequest
    {
        public DoctorCalendarService(string urlPrefix, int tenantId) : base(urlPrefix, tenantId)
        {
        }

        public async Task PostAsync(Office365.Appointment appointment)
        {
            string url = $"{_UrlPrefix}api/office365/appointments";

            await PostAsync(url, appointment);
        }

        public async Task<IEnumerable<Office365.Event_Beta>> GetDoctorEventsByDayAsync(string doctorEmail, DateTimeOffset day)
        {
            string url = $"{_UrlPrefix}api/office365/v1/appointments/byday?doctorPrincipalName={doctorEmail}&day={day.UtcDateTime.ToString("o")}";

            return await GetAsync<List<Office365.Event_Beta>>(url);
        }
    }
}
