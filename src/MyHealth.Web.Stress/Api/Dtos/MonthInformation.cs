using System;
using System.Collections.Generic;
using MyHealth.Web.Stress.Models;

namespace MyHealth.Web.Stress.Api.Dtos
{
    public class MonthInformation
    {
        public int Year { get; set; }
        public int Month { get; set; }

        public ICollection<MonthDayInformation> Days { get; set; }
    }
}
