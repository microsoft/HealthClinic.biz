
namespace MyHealth.Model
{
    public class Medicine
    {
        public int MedicineId { get; set; }

        public int PatientId { get; set; }

        public string Name { get; set; }

        public double Dose { get; set; }

        public InternationalUnit DoseUnit { get; set; }

        public TimeOfDay TimeOfDay { get; set; }

        public int TenantId { get; set; }

        public Tenant Tenant { get; set; }

    }
}
