using System;
using Cirrious.CrossCore.Converters;
using UIKit;
using CoreGraphics;
using System.Drawing;

namespace MyHealth.Client.iOS
{
	public class CountDownValueToImageSourceConverter : MvxValueConverter<int, UIImage>
	{
		protected override UIImage Convert (int value, Type targetType, object parameter, System.Globalization.CultureInfo culture)
		{
			if (value > 99)
				value = 99;

			if (value < 0)
				value = 0;

			var image = new UIImage (string.Format ("countdown{0}.png", value));

			return image;
		}
	}
}

