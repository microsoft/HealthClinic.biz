using System;
using System.Collections.Generic;
using System.Linq;
using MyHealth.Web.Stress.Models;

namespace MyHealth.Web.Stress.Api.Helpers
{
    static class DateHelper
    {
        internal static bool IsValid(int year, int month, int day = 1)
        {
            try
            {
                var date = new DateTime(year, month, day);
                return true;
            }
            catch (ArgumentOutOfRangeException)
            {
                return false;
            }

        }

    }
}
