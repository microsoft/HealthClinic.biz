using System;
using Cirrious.CrossCore.Converters;
using Android.Graphics;
using System.Globalization;

namespace MyHealth.Client.Droid.Converters
{
    public class MenuItemToTextColorConverter : MvxValueConverter<bool, Color>
    {
        protected override Color Convert(bool value, Type targetType, object parameter, CultureInfo culture)
        {
            return value ?
                Color.Rgb(0x0, 0xd7, 0xcb) :            // mh_bg_green
                Color.Rgb(0x54, 0x54, 0x60);            // mh_tc_grey
        }
    }
}