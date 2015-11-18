using MyHealth.Client.Desktop.ViewModels;
using System;
using System.Windows.Controls;
using System.Windows;


namespace MyHealth.Client.Desktop.Views
{
    /// <summary>
    /// Interaction logic for PatientInfoView.xaml
    /// </summary>
    public partial class PatientInfoView : Page
    {
        private DateTime MaxCalendarDisplayDate = DateTime.Today.AddYears(1);
        private bool AreBlackoutDatesSetUp = false;
        private PatientInfoViewModel model = null;
        public PatientInfoView()
        {
            InitializeComponent();
        }

        private void Page_Loaded(object sender, RoutedEventArgs e)
        {
            DateTime dtStart = DateTime.Today.AddMonths(-2);
            PatientCalendar.DisplayDateStart = dtStart;
            PatientCalendar.DisplayDateEnd = MaxCalendarDisplayDate;
            PatientCalendar.DisplayDate = DateTime.Today.AddMonths(-1);
            PatientCalendar.SelectedDate = DateTime.Today;

            PatientCalendar.BlackoutDates.Add(new CalendarDateRange(dtStart, DateTime.Today.AddDays(-1)));
        }

        private PatientInfoViewModel GetModel()
        {
            if (model != null)
                return model;
            else
            {
                AppViewModel appVM = DataContext as AppViewModel;
                if (appVM == null)
                    return null;

                PatientInfoViewModel vm = appVM.CurrentViewModel as PatientInfoViewModel;
                model = vm;
                return model;
            }
        }

        //Black out everything except the dates with appointments
        private void SetupBlackoutDates()
        {
            PatientInfoViewModel vm = GetModel();
            if (vm == null || vm.AppointmentDates == null)
                return;

            //black out dates in between appointments
            //If there is an appointment beyond the max display date, increase max display date
            DateTime lastAppointmentDate = vm.AppointmentDates[vm.AppointmentDates.Count - 1].Date;
            if (lastAppointmentDate >= MaxCalendarDisplayDate)
                MaxCalendarDisplayDate = lastAppointmentDate.AddDays(1);
            DateTime start = DateTime.Today;
            foreach (DateTime dt in vm.AppointmentDates)
            {
                if (start == dt)
                {
                    start = dt.AddDays(1);
                    continue;
                }
                PatientCalendar.BlackoutDates.Add(new CalendarDateRange(start, dt.AddDays(-1)));
                start = dt.AddDays(1);
            }
            //Black out future dates
            PatientCalendar.BlackoutDates.Add(new CalendarDateRange(start, MaxCalendarDisplayDate));
            AreBlackoutDatesSetUp = true;
        }

        private void PatientCalendar_SelectedDatesChanged(object sender, SelectionChangedEventArgs e)
        {
            if (!AreBlackoutDatesSetUp)
                SetupBlackoutDates();
        }

        private void PatientCalendar_IsEnabledChanged(object sender, DependencyPropertyChangedEventArgs e)
        {
            bool isEnabled = (bool)e.NewValue;
            if (isEnabled && !AreBlackoutDatesSetUp)
                SetupBlackoutDates();
        }
    }

}
