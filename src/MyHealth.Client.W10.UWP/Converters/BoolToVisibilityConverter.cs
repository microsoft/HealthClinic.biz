using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Windows.UI.Xaml;
using Windows.UI.Xaml.Data;

namespace MyHealth.Client.W10.UWP.Converters
{
    class BoolToVisibilityConverter : IValueConverter
    {
        public bool Inverse { get; set; }

        public object Convert(object value, Type targetType, object parameter, string language)
        {
            if (Inverse) return (value is bool && (bool)value) ? Visibility.Collapsed : Visibility.Visible;

            return (value is bool && (bool)value) ? Visibility.Visible : Visibility.Collapsed;
        }

        public object ConvertBack(object value, Type targetType, object parameter, string language)
        {
            if (Inverse) return value is Visibility && (Visibility)value == Visibility.Collapsed;

            return value is Visibility && (Visibility)value == Visibility.Visible;
        }
    }
}
