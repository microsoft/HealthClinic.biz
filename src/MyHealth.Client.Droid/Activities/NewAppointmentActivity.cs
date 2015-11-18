using System;
using Android.App;
using Android.OS;
using MyHealth.Client.Core;
using Cirrious.MvvmCross.Droid.Support.AppCompat;
using Toolbar = Android.Support.V7.Widget.Toolbar;
using Square.TimesSquare;
using Android.Widget;
using Android.Views;
using MyHealth.Client.Droid.Extensions;
using Cirrious.MvvmCross.Binding.Droid.Views;

namespace MyHealth.Client.Droid.Activities
{
    [Activity(Label = "New Appointment")]
    public class NewAppointmentActivity : MvxAppCompatActivity<NewAppointmentViewModel>
    {
        private DateTime currentDate;

        protected override void OnCreate(Bundle bundle)
        {
            base.OnCreate(bundle);
            SetContentView(Resource.Layout.NewAppointmentView);
            var toolbar = FindViewById<Toolbar>(Resource.Id.toolbar);
            if (toolbar != null)
            {
                SetSupportActionBar(toolbar);
                SupportActionBar.SetDisplayShowTitleEnabled(false);
                SupportActionBar.SetDisplayHomeAsUpEnabled(true);
            }
            this.SetCustomTitle("New Appointment");
        }

        protected override void OnStart()
        {
            base.OnStart();
            var calendar = FindViewById<CalendarPickerView>(Resource.Id.calendar);
            calendar.VerticalScrollBarEnabled = false;
            calendar.SmoothScrollbarEnabled = false;

            var navigationCalendar = (LinearLayout)FindViewById(Resource.Id.linearLayoutNavigationCalendar);
            navigationCalendar.BringToFront();
            currentDate = new DateTime(DateTime.Now.Year, DateTime.Now.Month, 1);

            SetupCalendar(calendar, 0).WithSelectedDate(currentDate);
            
            calendar.DateSelected += (date, e) =>
            {
                ViewModel.SelectedDate = e.Date.ToUniversalTime();
            };

            SetupCalendarNavigation();

            var hoursSpinner = (MvxSpinner)FindViewById(Resource.Id.hoursSpinner);
        }

        public override bool OnOptionsItemSelected(IMenuItem item)
        {
            if (item.ItemId == Android.Resource.Id.Home)
            {
                this.Finish();
                return true;
            }
            return base.OnOptionsItemSelected(item);
        }

        private CalendarPickerView.FluentInitializer SetupCalendar(CalendarPickerView calendar, int diffMonths)
        {
            currentDate = new DateTime(currentDate.Year, currentDate.Month, 1).AddMonths(diffMonths);

            var isCurrentMonth = currentDate.Year == DateTime.Now.Year && currentDate.Month == DateTime.Now.Month;
            if (isCurrentMonth) { currentDate = DateTime.Now; }

            var lastDay = new DateTime(currentDate.Year, currentDate.Month, 1).AddMonths(1);

            return calendar.Init(currentDate, lastDay);
        }

        private void SetupCalendarNavigation()
        {
            var calendar = FindViewById<CalendarPickerView>(Resource.Id.calendar);
            var buttonLeft = FindViewById<ImageButton>(Resource.Id.buttonLeft);
            var buttonRight = FindViewById<ImageButton>(Resource.Id.buttonRight);

            buttonLeft.Click += (sender, e) => { SetupCalendar(calendar, -1); };
            buttonRight.Click += (sender, e) => { SetupCalendar(calendar, 1); };
        }
    }
}