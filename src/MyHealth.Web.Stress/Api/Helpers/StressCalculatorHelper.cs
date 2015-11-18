using System.Collections.Generic;
using System.Linq;
using MyHealth.Web.Stress.Models;

namespace MyHealth.Web.Stress.Api.Helpers
{
    static class StressCalculatorHelper
    {

        private const int StressOffset = 2;

        internal static StressTrend CalculateTrend(ICollection<HealthReport> healthReports)
        {

            var healthReportsOrdered = healthReports.OrderBy(hr => hr.Time);

            var firstHealthReport = healthReportsOrdered.First();

            var lastHealthReport = healthReportsOrdered.Last();

            if (firstHealthReport.Stress > lastHealthReport.Stress + StressOffset)
            {
                return StressTrend.Down;
            }
            if (firstHealthReport.Stress < lastHealthReport.Stress - StressOffset)
            {
                return StressTrend.Up;
            }

            return StressTrend.Equal;

        }

    }
}
