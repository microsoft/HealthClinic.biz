using Microsoft.Extensions.DependencyInjection;
using Microsoft.Data.Entity.Infrastructure;

namespace MyHealth.Web.AppBuilderExtensions
{
    public static class DataContextConfigExtensions
    {
        
        public static EntityFrameworkServicesBuilder AddStore(this EntityFrameworkServicesBuilder services, bool useInMemoryStore)
        {
            // Add EF services to the services container 
            if (useInMemoryStore)
            {
                services.AddInMemoryDatabase();
            }
            else
            {
                services.AddSqlServer();
            }

            return services;
        }
    }
}