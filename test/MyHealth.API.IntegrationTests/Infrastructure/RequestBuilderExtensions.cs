using System.Globalization;
using System.Net.Http;
using System.Text;
using Microsoft.AspNetCore.TestHost;
using Newtonsoft.Json;

namespace MyHealth.API.Infrastructure
{
    public static class RequestBuilderExtensions
    {
        public static RequestBuilder ForTenant(this RequestBuilder requestBuilder, int tenantId)
        {
            requestBuilder.AddHeader("TenantId", tenantId.ToString(CultureInfo.InvariantCulture));

            return requestBuilder;
        }

        public static RequestBuilder WithDefaultPostHeaders(this RequestBuilder requestBuilder)
        {
            requestBuilder.AddHeader("Accept", "application/json");

            return requestBuilder;
        }

        public static RequestBuilder WithContent(this RequestBuilder requestBuilder, object data)
        {
            var serializedData = JsonConvert.SerializeObject(data);
            requestBuilder
                .And(x => x.Content = new StringContent(serializedData, Encoding.UTF8, "application/json"));

            return requestBuilder;
        }
    }
}
