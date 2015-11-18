using System;
using Cirrious.CrossCore.Converters;
using System.Globalization;

namespace MyHealth.Client.Core
{
	public class DateTimeToHourMinutesConverter : MvxValueConverter<DateTime, string>
	{
		protected override string Convert (DateTime value, Type targetType, object parameter, System.Globalization.CultureInfo culture)
		{
            var date = value.ToString ("h:mm");

			return date;
		}
	}
}

