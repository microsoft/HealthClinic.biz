using System;
using System.Globalization;
using Windows.UI.Xaml.Data;

namespace MyHealth.Client.W10.UWP.Converters
{
    public sealed class StringFormatConverter : IValueConverter
    {
        public object Convert(object value, Type targetType, object parameter, string language)
        {
            if (value == null) return null;

            if (parameter == null) return value;

            if (value is DateTime)
            {
                var minDateTime = DateTime.SpecifyKind(DateTime.MinValue, ((DateTime)value).Kind);
                if (((DateTime)value).Date == minDateTime) return "-";
            }

            var format = ((string)parameter).Substring(1, ((string)parameter).Length - 1);

            var formatInfo = new DateTimeFormatInfo()
            {
                AMDesignator = "am",
                PMDesignator = "pm"
            };

            return string.Format(formatInfo, format, value);
        }

        public object ConvertBack(object value, Type targetType, object parameter,
            string language)
        {
            throw new NotImplementedException();
        }
    }
}
