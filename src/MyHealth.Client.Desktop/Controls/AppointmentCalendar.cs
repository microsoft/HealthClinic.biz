using System;
using System.Collections.Generic;
using System.Windows;
using System.Windows.Controls;

namespace MyHealth.Client.Desktop.Controls
{
    public class AppointmentCalendar : Calendar
    {
        public static readonly DependencyProperty PatientAppointmentDatesProperty = DependencyProperty.Register("PatientAppointmentDates", typeof(List<DateTime>), typeof(AppointmentCalendar));

        static AppointmentCalendar()
        {
            DefaultStyleKeyProperty.OverrideMetadata(typeof(AppointmentCalendar),
                 new FrameworkPropertyMetadata(typeof(AppointmentCalendar)));
        }

        /// <summary>
        /// Instance constructor.
        /// </summary>
        public AppointmentCalendar()
        {
            // Initialize HighlightedDateText property
            this.PatientAppointmentDates = new List<DateTime>();
        }


        public List<DateTime> PatientAppointmentDates
        {
            get
            {
                return (List<DateTime>)GetValue(PatientAppointmentDatesProperty);
            }
            set
            {
                SetValue(PatientAppointmentDatesProperty, value);
            }
        }
    }
}
