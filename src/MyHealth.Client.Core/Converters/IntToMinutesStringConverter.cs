using System;
using Cirrious.CrossCore.Converters;


namespace MyHealth.Client.Core
{
	public class IntToMinutesStringConverter :  MvxValueConverter<int, string>
	{
		protected override string Convert (int value, Type targetType, object parameter, System.Globalization.CultureInfo culture)
		{
			return value > 0 ? $"{value} min" : "None" ;
		}
	}
}

