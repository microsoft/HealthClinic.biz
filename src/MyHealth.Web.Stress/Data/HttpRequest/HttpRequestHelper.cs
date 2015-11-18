using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using Newtonsoft.Json.Linq;

namespace MyHealth.Web.Stress.Data.Infraestructure.HttpRequest
{
    public class HttpRequestHelper
    {
        public static async Task<string> MakeHttpRequestAsync(Func<HttpRequestMessage> requestCreator)
        {
            using (var client = new HttpClient())
            {
                client.DefaultRequestHeaders.TryAddWithoutValidation("Content-Type", "application/json");

                using (HttpRequestMessage request = requestCreator.Invoke())
                {
                    try
                    {
                        HttpResponseMessage httpResponse = await client.SendAsync(request);
                        string responseString = await httpResponse.Content.ReadAsStringAsync();
                        if (httpResponse.StatusCode != HttpStatusCode.OK)
                        {
                            string error = $"\"error\" : \"{httpResponse.ReasonPhrase}\"\r\n{responseString}";
                            return $"{{{error}}}";
                        }
                        return responseString;
                    }
                    catch (Exception ex)
                    {
                        string error = $"\"error\" : \"{ex.Message}\"";
                        return $"{{{error}}}";
                    }
                }
            }
        }
    }
}
