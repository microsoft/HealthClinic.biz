

using Microsoft.AspNetCore.Identity.EntityFrameworkCore;

namespace MyHealth.Model
{
    public class ApplicationUser : IdentityUser
    {
        public string FirstName { get; set; }

        public string LastName { get; set; }

        public int? TenantId { get; set; }

        public Tenant Tenant { get; set; }
    }
}
