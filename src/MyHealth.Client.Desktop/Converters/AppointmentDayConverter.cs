using System;
using System.Globalization;
using System.Windows.Data;
using MyHealth.Client.Desktop.Controls;

namespace MyHealth.Client.Desktop.Converters
{
    public class AppointmentDayConverter : IMultiValueConverter
    {
        //Return true if the day is an appointment day 
        //This converter is used to highlight appointment days in the patient calendar
        public object Convert(object[] values, Type targetType, object parameter, CultureInfo culture)
        {
            if (values == null || values.Length < 2 || values[0] == null || values[1] == null)
                return false;
            var targetDate = (DateTime)values[0];
            AppointmentCalendar calendarControl = values[1] as AppointmentCalendar;
            if (targetDate == null || calendarControl == null)
                return false;
            if (calendarControl.PatientAppointmentDates != null && calendarControl.PatientAppointmentDates.Contains(targetDate))
            {
                return true;
            }
            return false;
        }

        public object[] ConvertBack(object value, Type[] targetTypes, object parameter, CultureInfo culture)
        {
            throw new NotImplementedException();
        }
    }
}
