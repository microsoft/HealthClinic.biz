using MyHealth.Client.Core.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MyHealth.Client.Core.Helpers
{
    public static class CountdownHelper
    {
        static readonly int CountDownMaxValue = 99;

        public static int CalcCountDownValue(MedicineWithDoses medicine)
        {
            if (medicine == null)
                return 0;

            var previousDoseTime = medicine.PreviousDoseTime;
            var nextDoseTime = medicine.NextDoseTime;
            var totalTime = TimeOfDayHelper.GetTimeBetween(previousDoseTime, nextDoseTime);
            var remainingTime = TimeOfDayHelper.GetTimeOffsetForNextPill(medicine.NextDoseTime);
            var countDown = ((int)remainingTime.TotalMinutes * 100) /
                (int)totalTime.TotalMinutes;

            return countDown > CountDownMaxValue ? CountDownMaxValue : countDown;
        }
    }
}
