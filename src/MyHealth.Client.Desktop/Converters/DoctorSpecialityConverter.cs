using System;
using System.Globalization;
using System.Windows.Data;
using MyHealth.Client.Core.Model;

namespace MyHealth.Client.Desktop.Converters
{
    class DoctorSpecialityConverter : IValueConverter
    {
        public object Convert(object value, Type targetType, object parameter, CultureInfo culture)
        {
            if ((Specialities)value == Specialities.Cardiologist)
                return "Cardiology";
            else if ((Specialities)value == Specialities.Neurosurgeon)
                return "Neurology";
            else if ((Specialities)value == Specialities.Ophthalmologist)
                return "Ophtalmology";
            else if ((Specialities)value == Specialities.Orthopedist)
                return "Orthopedy";
            else return String.Empty;
        }

        public object ConvertBack(object value, Type targetType, object parameter, CultureInfo culture)
        {
            throw new NotImplementedException();
        }
    }
}
