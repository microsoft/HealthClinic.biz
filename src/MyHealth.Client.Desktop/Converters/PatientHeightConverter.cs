using System;
using System.Globalization;
using System.Windows.Data;

namespace MyHealth.Client.Desktop.Converters
{
    public class PatientHeightConverter : IValueConverter
    {
        //Convert from feet in feet & inches
        //This converter assumes data for height comes in feet
        public object Convert(object value, Type targetType, object parameter, CultureInfo culture)
        {
            double height = (double)value;
            if (height <= 0)
                return String.Empty;
            else
            {
                int feet = (int)height;
                double inches = (height - (double)feet) * 12;
                return String.Format("{0} ft {1} in", feet, (int)inches);
            }
        }

        public object ConvertBack(object value, Type targetType, object parameter, CultureInfo culture)
        {
            throw new NotImplementedException();
        }
    }
}
