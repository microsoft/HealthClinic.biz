using System;
using CsvHelper.Configuration;
using Newtonsoft.Json;

namespace MyHealth.Client.HealthCloudAPI
{
    public class HeartInfo
    {
        private DateTime start;
        private DateTime end;
        [JsonProperty("startTime")]
        public DateTime Start { get { return start.ToUniversalTime(); }  set { start = value; } }
        [JsonProperty("endTime")]
        public DateTime End { get { return end.ToUniversalTime(); } set { end = value; } }
        [JsonProperty("duration")]
        [JsonConverter(typeof(ISO8601ToTimeSpanConverter))]
        public TimeSpan Duration { get; set; }
        [JsonProperty("heartRateSummary")]
        public HeartSummary Summary { get; set; }

    }

    public class HeartSummary
    {
        [JsonProperty("averageHeartRate")]
        public int Average { get; set; }
        [JsonProperty("peakHeartRate")]
        public int Peak { get; set; }
        [JsonProperty("lowestHeartRate")]
        public int Lowest { get; set; }
    }
}

