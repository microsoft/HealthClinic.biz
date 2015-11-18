using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MyHealth.Client.Core.Extensions
{
    static class DateTimeExtensions
    {
        public static DateTime DayBefore(this DateTime dt)
        {
            return dt.Subtract(new TimeSpan(1, 0, 0, 0));
        }

        public static DateTime WithTime(this DateTime dt, string hours)
        {
            var dateAndTime = dt.Date;
            if (hours != null)
            {
                var tokens = hours.Split(new[] { ':' }, StringSplitOptions.RemoveEmptyEntries);
                var thour = tokens[0];
                var tminute = tokens.Length > 1 ? tokens[1].Substring(0, 2) : "00";
                var pm = tokens[1].Length > 2 && tokens[1].ToLowerInvariant().EndsWith("pm");
                var hour = 0;
                var minute = 0;
                if (int.TryParse(thour, out hour))
                {
                    if (pm)
                    {
                        hour += 12;
                    }
                    dateAndTime = dateAndTime.AddHours(hour);
                }
                if (int.TryParse(tminute, out minute))
                {
                    dateAndTime = dateAndTime.AddMinutes(minute);
                }
            }
            return dateAndTime;
        }
    }
}
