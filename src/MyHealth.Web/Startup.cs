using Microsoft.AspNet.Builder;
using Microsoft.AspNet.Diagnostics.Entity;
using Microsoft.AspNet.Hosting;
using Microsoft.AspNet.Identity.EntityFramework;
using Microsoft.Framework.Configuration;
using Microsoft.Framework.DependencyInjection;
using Microsoft.Framework.Logging;
using MyHealth.Data;
using MyHealth.Data.Infraestructure;
using MyHealth.Model;
using MyHealth.Web.AppBuilderExtensions;
using Microsoft.Dnx.Runtime;

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


            CookieServiceCollectionExtensions.AddCookieAuthentication(services, options =>
            {
                options.LoginPath = new Microsoft.AspNet.Http.PathString("/Account/Login");
            });

            services.AddApplicationInsightsTelemetry(Configuration);

            // Add MVC services to the services container.
            services.AddMvc();

            services.AddCaching();

            services.AddSession();

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
                app.UseDatabaseErrorPage(DatabaseErrorPageOptions.ShowAll);
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
    }
}
