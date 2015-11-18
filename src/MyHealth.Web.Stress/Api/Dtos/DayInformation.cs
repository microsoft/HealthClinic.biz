using System;
using System.Collections.Generic;
using MyHealth.Web.Stress.Models;

namespace MyHealth.Web.Stress.Api.Dtos
{
    public class DayInformation
    {
        public int Year { get; set; }
        public int Month { get; set; }
        public int Day { get; set; }
        public ICollection<Appointment> Appointments { get; set; }
        public ICollection<HealthReport> HealthReports { get; set; }
    }
}
