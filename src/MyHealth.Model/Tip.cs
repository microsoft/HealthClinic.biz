
namespace MyHealth.Model
{
    public class Tip
    {
        public int TipId { get; set; }

        public System.DateTime Date { get; set; }

        public string Title { get; set; }

        public string Content { get; set; }

        public int TenantId { get; set; }

        public Tenant Tenant { get; set; }
    }
}
