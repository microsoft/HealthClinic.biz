using System;
using Newtonsoft.Json;

namespace MyHealth.Client.HealthCloudAPI
{
    public class SleepInfo
    {
        private DateTime start;
        private DateTime end;
        [JsonProperty("startTime")]
        public DateTime Start { get { return start.ToUniversalTime(); } set { start = value; } }
        [JsonProperty("endTime")]
        public DateTime End { get { return end.ToUniversalTime(); } set { end = value; } }

        [JsonProperty("duration")]
        [JsonConverter(typeof(ISO8601ToTimeSpanConverter))]
        public TimeSpan Duration { get; set; }

        [JsonProperty("sleepDuration")]
        [JsonConverter(typeof(ISO8601ToTimeSpanConverter))]
        public TimeSpan SleepDuration { get; set; }

        [JsonProperty("awakeDuration")]
        [JsonConverter(typeof(ISO8601ToTimeSpanConverter))]
        public TimeSpan AwakeDuration { get; set; }

        [JsonProperty("numberOfWakeups")]
        public int NumberOfWakeups { get; set; }

        [JsonProperty("fallAsleepDuration")]
        [JsonConverter(typeof(ISO8601ToTimeSpanConverter))]
        public TimeSpan FallAsleepDuration { get; set; }

        [JsonProperty("sleepEfficiencyPercentage")]
        public int EfficiencyPercentage { get; set; }

        [JsonProperty("totalRestlessSleepDuration")]
        [JsonConverter(typeof(ISO8601ToTimeSpanConverter))]
        public TimeSpan RestlessSleepDuration { get; set; }

        [JsonProperty("totalRestfulSleepDuration")]
        [JsonConverter(typeof(ISO8601ToTimeSpanConverter))]
        public TimeSpan RestfulSleepDuration { get; set; }
    }
}