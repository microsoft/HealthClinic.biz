using MyHealth.Client.Desktop.ViewModels;
using System;
using System.Collections.ObjectModel;
using System.Globalization;
using System.Windows.Data;

namespace MyHealth.Client.Desktop.Converters
{
    public class AppointmentPickerListVisibilityConverter : IValueConverter
    {
        public object Convert(object value, Type targetType, object parameter, CultureInfo culture)
        {
            Collection<AppointmentSuggestion> appointmentSuggestions = value as Collection<AppointmentSuggestion>;
            if (appointmentSuggestions == null || appointmentSuggestions.Count == 0)
                return "Collapsed";
            else
                return "Visible";
        }

        public object ConvertBack(object value, Type targetType, object parameter, CultureInfo culture)
        {
            throw new NotImplementedException();
        }
    }
}
