using MyHealth.Client.Core.Model;
using System.Collections.Generic;
using System;

namespace MyHealth.Client.Desktop.Helpers
{
    class DateTimeHelper
    {
        //From UTC to local time
        public static void ConvertToLocalTime(List<ClinicAppointment> appointmentList)
        {
            foreach (ClinicAppointment appointment in appointmentList)
            {
                appointment.DateTime = appointment.DateTime.ToLocalTime();
            }
        }

        public static void ConvertToLocalTime(List<DateTime> dateTimeList)
        {
            int count = dateTimeList.Count;
            for (int i = 0; i < count; i++)
            {
                dateTimeList[i] = dateTimeList[i].ToLocalTime();
            }
        }

        public static void RemoveAlreadyOccured(List<DateTime> dateTimeList)
        {
            int count = dateTimeList.Count;
            for (int i = count-1; i >=0; i--)
            {
                if (dateTimeList[i] <= DateTime.Now)
                {
                    dateTimeList.RemoveRange(0, i+1);
                    break;
                }
            }
        }
    }
}
