using System;
using System.Globalization;
using System.Windows.Data;

namespace MyHealth.Client.Desktop.Converters
{
    public class HighlightPastDaysConverter : IValueConverter
    {
        public object Convert(object value, Type targetType, object parameter, CultureInfo culture)
        {
            if (value == null)
                return false;
            var targetDate = (DateTime)value;
            if (targetDate == null)
                return false;
            if (targetDate.Date < DateTime.Today)
                return true;
            return false;
        }

        public object ConvertBack(object value, Type targetType, object parameter, CultureInfo culture)
        {
            throw new NotImplementedException();
        }
    }
}
