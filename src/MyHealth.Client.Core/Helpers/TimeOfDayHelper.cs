using System;
using MyHealth.Client.Core.Model;
using System.Collections.Generic;
using MyHealth.Client.Core.Extensions;

namespace MyHealth.Client.Core
{
	public static class TimeOfDayHelper
	{
		public static readonly int DefaultHourGapBetweenTakes = 6;

		static readonly int BreakfastHour = 8;
		static readonly int LunchHour = BreakfastHour + DefaultHourGapBetweenTakes;
		static readonly int DinnerHour = LunchHour + DefaultHourGapBetweenTakes;

		public static TimeSpan GetTimeOffsetForNextPill (TimeOfDay timeOfDay)
		{
			var currentDateTime = DateTime.Now;
			var breakfastForToday = new DateTime(
				currentDateTime.Year, currentDateTime.Month, currentDateTime.Day,
				BreakfastHour, 0, 0);
			var lunchForToday = new DateTime(
				currentDateTime.Year, currentDateTime.Month, currentDateTime.Day,
				LunchHour, 0, 0);
			var dinnerForToday = new DateTime(
				currentDateTime.Year, currentDateTime.Month, currentDateTime.Day,
				DinnerHour, 0, 0);
			TimeSpan timeOffset;
			DateTime nextTake;

			if (timeOfDay == TimeOfDay.Breakfast &&
			    currentDateTime < breakfastForToday)
				nextTake = breakfastForToday;
			else if (timeOfDay == TimeOfDay.Lunch &&
			         currentDateTime < lunchForToday)
				nextTake = lunchForToday;
			else if (timeOfDay == TimeOfDay.Dinner &&
			         currentDateTime < dinnerForToday)
				nextTake = dinnerForToday;
			// The last options are to be post-dinner so following take happens tomorrow
			else if (timeOfDay == TimeOfDay.Breakfast) {
				var breakfastForTomorrow = breakfastForToday.AddDays (1);
				nextTake = breakfastForTomorrow;
			} else if (timeOfDay == TimeOfDay.Lunch) {
				var lunchForTomorrow = lunchForToday.AddDays (1);
				nextTake = lunchForTomorrow;
			} else /* timeOfDay == TimeOfDay.Dinner */ {
				var dinnerForTomorrow = dinnerForToday.AddDays (1);
				nextTake = dinnerForTomorrow;
			}

			timeOffset = nextTake.Subtract (currentDateTime);

			return timeOffset;
		}

        public static TimeSpan GetTimeBetween(TimeOfDay first, TimeOfDay next)
        {
            var times = new Dictionary<TimeOfDay, DateTime>
            {
                [TimeOfDay.Breakfast] = new DateTime(2015, 2, 1, MedicineWithDoses.BreakfastHour, 0, 0),
                [TimeOfDay.Lunch] = new DateTime(2015, 2, 1, MedicineWithDoses.LunchHour, 0, 0),
                [TimeOfDay.Dinner] = new DateTime(2015, 2, 1, MedicineWithDoses.DinnerHour, 0, 0)
            };

            var firstIdx = (int)first;
            var nextIdx = (int)next;

            if (firstIdx < nextIdx)
            {
                return times[next] - times[first];
            }
            else if (firstIdx > nextIdx)
            {
                return times[next] - times[first].DayBefore();
            }
            else
            {
                return TimeSpan.FromDays(1).Subtract(TimeSpan.FromSeconds(1));
            }



        }
    }
}

