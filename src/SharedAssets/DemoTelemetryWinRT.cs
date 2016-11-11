using System;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;

namespace Microsoft.DemoTelemetry
{
    public static class TelemetryHelper
    {
        public static bool EnableLogging { get; set; }

        private static void Log(string message)
        {
            if (EnableLogging)
            {
                System.Diagnostics.Debug.WriteLine(message);
            }
        }

        public static async Task SendTelemetryAsync(string demoName, IDictionary<string, string[]> tags)
        {
            // Initialize local state
            var settings = Windows.Storage.ApplicationData.Current.LocalSettings;

            // Verify we have not already sent telemetry
            object value;
            if (settings.Values.TryGetValue("msdemotelemetry:" + demoName, out value) && value is DateTimeOffset)
            {
                var timestamp = (DateTimeOffset)value;
                if (timestamp > (DateTimeOffset.Now - TimeSpan.FromHours(8)))
                {
                    Log("Telemetry already sent");
                    return;
                }
            }

            Log("Sending telemetry");
            using (var client = new HttpClient())
            {
                var data = JsonConvert.SerializeObject(new { demoName, tags });
                var content = new StringContent(data)
                {
                    Headers = {
                        ContentType = new MediaTypeHeaderValue("application/json")
                    }
                };

                using (var response = await client.PostAsync("https://msdemoanalytics.azurewebsites.net/api/telemetry", content))
                {
                    Log(string.Format("Telemetry sent, {0} status code", response.StatusCode));

                    if (response.IsSuccessStatusCode)
                    {
                        // 204 indicates success

                        settings.Values["msdemotelemetry:" + demoName] = DateTimeOffset.Now;
                    }
                }
            }
        }
    }
}