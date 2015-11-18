using System;
using MyHealth.Web.Stress.Models;

namespace MyHealth.Web.Stress.Api.Dtos
{
    public class MonthDayInformation
    {
        public int Year { get; set; }
        public int Month { get; set; }
        public int Day { get; set; }

        public int NumberOfMeetings { get; set; }

        public double StressAvg { get; set; }

        public StressTrend StressTrend { get; set; }
    }
}
