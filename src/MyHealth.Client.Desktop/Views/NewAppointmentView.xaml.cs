using System;
using System.Windows;
using System.Windows.Controls;

namespace MyHealth.Client.Desktop.Views
{

    /// <summary>
    /// Interaction logic for NewAppointment.xaml
    /// </summary>
    public partial class NewAppointmentView : Page
    {
        public NewAppointmentView()
        {
            InitializeComponent();
        }

        private void Page_Loaded(object sender, RoutedEventArgs e)
        {
            DoctorCalendar.DisplayDateStart = new DateTime(2015, 1, 1);
            DoctorCalendar.DisplayDateEnd = DateTime.Today.AddYears(1);

            //if weekend, the selected date will be the next Monday
            if (DateTime.Today.DayOfWeek == DayOfWeek.Sunday)
                DoctorCalendar.SelectedDate = DateTime.Today.AddDays(1);
            else if (DateTime.Today.DayOfWeek == DayOfWeek.Saturday)
                DoctorCalendar.SelectedDate = DateTime.Today.AddDays(2);
            else
                DoctorCalendar.SelectedDate = DateTime.Today;

            DoctorCalendar.DisplayDate = DateTime.Today;
            SetBlackoutDates();
        }

        private void SetBlackoutDates()
        {
            int blackoutCount = 5 * 365; // we want to blackout 5 years

            DoctorCalendar.BlackoutDates.AddDatesInPast();

            DateTime currentDay = DateTime.Today;

            while (currentDay.DayOfWeek != DayOfWeek.Saturday)
            {
                if (currentDay.DayOfWeek == DayOfWeek.Sunday)
                {
                    DoctorCalendar.BlackoutDates.Add(new CalendarDateRange(currentDay));
                    currentDay = currentDay.AddDays(6);
                }
                else
                    currentDay = currentDay.AddDays(1);
            }

            for (int j = 0; j < blackoutCount; j++)
            {
                DoctorCalendar.BlackoutDates.Add(new CalendarDateRange(currentDay, currentDay.AddDays(1)));
                currentDay = currentDay.AddDays(7);
            }
        }

    }
}
