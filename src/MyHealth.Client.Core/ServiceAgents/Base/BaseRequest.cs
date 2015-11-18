using System;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;
using System.Collections.Generic;
using System.Linq;
using Newtonsoft.Json;

namespace MyHealth.Client.Core.ServiceAgents
{
    public class BaseRequest : IBaseRequest
    {
        protected string _UrlPrefix = string.Empty;
        protected int _TenantId = 0;

        public string UrlPrefix
        {
            get
            {
                return _UrlPrefix;
            }

            set
            {
                if (string.IsNullOrWhiteSpace(value) || 
                    !Uri.IsWellFormedUriString(value, UriKind.Absolute))
                {
                    return;
                }

                _UrlPrefix = value;
            }
        }
        
        public BaseRequest(string urlPrefix, int tenantId)
        {
            if (String.IsNullOrEmpty(urlPrefix))
                throw new ArgumentNullException("urlPrefix");

            if (!urlPrefix.EndsWith("/"))
                urlPrefix = string.Concat(urlPrefix, "/");

            _UrlPrefix = urlPrefix;
            _TenantId = tenantId;
        }

        private HttpClient CreateHttpClient()
        {
            var httpClient = new HttpClient();
            httpClient.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
            httpClient.DefaultRequestHeaders.Add("TenantId", _TenantId.ToString());
            return httpClient;
        }

        private HttpClient CreateHttpClientForCustomHeaders()
        {
            var httpClient = new HttpClient();

            return httpClient;
        }

        protected async Task<T> GetAsync<T>(string url)
            where T : new()
        {
            HttpClient httpClient = CreateHttpClient();
            T result;

            try
            {
                var response = await httpClient.GetStringAsync(url);
                result = await Task.Run(() => JsonConvert.DeserializeObject<T>(response));
            }
            catch
            {
                result = new T();
            }

            return result;
        }

        protected async Task<IEnumerable<T>> GetIEnumerableAsync<T>(string url)
        {
            HttpClient httpClient = CreateHttpClient();
            IEnumerable<T> result;

            try
            {
                var response = await httpClient.GetStringAsync(url);
                result = await Task.Run(() => JsonConvert.DeserializeObject<IEnumerable<T>>(response));
            }
            catch
            {
                result = Enumerable.Empty<T>();
            }

            return result;
        }

        protected async Task GetAsync(string url, string headerName = null, string headerValue = null)
        {
            HttpClient httpClient;

            if (!string.IsNullOrWhiteSpace(headerName) && !string.IsNullOrWhiteSpace(headerValue))
            {
                httpClient = CreateHttpClientForCustomHeaders();
                httpClient.DefaultRequestHeaders.Add(headerName, headerValue);
            }
            else
            { 
                httpClient = CreateHttpClient();
            }

            var responseForDebuggingPurposes = await httpClient.GetStringAsync(url);
        }


        public async Task<T> PostAsync<T, U>(string url, U entity)
        {
            HttpClient httpClient = CreateHttpClient();

            var content = JsonConvert.SerializeObject(entity);
            var response = await httpClient.PostAsync(url, new StringContent(content, Encoding.UTF8, "application/json"));

            string responseContent = await response.Content.ReadAsStringAsync();

            return await Task.Run(() => JsonConvert.DeserializeObject<T>(responseContent));
        }

        public async Task PostAsync<T>(string url, T entity)
        {
            HttpClient httpClient = CreateHttpClient();

            var content = JsonConvert.SerializeObject(entity);
            var response = await httpClient.PostAsync(url, new StringContent(content, Encoding.UTF8, "application/json"));

            response.EnsureSuccessStatusCode();
        }

        public async Task PostAsync(string url)
        {
            HttpClient httpClient = CreateHttpClient();

            var response = await httpClient.PostAsync(url, null);

            response.EnsureSuccessStatusCode();
        }


        public async Task PutAsync<T>(string url, T entity)
        {
            HttpClient httpClient = CreateHttpClient();

            var content = JsonConvert.SerializeObject(entity);
            var response = await httpClient.PutAsync(url, new StringContent(content, Encoding.UTF8, "application/json"));

            response.EnsureSuccessStatusCode();
        }

        public async Task DeleteAsync(string url)
        {
            HttpClient httpClient = CreateHttpClient();
            var response = await httpClient.DeleteAsync(url);

            response.EnsureSuccessStatusCode();
        }

        
        public HttpClient GetHttpClient()
        {
            return CreateHttpClient();
        }

    }
}
