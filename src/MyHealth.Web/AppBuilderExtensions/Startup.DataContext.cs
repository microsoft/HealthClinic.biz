using MyHealth.Data;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Data.Entity;
using System;

namespace MyHealth.Web.AppBuilderExtensions
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