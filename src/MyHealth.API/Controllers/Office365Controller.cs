using Microsoft.AspNet.Mvc;
using MyHealth.Model;
using MyHealth.Office365;
using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.Threading.Tasks;

namespace MyHealth.API.Controllers
{
    [ResponseCache(Duration = 0, NoStore = true, VaryByHeader = "*")]
    [Route("api/[controller]")]
    public class Office365Controller : Controller
    {
        private readonly O365Repository _O365Repository = null;

        public Office365Controller(O365Repository o365Repository)
        {
            _O365Repository = o365Repository;
        }

        [HttpGet("users")]
        public async Task<IEnumerable<Doctor>> GetAsync(int pageSize, int pageCount)
        {
            var users = await _O365Repository.GetAADUsersAsync();
            return users.Skip(pageSize * pageCount).Take(pageSize);
        }

        [HttpGet("userphoto")]
        public async Task<IActionResult> GetUserPhotoAsync(string doctorPrincipalName)
        {
            var bytes = await _O365Repository.GetUserPhotoAsync(doctorPrincipalName);
            if (bytes != null)
            {
                return new FileContentResult(bytes, "image/png");
            }

            return null;
        }

        [HttpPost("appointments")]
        public async Task AddUserEventAsync([FromBody] Office365.Appointment appointment)
        {
            await _O365Repository.AddEventAppOnly(
                appointment.DoctorPrincipalName,
                appointment.Subject,
                appointment.Start,
                appointment.Start + TimeSpan.FromMinutes(appointment.LengthInMinutes),
                new[] { appointment.PatientEmail },
                appointment.Description,
                appointment.Location);
        }



        [HttpGet("appointments")]
        public async Task<IEnumerable<Event_Beta>> GetUserEventsBeta(string doctorPrincipalName, DateTimeOffset? month, int pageSize = 10, int pageCount = 0)
        {
            return await _O365Repository.GetUserEventsForMonthAsync_Beta(doctorPrincipalName, month, pageSize, pageCount);
        }


        [HttpGet("v1/appointments")]
        public async Task<IEnumerable<Event_Beta>> GetUserEvents(string doctorPrincipalName, DateTimeOffset? month, int pageSize = 10, int pageCount = 0)
        {
            var events = await _O365Repository.GetUserEventsForMonthAsync(doctorPrincipalName, month, pageSize, pageCount);
            return ConvertToEventBeta(events);
        }

        [HttpGet("appointments/byday")]
        public async Task<IEnumerable<Event_Beta>> GetUserByDayEventsBeta(string doctorPrincipalName, DateTimeOffset? day, int pageSize = 10, int pageCount = 0)
        {
            return await _O365Repository.GetUserEventsForDayAsync_Beta(doctorPrincipalName, day, pageSize, pageCount);
        }

        [HttpGet("v1/appointments/byday")]
        public async Task<IEnumerable<Event_Beta>> GetUserByDayEvents(string doctorPrincipalName, DateTimeOffset? day, int pageSize = 10, int pageCount = 0)
        {
            var Events = await _O365Repository.GetUserEventsForDayAsync(doctorPrincipalName, day, pageSize, pageCount);
            return ConvertToEventBeta(Events);
        }

        private static IEnumerable<Event_Beta> ConvertToEventBeta(IEnumerable<Event> Events)
        {
            // Convert to Event_Beta so other apps are not broken
            var results = new List<Event_Beta>();
            foreach (var e in Events)
            {
                var converted = new Event_Beta
                {
                    Attendees = e.Attendees,
                    Body = e.Body,
                    Subject = e.Subject,
                    Start = e.Start.DateTime,
                    End = e.End.DateTime,
                    Location = e.Location,
                };
                results.Add(converted);
            }

            return results;
        }

        [HttpGet("opentimeslots")]
        public async Task<IEnumerable<TimeSlot>> GetUserOpenTimeSlots(string doctorPrincipalName, DateTimeOffset? day = null)
        {
            return await _O365Repository.GetUserOpenTimeSlots30MinutesOrLongerAsync(doctorPrincipalName, day ?? DateTime.Now);
        }
    }
}
