using System;
using System.Globalization;
using System.Windows.Data;

namespace MyHealth.Client.Desktop.Converters
{
    public class ImageOpacityConverter : IValueConverter
    {
        public object Convert(object value, Type targetType, object parameter, CultureInfo culture)
        {
            string actionText = value as string;
            if (actionText == null)
                return 0;
            if (actionText.Equals("Accept", StringComparison.OrdinalIgnoreCase) || actionText.Equals("Select", StringComparison.OrdinalIgnoreCase)
                || actionText.Equals("New Appointment", StringComparison.OrdinalIgnoreCase))
            {
                return 1;
            }
            return 0;

        }

        public object ConvertBack(object value, Type targetType, object parameter, CultureInfo culture)
        {
            throw new NotImplementedException();
        }
    }
}
