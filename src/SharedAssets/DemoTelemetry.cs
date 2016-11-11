using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using Newtonsoft.Json;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
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
                Trace.WriteLine(message, "msdemotelemetry");
            }
        }

        public static async Task SendTelemetryAsync(string demoName, IDictionary<string, string[]> tags)
        {
            // Initialize local state
            var telemetryData = new FileInfo(Path.Combine(Environment.GetFolderPath(Environment.SpecialFolder.ApplicationData), "msdemotelemetry", "state.dat"));
            if (!telemetryData.Directory.Exists)
            {
                telemetryData.Directory.Create();
            }

            if (!telemetryData.Exists)
            {
                Log(string.Format("Initializing telemetry history data: {0}", telemetryData));
                using (var fs = telemetryData.Create())
                {
                    var empty = Encoding.UTF8.GetBytes("{}");
                    fs.Write(empty, 0, empty.Length);
                }
            }

            var state = new Dictionary<string, DateTimeOffset>();
            var serializer = new JsonSerializer();
            
            using (var text = telemetryData.OpenText())
            using (var json = new JsonTextReader(text))
            {
                Log("Parsing telemetry history");
                serializer.Populate(json, state);
            }

            // Verify we have not already sent telemetry
            DateTimeOffset timestamp;
            if (state.TryGetValue(demoName, out timestamp))
            {
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
                var content = new StringContent(data) {
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

                        state[demoName] = DateTimeOffset.Now;

                        using (var file = telemetryData.OpenWrite())
                        using (var writer = new StreamWriter(file))
                        using (var json = new JsonTextWriter(writer))
                        {
                            Log("Writing out telemetry history");
                            serializer.Serialize(json, state);
                        }
                    }
                }
            }
        }
    }
}