using System;
using MyHealth.Client.Core.Model;
using Cirrious.CrossCore.Converters;

namespace MyHealth.Client.Core
{
	public class MedicineToNameWithDosisConverter : MvxValueConverter<Medicine, string>
	{
		protected override string Convert (Medicine value, Type targetType, object parameter, System.Globalization.CultureInfo culture)
		{
			if (value == null)
				return string.Empty;
            return $"{value.Name} {value.Dose}{value.DoseUnit.ToString().ToLowerInvariant()}";
		}
	}
}   

