using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using MyHealth.Web.Stress.Models;

namespace MyHealth.Web.Stress.Data.Infraestructure.Initializer
{
    public class MyHealthDataInitializer
    {

        private static readonly Random Randomize = new Random();

        private static string _defaultUserEmail;

        private static DateTime _maxDay = DateTime.Now;


        public async Task InitializeDatabaseAsync(IServiceProvider serviceProvider, IConfiguration configuration)
        {
            _defaultUserEmail = configuration["DefaultUser:UserEmail"];

            using (var db = serviceProvider.GetService<MyHealthContext>())
            {
                var databaseCreated = await db.Database.EnsureCreatedAsync();
                if (databaseCreated)
                {
                    GenerateDemoData(db);
                }
            }
        }

        private static void GenerateDemoData(MyHealthContext context)
        {
            GenerateAttendees(context);

            GenerateRandomData(context);
        }


        private static void GenerateRandomData(MyHealthContext context)
        {
            var startingMonth = _maxDay.AddMonths(DataInitializerValues.MonthsWithData * -1);

            for (var month = startingMonth; month.Month <= _maxDay.Month; month = month.AddMonths(1))
            {
                GenerateMonthRandomData(context, month);
            }
        }

        private static void GenerateMonthRandomData(MyHealthContext context, DateTime month)
        {
            //Generate appointments
            for (var i = 0; i < DataInitializerValues.DaysWithAppointmentsPerMonth; i++)
            {
                var day = new DateTime(month.Year, month.Month, Randomize.Next(1, DateTime.DaysInMonth(month.Year, month.Month)));

                //Avoid appointments on saturday/sunday
                day = FixAppointmentsOnWeekend(day);

                //Avoid appointments after the max day
                if (day.Date >= _maxDay.Date)
                {
                    continue;
                }

                var appointmentInSameDay = context.Appointments.FirstOrDefault(a => a.Start.Date == day.Date);

                //Avoid random appointments in days with existing appointments
                if (appointmentInSameDay != null)
                {
                    continue;
                }

                var appointments = DataInitializerHelpers.GenerateDayAppointmentsData(context, day, _defaultUserEmail);
                DataInitializerHelpers.GenerateAppointmentsWithRandomAttendessRelationData(context, appointments);

            }

            //Generate HealthReports
            for (var i = 1; i <= DateTime.DaysInMonth(month.Year, month.Month); i++)
            {
                var day = new DateTime(month.Year, month.Month, i);

                //Avoid appointments after the max day
                if (day.Date >= _maxDay.Date)
                {
                    break;
                }
                GenerateDayHealthReportsData(context, day);
            }
        }

        private static DateTime FixAppointmentsOnWeekend(DateTime day)
        {
            switch (day.DayOfWeek)
            {
                case DayOfWeek.Saturday:
                    day = day.AddDays(2);
                    break;
                case DayOfWeek.Sunday:
                    day = day.AddDays(1);
                    break;
            }
            return day;
        }

        private static void GenerateDayHealthReportsData(MyHealthContext context, DateTime day)
        {

            var healthReports = new List<HealthReport>();
            var prevHeartValue = Randomize.Next(DataInitializerValues.MinHeartValue, DataInitializerValues.MaxHeartValue);
            var prevGlucoseValue = Randomize.Next(DataInitializerValues.MinGlucoseValue, DataInitializerValues.MaxGlucoseValue);
            var prevStressValue = Randomize.Next(DataInitializerValues.MinStressValue, DataInitializerValues.MaxStressValue);

            for (var i = DataInitializerValues.StartOfWorkingDay; i < DataInitializerValues.EndOfWorkingDay; i++)
            {
                var time = new DateTime(day.Year, day.Month, day.Day, i, 0, 0);
                var healthReportInSameHour = context.HealthReports.FirstOrDefault(hr => hr.Time == time);

                if (healthReportInSameHour != null)
                {
                    prevHeartValue = healthReportInSameHour.Heart;
                    prevGlucoseValue = healthReportInSameHour.Glucose;
                    prevStressValue = healthReportInSameHour.Stress;
                }
                else
                {
                    var heartValue = DataInitializerHelpers.GenerateRandomBoolean() ? prevHeartValue + Randomize.Next(DataInitializerValues.HeartStep) : prevHeartValue - Randomize.Next(DataInitializerValues.HeartStep);
                    var glucoseValue = DataInitializerHelpers.GenerateRandomBoolean() ? prevGlucoseValue + Randomize.Next(DataInitializerValues.GlucoseStep) : prevGlucoseValue - Randomize.Next(DataInitializerValues.GlucoseStep);
                    var stressValue = DataInitializerHelpers.GenerateRandomBoolean() ? prevStressValue + Randomize.Next(DataInitializerValues.StressStep) : prevStressValue - Randomize.Next(DataInitializerValues.StressStep);

                    healthReports.Add(new HealthReport
                    {
                        UserEmail = _defaultUserEmail,
                        Time = time,
                        Heart = heartValue,
                        Glucose = glucoseValue,
                        Stress = stressValue,
                    });

                    prevHeartValue = heartValue;
                    prevGlucoseValue = glucoseValue;
                    prevStressValue = stressValue;
                }

            };

            context.HealthReports.AddRange(healthReports);
            context.SaveChanges();
        }

        private static void GenerateAttendees(MyHealthContext context)
        {
            context.Attendees.AddRange(DataInitializerValues.Attendees);
            context.SaveChanges();
        }

    }
}
