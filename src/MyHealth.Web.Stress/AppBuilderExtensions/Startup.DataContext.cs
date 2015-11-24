using Microsoft.Data.Entity;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using MyHealth.Web.Stress.Data;

namespace MyHealth.Web.Stress.AppBuilderExtensions
{
    public static class DataContextExtensions
    {
        public static IServiceCollection ConfigureDataContext(this IServiceCollection services, IConfiguration configuration, bool useInMemoryStore)
        {
            services.AddEntityFramework()
                    .AddStore(useInMemoryStore)
                    .AddDbContext<MyHealthContext>(options =>
                    {
                        if (useInMemoryStore)
                        {
                            options.UseInMemoryDatabase();
                        }
                        else
                        {
                            options.UseSqlServer(configuration["Data:DefaultConnection:Connectionstring"]);
                        }
                    });

            return services;
        }
    }
}