using System;
using Windows.UI.Xaml.Data;

namespace MyHealth.Client.W10.UWP.Converters
{
    class NoOpConverter : IValueConverter
    {
        public object Convert(object value, Type targetType, object parameter, string language)
        {
            return value;
        }

        public object ConvertBack(object value, Type targetType, object parameter, string language)
        {
            return value;
        }
    }
}
