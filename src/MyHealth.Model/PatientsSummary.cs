
namespace MyHealth.Model
{
    public class PatientsSummary
    {
        public int PatientsSummaryId { get; set; }

        public int Month { get; set; }

        public int Year { get; set; }

        public int PatientsCount { get; set; }

        public int TenantId { get; set; }

        public Tenant Tenant { get; set; }
    }
}
