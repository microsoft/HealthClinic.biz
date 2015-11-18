using System;
using System.Collections.Generic;
using Newtonsoft.Json;

namespace MyHealth.Client.Core.Model
{
    public class SleepInfo
    {
        public DateTime Start { get; set; }
        public DateTime End { get; set; }
        public TimeSpan Duration { get { return End - Start; } }
        public int SleepEfficiencyPercentage { get; set; }
        public int NumberOfWakeups { get; set; }
        public TimeSpan FallAsleepDuration { get; set; }
        public TimeSpan TotalRestlessSleepDuration { get; set; }
        public TimeSpan TotalRestfulSleepDuration { get; set; }
    }
}
