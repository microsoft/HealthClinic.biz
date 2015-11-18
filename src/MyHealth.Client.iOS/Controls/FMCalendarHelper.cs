using System;
using UIKit;
using Factorymind.Components;
using CoreGraphics;

namespace MyHealth.Client.iOS.Controls
{
    public static class FMCalendarHelper
    {
        public static FMCalendar _calendar;

        public static FMCalendar GetPreconfiguredInstance(
            CGRect frame, Action<DateTime> dateSelected)
        {
            _calendar = new FMCalendar (frame);

            _calendar.LeftArrow = UIImage.FromBundle("left_arrow.png");
            _calendar.RightArrow = UIImage.FromBundle("right_arrow.png");
            _calendar.SelectionColor = Colors.Accent;
            _calendar.TodayCircleColor = Colors.Accent;

            _calendar.MonthFormatString = "MMMM yyyy";
            _calendar.SundayFirst = true;

            _calendar.DateSelected = date =>
            {
                    DeselectUnavailableDate(date);
                    dateSelected?.Invoke(date);
            };
            _calendar.IsDateAvailable = date => 
                date >= DateTime.Today;

            return _calendar;
        }

        static void DeselectUnavailableDate(DateTime date)
        {
            if (!_calendar.IsDateAvailable(date))
            {
                _calendar.DeselectDate();
            }
        }
    }
}

