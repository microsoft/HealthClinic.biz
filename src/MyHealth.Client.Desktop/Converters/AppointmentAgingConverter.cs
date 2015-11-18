using System;
using System.Globalization;
using System.Windows.Data;

namespace MyHealth.Client.Desktop.Converters
{
    public class AppointmentAgingConverter : IValueConverter
    {
        public object Convert(object value, Type targetType, object parameter, CultureInfo culture)
        {
            string result = string.Empty;

            if (value is DateTime)
            {
                DateTime targetDate = DateTime.Today;

                DateTime valueDateTime = (DateTime)value;
                if(valueDateTime.Date == targetDate)
                {
                    result = valueDateTime.ToShortTimeString();
                }
                else
                {
                    DateTime valueDate = valueDateTime.Date;
                    if(targetDate.AddDays(1) == valueDate)
                    {
                        result = "Tomorrow";
                    }
                    else if(targetDate.AddDays(7) > valueDate)
                    {
                        result = valueDate.DayOfWeek.ToString();
                    }
                    else
                    {
                        result = valueDate.ToShortDateString();
                    }
                }
            }

            return result;
        }

        public object ConvertBack(object value, Type targetType, object parameter, CultureInfo culture)
        {
            throw new NotImplementedException();
        }
    }
}
