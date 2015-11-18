using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MyHealth.Client.Core.Model
{
    public class HeartRateInfo
    {
        public DateTime Start { get; set; }
        public DateTime End { get; set; }
        public TimeSpan Duration { get { return End - Start; } }
        public int Average { get; set; }
        public int Peak { get; set; }
        public int Lowest { get; set; }

    }
}
