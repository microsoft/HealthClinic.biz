using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using MyHealth.Web.Stress.Data.Infraestructure;
using MyHealth.Web.Stress.Data.Infraestructure.Initializer;
using MyHealth.Web.Stress.Data.Office365;
using MyHealth.Web.Stress.Data.Repositories;

namespace MyHealth.Web.Stress.AppBuilderExtensions
{
    public static class DependenciesExtensions
    {
        private const string ConfigTrueValue = "true";
        private const string ConfigOffice365EnabledProp = "Data:Office365:Enabled";

        public static IServiceCollection ConfigureDependencies(this IServiceCollection services, IConfigurationRoot configuration)
        {
            services.AddScoped<MyHealthDataInitializer>();
            services.AddScoped<Office365HttpApi>();
            services.AddScoped<IHealthReportsRepository, HealthReportsRepository>();

            if (IsOffice365Enabled(configuration))
            {
                services.AddScoped<IAppointmentsRepository, Office365AppointmentsRepository>();
            }
            else
            {
                services.AddScoped<IAppointmentsRepository, LocalAppointmentsRepository>();
            }

            return services;
        }

        private static bool IsOffice365Enabled(IConfigurationRoot configuration)
        {
            return configuration[ConfigOffice365EnabledProp] != null && configuration[ConfigOffice365EnabledProp].ToLower().Equals(ConfigTrueValue);
        }

    }
}