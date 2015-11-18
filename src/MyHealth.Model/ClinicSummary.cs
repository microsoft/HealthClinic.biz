using System;

namespace MyHealth.Model
{
    public class ClinicSummary
    {
        public int ClinicSummaryId { get; set; }

        public DateTime Date { get; set; }

        public int TenantId { get; set; }

        public Tenant Tenant { get; set; }

        public int NewPatients { get; set; }

        public int NewPatientsVariation { get; set; }

        public double MonthProfit { get; set; }

        public double MonthProfitVariation { get; set; }

        public double AnualProfit { get; set; }

        public double AnualProfitVariation { get; set; }
    }
}
