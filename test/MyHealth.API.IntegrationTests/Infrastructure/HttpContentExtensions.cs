using System.Net.Http;
using System.Threading.Tasks;
using Newtonsoft.Json;

namespace MyHealth.API.Infrastructure
{
    public static class HttpContentExtensions
    {
        public static async Task<T> ReadAsAsync<T>(this HttpContent httpContent)
        {
            var data = JsonConvert.DeserializeObject(await httpContent.ReadAsStringAsync(), typeof(T));

            return (T)data;
        }
    }
}