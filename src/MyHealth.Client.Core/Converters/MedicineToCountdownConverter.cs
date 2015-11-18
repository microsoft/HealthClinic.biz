using Cirrious.CrossCore.Converters;
using MyHealth.Client.Core.Helpers;
using MyHealth.Client.Core.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MyHealth.Client.Core.Converters
{
    public class MedicineToCountdownConverter : MvxValueConverter<MedicineWithDoses, int>
    {
        protected override int Convert(MedicineWithDoses value, Type targetType, object parameter, System.Globalization.CultureInfo culture)
        {
            if (value == null)
                return 99;
            return CountdownHelper.CalcCountDownValue(value);
        }
    }
}
