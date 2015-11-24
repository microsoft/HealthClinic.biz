using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.Extensions.OptionsModel;
using MyHealth.Web.Stress.Data.Infraestructure.HttpRequest;
using MyHealth.Web.Stress.Options;
using Newtonsoft.Json;

namespace MyHealth.Web.Stress.Data.Office365
{
    public class Office365HttpApi
    {

        private readonly string _endpoint;
        private const string DateFormat = "yyyy-MM-dd";

        public Office365HttpApi(IOptions<Office365Options> office365Options)
        {
            _endpoint = office365Options.Value.Endpoint;
        }
        public async Task<ICollection<Office365Dtos.Event>> GetUserMonthEvents(string userEmail, DateTimeOffset date)
        {
            var api = $"{_endpoint}/appointments?doctorPrincipalName={userEmail}&month={date.ToString(DateFormat)}";
            return await GetUserAppointmentsForTimeRange(api);
        }

        public async Task<ICollection<Office365Dtos.Event>> GetUserDayEvents(string userEmail, DateTimeOffset date)
        {
            var api = $"{_endpoint}/appointments/byday?doctorPrincipalName={userEmail}&day={date.ToString(DateFormat)}";
            return await GetUserAppointmentsForTimeRange(api);
        }

        private static async Task<ICollection<Office365Dtos.Event>> GetUserAppointmentsForTimeRange(string api, int pageSize = 10, int pageCount = 0)
        {
            var filter = $"&$top={pageSize}&$skip={pageCount}";
            api = api + filter;

            string data = await HttpRequestHelper.MakeHttpRequestAsync(() => new HttpRequestMessage(HttpMethod.Get, api));
            var result = JsonConvert.DeserializeObject<List<Office365Dtos.Event>>(data);
            return result;
        }
      
    }
}
