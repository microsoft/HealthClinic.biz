using Cirrious.CrossCore.Converters;
using CoreGraphics;
using System;
using System.Collections.Generic;
using System.Text;
using System.Globalization;
using Cirrious.MvvmCross.ViewModels;

namespace MyHealth.Client.iOS.Converters
{
    class NullToFrameHeightZeroConverter : MvxValueConverter<IMvxViewModel, CGRect>
    {
        protected override CGRect Convert(IMvxViewModel value, Type targetType, object parameter, CultureInfo culture)
        {
            var frame = (CGRect)parameter;

            if (value != null)
                return frame;

            frame.Height = 0;

            return frame;
        }
    }
}
