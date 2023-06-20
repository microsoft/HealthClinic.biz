using Microsoft.AspNetCore.Builder;

namespace MyHealth.Web.AppBuilderExtensions
{

    public static class SecurityExtensions
    {
        public static IApplicationBuilder ConfigureSecurity(this IApplicationBuilder app)
        {
            // Add cookie-based authentication to the request pipeline.
            return app.UseIdentity();
        }

    }
}