
namespace MyHealth.Model
{
    public class ExpensesSummary
    {
        public int ExpensesSummaryId { get; set; }

        public int Month { get; set; }

        public int Year { get; set; }

        public double Expenses { get; set; }

        public double Incomes { get; set; }

        public int TenantId { get; set; }

        public Tenant Tenant { get; set; }
    }
}
