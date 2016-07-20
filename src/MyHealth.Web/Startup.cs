using Microsoft.AspNet.Builder;
using Microsoft.AspNet.Hosting;
using Microsoft.AspNet.Identity.EntityFramework;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using MyHealth.Data;
using MyHealth.Data.Infraestructure;
using MyHealth.Model;
using MyHealth.Web.AppBuilderExtensions;
using Microsoft.Extensions.PlatformAbstractions;
using MyHealth.API.Infrastructure;

namespace MyHealth.Web
{
    public class Startup
    {
        private readonly Platform _Platform;

        public Startup(IHostingEnvironment env, IApplicationEnvironment appEnv
            , IRuntimeEnvironment runtimeEnvironment)
        {
            // Setup configuration sources.

            var builder = new ConfigurationBuilder()
                .SetBasePath(appEnv.ApplicationBasePath)
                .AddJsonFile("appsettings.json")
                .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true);

            if (env.IsDevelopment())
            {
                builder.AddUserSecrets();
                builder.AddApplicationInsightsSettings(developerMode: true);
            }

            builder.AddEnvironmentVariables();
            Configuration = builder.Build();
            _Platform = new Platform(runtimeEnvironment);
        }

        public IConfiguration Configuration { get; set; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            var useInMemoryStore = !_Platform.IsRunningOnWindows || _Platform.IsRunningOnMono || _Platform.IsRunningOnNanoServer;

            services.ConfigureDataContext(Configuration, useInMemoryStore);

            // Register dependencies
            services.ConfigureDependencies();

            // Add Identity services to the services container.
            services.AddIdentity<ApplicationUser, IdentityRole>()
                .AddEntityFrameworkStores<MyHealthContext>()
                .AddDefaultTokenProviders();

            services.AddApplicationInsightsTelemetry(Configuration);

            // Add MVC services to the services container.
            services.AddMvc();

            services.AddCaching();

            services.AddSession();

            services.AddAuthorization(Policies.Configuration);
        }

        // Configure is called after ConfigureServices is called.
        public async void Configure(IApplicationBuilder app, IHostingEnvironment env, 
            ILoggerFactory loggerFactory, MyHealthDataInitializer dataInitializer)
        {
            // Add Application Insights monitoring to the request pipeline as a very first middleware.
            app.UseApplicationInsightsRequestTelemetry();

            loggerFactory.MinimumLevel = LogLevel.Information;
            loggerFactory.AddConsole();

            // Add the following to the request pipeline only in development environment.
            if (env.IsDevelopment())
            {
                app.UseBrowserLink();
                app.UseDeveloperExceptionPage();
                app.UseDatabaseErrorPage(options => options.EnableAll());
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
            }

            // Add Application Insights exceptions handling to the request pipeline.
            app.UseApplicationInsightsExceptionTelemetry();

            // Add static files to the request pipeline.
            app.UseStaticFiles();

            app.UseSession();

            app.ConfigureSecurity();
            
            // Add MVC to the request pipeline.
            app.ConfigureRoutes();

            app.UseIISPlatformHandler();

            await dataInitializer.InitializeDatabaseAsync(app.ApplicationServices);
        }

        // Entry point for the application.
        public static void Main(string[] args) => WebApplication.Run<Startup>(args);
    }
}
