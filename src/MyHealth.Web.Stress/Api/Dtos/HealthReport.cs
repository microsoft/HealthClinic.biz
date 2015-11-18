
using System;

namespace MyHealth.Web.Stress.Api.Dtos
{
    public class HealthReport
    {
        public DateTime Time { get; set; }
        public int Heart { get; set; }
        public int Glucose { get; set; }
        public int Stress { get; set; }

    }
}
