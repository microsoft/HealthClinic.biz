using System;
using System.Collections.Generic;

namespace MyHealth.Client.Core.Model
{
    public class Medicine
    {
        public int MedicineId { get; set; }

        public int PatientId { get; set; }

        public string Name { get; set; }

        public double Dose { get; set; }

        public InternationalUnit DoseUnit { get; set; }

        public int TenantId { get; set; }
    }

    public class ApiMedicine : Medicine
    {
        public TimeOfDay TimeOfDay { get; set; }
    }

   
}
