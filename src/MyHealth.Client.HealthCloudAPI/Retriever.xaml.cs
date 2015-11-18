using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.IO;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using System.Windows.Controls;
using CsvHelper;
using CsvHelper.Configuration;
using Newtonsoft.Json;

namespace MyHealth.Client.HealthCloudAPI
{
    /// <summary>
    /// Interaction logic for Retriever.xaml
    /// </summary>
    public partial class Retriever : Page, INotifyPropertyChanged
    {
        private string accessToken;
        private DateTime start;
        private DateTime end;
        private const string BaseHealthUri = "https://api.microsofthealth.net/v1/me/";
        public Retriever(string accessToken, DateTime start, DateTime end)
        {
            InitializeComponent();
            this.accessToken = accessToken;
            this.start = start;
            this.end = end;
            GetHealthData();
        }

        private async void GetHealthData()
        {
            // first pull sleep data
            var ret = await PerformInitialRequest("Activities", $"activityTypes=sleep&startTime={start.ToString("O")}&endTime={end.ToString("O")}&maxPageSize=1000");
            var parsedSleep = JsonConvert.DeserializeObject<SleepData>(ret);
            // Because the API may return paged results, call the helper method to get all results. 
            var sleepInfos = await GetSummaries(parsedSleep);

            // then heart rate summaries
            ret = await PerformInitialRequest("Summaries/Hourly", $"startTime={start.ToString("O")}&endTime={end.ToString("O")}&maxPageSize=48");
            var parsedHeartData = JsonConvert.DeserializeObject<HeartData>(ret);
            // Same story; these can be paged.
            var heartInfos = await GetSummaries(parsedHeartData);

            // heart rate summaries will have empty records for times the band wasn't being worn, and that needs to be filtered.
            heartInfos = heartInfos.Where(hi => hi.Summary.Average != 0).ToList();

            // then make CSV in the user's Documents folder
            WriteCsv(heartInfos, "heartinfo.csv");
            WriteCsv(sleepInfos, "sleepinfo.csv");

            SpinnerVisible = false;
        }

        private async Task<List<T>> GetSummaries<T>(IHealthData<T> data)
        {
            List<T> ret = new List<T>();
            ret.AddRange(data.Summaries);
            while(!String.IsNullOrWhiteSpace(data.NextPage))
            {
                var parsed = await PerformPagedRequest(data.NextPage);
                data = JsonConvert.DeserializeObject<IHealthData<T>>(parsed, new[] { new IHealthDataConverter() });
                ret.AddRange(data.Summaries);
            }
            return ret;
        }

        private static void WriteCsv<T>(IEnumerable<T> infos, string fileName)
        {
            var docs = Environment.GetFolderPath(Environment.SpecialFolder.MyDocuments);
            using (var writer = new StringWriter())
            {
                CsvWriter csvWriter = new CsvWriter(writer, new CsvConfiguration() { HasHeaderRecord = true });
                csvWriter.WriteRecords(infos);
                File.WriteAllText(System.IO.Path.Combine(docs, fileName), writer.ToString());
            }
        }

        #region web helpers
        // These helpers wrap up the similar parts of making the request to the Cloud API service, so we can easily make calls
        // in the code above.

        /// <summary>
        /// Retreives data from the Health CloudAPI
        /// </summary>
        /// <param name="relativePath">The actual API to call (i.e. Activities)</param>
        /// <param name="queryParams">The paramaters for the API call</param>
        /// <returns></returns>
        private async Task<string> PerformInitialRequest(string relativePath, string queryParams)
        {
            // all APIs start with BaseHealthUri
            var builder = new UriBuilder(BaseHealthUri);
            builder.Path += relativePath;
            builder.Query = queryParams;
            return await PerformRequest(builder.Uri);
        }

        /// <summary>
        /// Get the next page of data from the CloudAPI
        /// </summary>
        /// <param name="url">the URL returned in the previous call</param>
        /// <returns></returns>
        private async Task<string> PerformPagedRequest(string url)
        {
            return await PerformRequest(new Uri(url));
        }

        private async Task<string> PerformRequest(Uri uri)
        {
            using (var client = new HttpClient())
            {
                client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("bearer", $"{accessToken}");
                return await client.GetStringAsync(uri);
            }
        }
        #endregion

        #region spinner
        bool spinnerVisible = true;
        public bool SpinnerVisible
        {
            get { return spinnerVisible; }
            set
            {
                spinnerVisible = value;
                var handler = PropertyChanged;
                if (handler != null)
                {
                    handler(this, new PropertyChangedEventArgs(nameof(SpinnerVisible)));
                }
            }
        }
        public event PropertyChangedEventHandler PropertyChanged;
        #endregion

    }


}
