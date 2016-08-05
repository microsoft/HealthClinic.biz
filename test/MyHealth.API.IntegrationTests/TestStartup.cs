using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using MyHealth.API.Infrastructure;
using MyHealth.API.Validators;
using MyHealth.Data;
using MyHealth.Data.Repositories;
using MyHealth.Model;
using Acheve.AspNetCore.TestHost.Security;
using MyHealth.Data.Infraestructure;
using Microsoft.EntityFrameworkCore.Infrastructure;

namespace MyHealth.API
{
    public class TestStartup
    {
        public TestStartup(IHostingEnvironment env)
        {
            // Set up configuration sources.
            var builder = new ConfigurationBuilder()
                .AddJsonFile("appsettings.json");

            builder.AddEnvironmentVariables();
            Configuration = builder.Build();
        }

        public IConfigurationRoot Configuration { get; set; }

        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit http://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddDbContext<MyHealthContext>(options =>
                    options.UseSqlServer(Configuration["Data:DefaultConnection:ConnectionString"]));

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

            services.AddMvc();

            services.AddAuthorization(Policies.Configuration);

            // Add Identity services to the services container.
            services.AddIdentity<ApplicationUser, IdentityRole>()
                .AddEntityFrameworkStores<MyHealthContext>()
                .AddDefaultTokenProviders();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, MyHealthDataInitializer databaseInitializer)
        {
            databaseInitializer.InitializeDatabaseAsync(app.ApplicationServices).Wait();

            app.UseTestServerAuthentication();

            app.UseExceptionHandler(builder =>
            {
                builder.Run(context =>
                {
                    context.Response.StatusCode = 500;
                    return Task.FromResult(0);
                });
            });

            app.UseMvc();
        }
    }
}