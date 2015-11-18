using Microsoft.AspNet.Builder;
using Microsoft.AspNet.Diagnostics.Entity;
using Microsoft.AspNet.Hosting;
using Microsoft.CodeAnalysis;
using Microsoft.Data.Entity;
using Microsoft.Dnx.Runtime;
using Microsoft.Framework.Caching.Memory;
using Microsoft.Framework.Configuration;
using Microsoft.Framework.DependencyInjection;
using Microsoft.Framework.Logging;
using MyHealth.Web.Stress.AppBuilderExtensions;
using MyHealth.Web.Stress.Data;
using MyHealth.Web.Stress.Data.Infraestructure;
using MyHealth.Web.Stress.Data.Infraestructure.Initializer;
using MyHealth.Web.Stress.Models;
using MyHealth.Web.Stress.Options;


namespace MyHealth.Web.Stress
{
    public class Startup
    {
        private readonly Platform _Platform;

        public Startup(IHostingEnvironment env, IApplicationEnvironment appEnv, IRuntimeEnvironment runtimeEnvironment)
        {
            // Setup configuration sources.

            var builder = new ConfigurationBuilder()
                    .SetBasePath(appEnv.ApplicationBasePath)
                    .AddJsonFile("appsettings.json")
                    .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true);

            if (env.IsDevelopment())
            {
                // This reads the configuration keys from the secret store.
                // For more details on using the user secret store see http://go.microsoft.com/fwlink/?LinkID=532709
                builder.AddUserSecrets();
            }
            builder.AddEnvironmentVariables();
            Configuration = builder.Build();
            _Platform = new Platform(runtimeEnvironment);
        }

        public IConfigurationRoot Configuration { get; set; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            var useInMemoryStore = !_Platform.IsRunningOnWindows || _Platform.IsRunningOnMono || _Platform.IsRunningOnNanoServer;

            services.ConfigureDataContext(Configuration, useInMemoryStore);

            // Register dependencies
            services.ConfigureDependencies(Configuration);

            // Add Entity Framework services to the services container.
            services.AddEntityFramework()
                .AddSqlServer()
                .AddDbContext<MyHealthContext>(options =>
                    options.UseSqlServer(Configuration["Data:DefaultConnection:ConnectionString"]));

            // Add MVC services to the services container.
            services.AddMvc();

            services.AddOptions();
            services.Configure<DefaultUser>(Configuration.GetSection("DefaultUser"));
            services.Configure<Office365Options>(Configuration.GetSection("Data:Office365"));
            services.AddSingleton<IMemoryCache, MemoryCache>();

            // Uncomment the following line to add Web API services which makes it easier to port Web API 2 controllers.
            // You will also need to add the Microsoft.AspNet.Mvc.WebApiCompatShim package to the 'dependencies' section of project.json.
            // services.AddWebApiConventions();          
        }

        // Configure is called after ConfigureServices is called.
        public async void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory, MyHealthDataInitializer dataInitializer)
        {
            loggerFactory.MinimumLevel = LogLevel.Information;
            loggerFactory.AddConsole();
            loggerFactory.AddDebug();

            // Configure the HTTP request pipeline.

            // Add the following to the request pipeline only in development environment.
            if (env.IsDevelopment())
            {
                app.UseBrowserLink();
                app.UseDeveloperExceptionPage();
                app.UseDatabaseErrorPage(DatabaseErrorPageOptions.ShowAll);
            }
            else
            {
                // Add Error handling middleware which catches all application specific errors and
                // sends the request to the following path or controller action.
                app.UseExceptionHandler("/Home/Error");
            }

            // Add the platform handler to the request pipeline.
            app.UseIISPlatformHandler();

            // Add static files to the request pipeline.
            app.UseStaticFiles();

            // Add MVC to the request pipeline.
            app.ConfigureRoutes();

            await dataInitializer.InitializeDatabaseAsync(app.ApplicationServices, Configuration);
        }
    }
}
