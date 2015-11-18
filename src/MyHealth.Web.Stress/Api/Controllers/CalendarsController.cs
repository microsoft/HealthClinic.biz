using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;
using MyHealth.Web.Stress.Api.Dtos;
using MyHealth.Web.Stress.Api.Helpers;
using MyHealth.Web.Stress.Data.Repositories;
using MyHealth.Web.Stress.Models;


namespace MyHealth.Web.Stress.Api.Controllers
{
    [Route("api/[controller]")]
    public class CalendarsController : Controller
    {
        private readonly IAppointmentsRepository _appointmentsRepository;
        private readonly IHealthReportsRepository _healthReportsRepository;


        public CalendarsController(IAppointmentsRepository appointmentsRepository, IHealthReportsRepository healthReportsRepository)
        {
            this._appointmentsRepository = appointmentsRepository;
            this._healthReportsRepository = healthReportsRepository;
        }

        [HttpGet("user/{userEmail}/year/{year:int}/month/{month:range(1,12)}")]
        public async Task<MonthInformation> GetMonthInformation(string userEmail, int year, int month)
        {

            if (!DateHelper.IsValid(year, month))
            {
                throw new ArgumentOutOfRangeException();
            }

            var days = new List<MonthDayInformation>();

            var appointments = await _appointmentsRepository.GetAsync(userEmail, year, month);

            var appointmentsInDays = new Dictionary<int, int>();

            foreach (var dayOfMonth in appointments.Select(appointment => appointment.Start.Day))
            {
                if (!appointmentsInDays.ContainsKey(dayOfMonth))
                {
                    appointmentsInDays[dayOfMonth] = 0;
                }
                appointmentsInDays[dayOfMonth]++;
            }

            foreach (var dayOfMonth in appointmentsInDays)
            {
                var day = dayOfMonth.Key;

                var healthReports = await _healthReportsRepository.GetAsync(userEmail, year, month, day);

                days.Add(new MonthDayInformation
                {
                    Year = year,
                    Month = month,
                    Day = day,
                    NumberOfMeetings = dayOfMonth.Value,
                    StressAvg = healthReports.Any() ? healthReports.Select(hr => hr.Stress).Average() : 0,
                    StressTrend = healthReports.Any() ? StressCalculatorHelper.CalculateTrend(healthReports) : StressTrend.Equal
                });
            }

            return new MonthInformation
            {
                Year = year,
                Month = month,
                Days = days
            };

        }


        [HttpGet("user/{userEmail}/year/{year:int}/month/{month:range(1,12)}/day/{day:int}")]
        public async Task<DayInformation> GetDayInformation(string userEmail, int year, int month, int day)
        {

            if (!DateHelper.IsValid(year, month, day))
            {
                throw new ArgumentOutOfRangeException();
            }

            var appointments = await _appointmentsRepository.GetAsync(userEmail, year, month, day);
            var healthReports = await _healthReportsRepository.GetAsync(userEmail, year, month, day);

            var appointmentDtos = appointments.Select(a => new Dtos.Appointment
            {
                Description = a.Description,
                Start = a.Start,
                End = a.End,
                Attendees = a.AppointmentAttendees.Select(aa => new Dtos.Attendee
                {
                    Id = aa.AttendeeId,
                    Name = aa.Attendee.Name,
                    Email = aa.Attendee.Email
                }).ToList()
            }).ToList();


            var healthReportsDtos = healthReports.Select(hr => new Dtos.HealthReport
            {
                Time = hr.Time,
                Glucose = hr.Glucose,
                Stress = hr.Stress,
                Heart = hr.Heart
            }).ToList();

            return new DayInformation
            {
                Year = year,
                Month = month,
                Day = day,
                Appointments = appointmentDtos,
                HealthReports = healthReportsDtos
            };
        }




    }
}
