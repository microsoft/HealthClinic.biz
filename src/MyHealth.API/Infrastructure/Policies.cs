using Microsoft.AspNetCore.Authorization;

namespace MyHealth.API.Infrastructure
{
    public static class Policies
    {
        public const string Admin = "Admin";
        public const string Tenant = "Tenant";

        public static void Configuration(AuthorizationOptions options)
        {
            options.AddPolicy(Admin, policy =>
            {
                policy.RequireClaim("ManageUsers", "Allowed");
                policy.RequireClaim("ManageTenants", "Allowed");
            });

            options.AddPolicy(Tenant, policy =>
            {
                policy.RequireClaim("ManageTenants", "Allowed");
            });
        }
    }
}
