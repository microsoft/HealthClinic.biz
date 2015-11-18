using System;
using MyHealth.Client.Core.Model;
using Cirrious.CrossCore.Converters;
using System.Globalization;

namespace MyHealth.Client.Core
{
	public class TimeOfDayToStringConverter : MvxValueConverter<TimeOfDay, string>
	{
		protected override string Convert (TimeOfDay value, Type targetType, object parameter, System.Globalization.CultureInfo culture)
		{
			if (value == TimeOfDay.Unknown)
				return "-";

			var timeOffset = TimeOfDayHelper.GetTimeOffsetForNextPill (value);
			string text;

			try {
				text = timeOffset.ToString(@"h\:mm", CultureInfo.InvariantCulture);
			} catch (Exception) {
				text = string.Empty;
			}

			return text;
		}
	}
}

