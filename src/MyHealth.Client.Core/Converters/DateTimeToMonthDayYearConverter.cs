using System;
using Cirrious.CrossCore.Converters;

namespace MyHealth.Client.Core
{
	public class DateTimeToMonthDayYearConverter : MvxValueConverter<DateTime, string>
	{
		protected override string Convert (DateTime value, Type targetType, object parameter, System.Globalization.CultureInfo culture)
		{
			string date;

			if (value == DateTime.Today)
				date = "Today";
			else
				date = value.ToString ("MMM dd, yyyy");

			return date;
		}
	}
}

