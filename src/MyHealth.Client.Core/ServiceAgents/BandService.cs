using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MyHealth.Client.Core.Model;

namespace MyHealth.Client.Core.ServiceAgents
{
    public class BandService
    {
        /// <summary>
        /// Returns heart rate information from the Azure store
        /// </summary>
        /// <param name="start"></param>
        /// <param name="end"></param>
        /// <returns></returns>
        public Task<IEnumerable<HeartRateInfo>> GetHeartRateInfoAsync(DateTime start, DateTime end)
        {
            // Fake implementation for now. just returns random data for the requested window.
            DateTime myStart = start;
   
            var rand = new Random();
            var list = new List<HeartRateInfo>();
            do
            {
                var heartRate = rand.Next(85, 100);
                var peak = rand.Next(heartRate, heartRate + 20);
                var low = rand.Next(heartRate - 20, heartRate);
                list.Add(new HeartRateInfo() { Start = start, End = start.AddHours(1), Average = heartRate, Peak = peak, Lowest = low });
                start = start.AddHours(1);
            } while (start < end);

            return Task.FromResult(list.AsEnumerable());
        }

        public Task<IEnumerable<SleepInfo>> GetSleepInfoAsync(DateTime start, DateTime end)
        {
            var rand = new Random();
            var list = new List<SleepInfo>();
            do
            {
                var sleepEfficiency = rand.Next(95, 100);
                var numWakeups = rand.Next(0, 3);
                var fallAsleepDuration = new TimeSpan(0, 3, 0);
                var restlessduration = new TimeSpan(0, 5, 0);
                var restfulduration = new TimeSpan(0, 8, 0);
                list.Add(new SleepInfo() { Start = start, End = start.AddHours(1), SleepEfficiencyPercentage = sleepEfficiency, NumberOfWakeups = numWakeups,
                    FallAsleepDuration = fallAsleepDuration, TotalRestfulSleepDuration = restfulduration, TotalRestlessSleepDuration = restlessduration });
                start = start.AddHours(8);
            } while (start < end);

            return Task.FromResult(list.AsEnumerable());
        }
    }
}
