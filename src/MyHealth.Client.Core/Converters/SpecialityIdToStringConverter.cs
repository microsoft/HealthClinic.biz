using System;
using Cirrious.CrossCore.Converters;
using MyHealth.Client.Core.Model;

namespace MyHealth.Client.Core
{
	public class SpecialityIdToStringConverter : MvxValueConverter<int, string>
	{
		protected override string Convert (int value, Type targetType, object parameter, System.Globalization.CultureInfo culture)
		{
            string actualSpecialityName;

            try
            {
                var speciality = (Specialities)value;
                actualSpecialityName = speciality.ToString();
            }
            catch
            {
                actualSpecialityName = AppSettings.NonExistingFieldDefaultValue;
            }

			return actualSpecialityName;
		}
	}
}

