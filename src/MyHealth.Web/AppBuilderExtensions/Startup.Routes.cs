using Microsoft.AspNetCore.Builder;

namespace MyHealth.Web.AppBuilderExtensions
{
    public static class RouteExtensions
    {

        public static IApplicationBuilder ConfigureRoutes(this IApplicationBuilder app)
        {
            return app.UseMvc(routes =>
            {
                routes.MapRoute(
                    name: "default",
                    template: "{controller=Home}/{action=Index}/{id?}");

            });
        }
    }
}

