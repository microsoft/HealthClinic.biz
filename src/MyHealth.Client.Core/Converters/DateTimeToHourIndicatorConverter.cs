using System;
using Cirrious.CrossCore.Converters;
using System.Globalization;

namespace MyHealth.Client.Core
{
	public class DateTimeToHourIndicatorConverter : MvxValueConverter<DateTime, string>
	{
		protected override string Convert (DateTime value, Type targetType, object parameter, System.Globalization.CultureInfo culture)
		{
            var fi = new DateTimeFormatInfo
            {
                AMDesignator = "am",
                PMDesignator = "pm"
            };

            var date = value.ToString ("tt", fi);

			return date;
		}
	}
}

