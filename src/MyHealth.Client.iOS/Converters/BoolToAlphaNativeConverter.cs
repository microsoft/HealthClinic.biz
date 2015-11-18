using System;
using MyHealth.Client.Core;
using Cirrious.CrossCore.Converters;

namespace MyHealth.Client.iOS
{
	public class BoolToAlphaNativeConverter : MvxValueConverter<bool, nfloat>
	{
		protected override nfloat Convert (bool value, Type targetType, object parameter, System.Globalization.CultureInfo culture)
		{
			try {
				if ((bool)parameter)
					value = !value;
			} catch {
			}

			nfloat alpha = value ?
				1f :
				0.5f;

			return alpha;
		}
	}
}

