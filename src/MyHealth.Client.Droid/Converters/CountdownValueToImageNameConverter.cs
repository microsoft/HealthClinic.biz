using System;
using Cirrious.CrossCore.Converters;
using System.Globalization;

namespace MyHealth.Client.Droid.Converters
{
    public class CountdownValueToImageNameConverter : MvxValueConverter<int, string>
    {
        protected override string Convert(int value, Type targetType, object parameter, System.Globalization.CultureInfo culture)
        {
            if (value > 99)
                value = 99;

            if (value < 0)
                value = 0;

            var name = $"countdown/countdown{value.ToString(CultureInfo.InvariantCulture)}.png";
            return name;
        }
    }
}