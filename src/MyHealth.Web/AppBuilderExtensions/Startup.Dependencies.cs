using Microsoft.Extensions.DependencyInjection;
using MyHealth.API.Validators;
using MyHealth.Data.Infraestructure;
using MyHealth.Data.Repositories;
using MyHealth.Office365;

namespace MyHealth.Web.AppBuilderExtensions
{
    public static class DependenciesExtensions
    {
        public static IServiceCollection ConfigureDependencies(this IServiceCollection services)
        {
            services.AddScoped<ApplicationUsersRepository>();
            services.AddScoped<ApplicationUserValidators>();
            services.AddScoped<PatientsRepository>();
            services.AddScoped<ClinicAppointmentsRepository>();
            services.AddScoped<ReportsRepository>();
            services.AddScoped<HomeAppointmentRepository>();
            services.AddScoped<MedicinesRepository>();
            services.AddScoped<TipsRepository>();
            services.AddScoped<DoctorsRepository>();
            services.AddScoped<TenantsRepository>();
            services.AddScoped<MyHealthDataInitializer>();
            services.AddSingleton<O365Repository>();

            return services;
        }
    }
}