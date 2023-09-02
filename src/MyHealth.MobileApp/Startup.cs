using Microsoft.Azure.Mobile.Server;
using Microsoft.Azure.Mobile.Server.Authentication;
using Microsoft.Azure.Mobile.Server.Config;
using Microsoft.Owin;
using Owin;
using System.Configuration;
using System.Web.Http;

//HTTP Description needed for Swagger
using System.Web.Http.Description;

//Needed for Swashbuckle Filters
using System.Globalization;
using System.Linq;

//Has the HttpConfiguration extension methods with .EnableSwagger and .EnableSwaggerUi
using Swashbuckle.Application;
using Swashbuckle.Swagger;
using Newtonsoft.Json.Serialization;

[assembly: OwinStartup(typeof(MyHealth.MobileApp.Startup))]
namespace MyHealth.MobileApp
{
    public class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            HttpConfiguration config = new HttpConfiguration();

            config.Formatters.JsonFormatter.SerializerSettings.ContractResolver = new CamelCasePropertyNamesContractResolver();
            
            //See info about OWIN in https://github.com/domaindrivendev/Swashbuckle
            //Manually enable the Swagger docs and, optionally, the swagger-ui by invoking the 
            //extension methods (in namespace Swashbuckle.Application) on an instance of HttpConfiguration in Startup.cs
            config
                .EnableSwagger(c =>
                {
                    c.SingleApiVersion("v1", "MyHealth.MobileApp");
                    // Set filter to eliminate duplicate operation ids from being generated
                    // when there are multiple operations with the same verb in the API.                                    
                    c.OperationFilter<IncludeParameterNamesInOperationIdFilter>();

                    // Set another filter to eliminate duplciation operation ids from being generated
                    // when there are multiple Web API routes, like /tables and /api
                    c.OperationFilter<IncludeRouteNameInOperationIdFilter>();
                }
                              )
                .EnableSwaggerUi();

            new MobileAppConfiguration()
                .UseDefaultConfiguration()
                .ApplyTo(config);

            app.UseWebApi(config);

            MobileAppSettingsDictionary settings = config.GetMobileAppSettingsProvider().GetMobileAppSettings();

            if (string.IsNullOrEmpty(settings.HostName))
            {
                app.UseAppServiceAuthentication(new AppServiceAuthenticationOptions
                {
                    // This middleware is intended to be used locally for debugging. By default, HostName will
                    // only have a value when running in an App Service application.
                    SigningKey = ConfigurationManager.AppSettings["SigningKey"],
                    ValidAudiences = new[] { ConfigurationManager.AppSettings["ValidAudience"] },
                    ValidIssuers = new[] { ConfigurationManager.AppSettings["ValidIssuer"] },
                    TokenHandler = config.GetAppServiceTokenHandler()
                });
            }
        }
    }

    internal class IncludeParameterNamesInOperationIdFilter : IOperationFilter
    {
        public void Apply(Operation operation, SchemaRegistry schemaRegistry, ApiDescription apiDescription)
        {
            if (operation.parameters != null)
            {
                // Select the capitalized parameter names
                var parameters = operation.parameters.Select(
                    p => CultureInfo.InvariantCulture.TextInfo.ToTitleCase(p.name));

                // Set the operation id to match the format "OperationByParam1AndParam2"
                operation.operationId = string.Format(
                    "{0}By{1}",
                    operation.operationId,
                    string.Join("And", parameters));
            }
        }
    }

    internal class IncludeRouteNameInOperationIdFilter : IOperationFilter
    {
        public void Apply(Operation operation, SchemaRegistry schemaRegistry, ApiDescription apiDescription)
        {

            //Find current Route name
            string routeTemplate = apiDescription.Route.RouteTemplate;
            string BaseRouteName = routeTemplate.Substring(0, routeTemplate.IndexOf('/'));
            string postfix = "_" + BaseRouteName + "_Route";

            // Set the operation id to match the format "OperationThroughRouteName"
            operation.operationId = string.Format(
                "{0}_Through{1}",
                operation.operationId,
                postfix);

        }
    }

}
