using System.Collections.Generic;

namespace MyHealth.Model
{
    public class MedicineWithDoses
    {
        public Medicine Medicine { get; set; }

        public Dictionary<TimeOfDay, int> Times { get; set; }

        public MedicineWithDoses(Medicine medicine) 
        {
            Times = new Dictionary<TimeOfDay, int>(3);
            Medicine = medicine;
        }

        public void AddDoseTimes(IEnumerable<TimeOfDay> times)
        {
            foreach (var time in times)
            {
                AddDoseTime(time);
            }
        }

        void AddDoseTime(TimeOfDay time)
        {
            if (!Times.ContainsKey(time))
            {
                Times.Add(time, 1);
            }
            else
            {
                Times[time] = Times[time] + 1;
            }
        }


    }
}
