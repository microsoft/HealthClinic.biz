using System;
using System.Globalization;
using Cirrious.CrossCore.Converters;

namespace MyHealth.Client.Droid.Converters
{
    public class BoolToImageAlphaConverter : MvxValueConverter<bool, int>
    {
        protected override int Convert(bool value, Type targetType, object parameter, CultureInfo culture)
        {
            return value ? 0xff : 0x80;
        }
    }
}