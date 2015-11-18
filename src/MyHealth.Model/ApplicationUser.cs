

using Microsoft.AspNet.Identity.EntityFramework;

namespace MyHealth.Model
{
    public class ApplicationUser : IdentityUser
    {
        public int TenantId { get; set; }

        public Tenant Tenant { get; set; }

        public byte[] Picture { get; set; }
    }
}
