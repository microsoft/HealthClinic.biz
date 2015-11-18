using System;
using System.Collections.Generic;


namespace MyHealth.Client.Core.Model
{
    public class MedicineWithDoses
    {
        private readonly Func<DateTime> _dateTimeProvider = null;

        public static readonly int BreakfastHour = 7;
        public static readonly int LunchHour = 12;
        public static readonly int DinnerHour = 19;

        public Medicine Medicine { get; set; }

        public Dictionary<TimeOfDay, int> Times { get; set; }

        public MedicineWithDoses()
        {
        }

        public MedicineWithDoses(Medicine medicine)
            : this(medicine, null)
        {
        }

        public MedicineWithDoses(Medicine medicine, Func<DateTime> dateTimeProvider)
        {
            Times = new Dictionary<TimeOfDay, int>(3);
            Medicine = medicine;
            _dateTimeProvider = dateTimeProvider;
        }

        public IEnumerable<TimeOfDay> DosesTimes
        {
            get
            {
                return Times.Keys;
            }
        }

        public void AddDoseTime(TimeOfDay time)
        {
            if (!Times.ContainsKey(time))
            {
                Times.Add(time, 1);
            }
            else
            {
                Times[time] = Times[time] + 1;
            }
        }

        public void AddDoseTimes(IEnumerable<TimeOfDay> times)
        {
            foreach (var time in times)
            {
                AddDoseTime(time);
            }
        }

        public int BreakfastDoses
        {
            get
            {
                return TimeOfDayDoses(TimeOfDay.Breakfast);
            }
        }

        public int DinnerDoses
        {
            get
            {
                return TimeOfDayDoses(TimeOfDay.Dinner);
            }
        }

        public int LunchDoses
        {
            get
            {
                return TimeOfDayDoses(TimeOfDay.Lunch);
            }
        }



        public TimeOfDay NextDoseTime
        {
            get
            {
                var hour = (_dateTimeProvider != null ? _dateTimeProvider() :  DateTime.Now).Hour;

                if (hour >= DinnerHour || hour < BreakfastHour)
                {
                    return NextTimeByPreference(new[] { TimeOfDay.Breakfast, TimeOfDay.Lunch, TimeOfDay.Dinner });
                }
                else if (hour >= BreakfastHour && hour < LunchHour)
                {
                    return NextTimeByPreference(new[] { TimeOfDay.Lunch, TimeOfDay.Dinner, TimeOfDay.Breakfast });
                }
                else
                {
                    return NextTimeByPreference(new[] { TimeOfDay.Dinner, TimeOfDay.Breakfast, TimeOfDay.Lunch});
                }
            }
        }

        public TimeOfDay PreviousDoseTime
        {
            get
            {
                var hour = (_dateTimeProvider != null ? _dateTimeProvider() : DateTime.Now).Hour;
                if (hour >= DinnerHour || hour < BreakfastHour)
                {
                    return NextTimeByPreference(new[] { TimeOfDay.Dinner, TimeOfDay.Lunch, TimeOfDay.Breakfast });
                }
                else if (hour >= BreakfastHour && hour < LunchHour)
                {
                    return NextTimeByPreference(new[] { TimeOfDay.Breakfast, TimeOfDay.Dinner, TimeOfDay.Lunch });
                }
                else
                {
                    return NextTimeByPreference(new[] { TimeOfDay.Lunch, TimeOfDay.Breakfast, TimeOfDay.Dinner});
                }
            }

        }


        private TimeOfDay NextTimeByPreference(TimeOfDay[] preferences)
        {
            for (var idx = 0; idx < preferences.Length; idx++)
            {
                if (Times.ContainsKey(preferences[idx]))
                {
                    return preferences[idx];
                }
            }

            return TimeOfDay.Unknown;
        }

        private int TimeOfDayDoses(TimeOfDay time)
        {
            return Times.ContainsKey(time) ? Times[time] : 0;
        }

    }
}
