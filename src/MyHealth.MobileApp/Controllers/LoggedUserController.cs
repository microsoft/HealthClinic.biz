using Microsoft.Azure.Mobile.Server.Authentication;
using Microsoft.Azure.Mobile.Server.Config;
using Microsoft.IdentityModel.Clients.ActiveDirectory;
using MyHealth.MobileApp.DataObjects;
using MyHealth.MobileApp.Models;
using System;
using System.Configuration;
using System.IO;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Security.Claims;
using System.Security.Principal;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Controllers;

namespace MyHealth.MobileApp.Controllers
{
    [Authorize]
    [MobileAppController]
    public class LoggedUserController : ApiController
    {
        MobileServiceContext context;
        AzureActiveDirectoryCredentials credentials = null;
        const string resourceUrl = "https://graph.microsoft.com/";

        protected override void Initialize(HttpControllerContext controllerContext)
        {
            base.Initialize(controllerContext);
            context = new MobileServiceContext();
        }

        // GET api/LoggedUser
        public async Task<Doctor> Get(int tenantId)
        {
            credentials =
                await User.GetAppServiceIdentityAsync<AzureActiveDirectoryCredentials>(Request);

            string name = GetName();
            Doctor doctor = GetDoctor(tenantId, name);

            if (doctor != null)
            {
                doctor.Name = name;
                doctor.Picture = await GetPhoto(doctor);
            }

            return doctor;
        }

        async Task<string> AcquireToken()
        {
            string authString = $"https://login.microsoftonline.com/{credentials.TenantId}";
            string clientId = credentials.UserClaims
                    .FirstOrDefault(c => c.Type == "aud").Value;
            string clientSecret = ConfigurationManager.AppSettings["ClientSecret"];

            var authenticationContext = new AuthenticationContext(authString, false);
            ClientCredential clientCred = new ClientCredential(clientId, clientSecret);

            AuthenticationResult result = await authenticationContext.AcquireTokenAsync(
                            resource: resourceUrl,
                            clientCredential: clientCred);

            return result.AccessToken;
        }


        string GetName()
        {
            var giveName = credentials.UserClaims
                .FirstOrDefault(c => c.Type == ClaimTypes.GivenName).Value;

            var surname = credentials.UserClaims
                .FirstOrDefault(c => c.Type == ClaimTypes.Surname).Value;

            return $"{giveName} {surname}";
        }

        async Task<byte[]> GetPhoto(Doctor doctor)
        {
            var photo = await GetUserPhotoAsync();
            if (photo != null)
                doctor.Picture = photo;

            return doctor.Picture;
        }

        Doctor GetDoctor(int tenantId, string user)
        {
            var doctor = context.Doctors
                .SingleOrDefault(d => d.Name.StartsWith(user) && d.TenantId == tenantId);

            if (doctor == null) // Get default doctor
                doctor = GetDefaultDoctor(tenantId);

            return doctor;
        }

        Doctor GetDefaultDoctor(int tenantId)
        {
            var defaultId = ConfigurationManager.AppSettings["DefaultDoctorId"];
            return context.Doctors
                .SingleOrDefault(d => d.Id == defaultId
                                    && d.TenantId == tenantId);
        }

        async Task<byte[]> GetUserPhotoAsync()
        {
            byte[] photo = null;
            try
            {
                var token = await AcquireToken();
                photo = await GetUserPhotoAsync(token);
            }
            catch (Exception)
            {
                // The app will show the default imageç
                photo = null;
            }
            return photo;
        }

        public async Task<byte[]> GetUserPhotoAsync(string accessToken)
        {
            byte[] result = null;

            try
            {
                string url = $"https://graph.microsoft.com/v1.0/Users(\'{credentials.UserId}')/photo/$value";
                using (HttpClient client = new HttpClient())
                {
                    client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", accessToken);
                    var stream = await client.GetStreamAsync(url);
                    result = ReadStream(stream);
                }
            }
            catch (Exception)
            {
                result = null;
            }

            return result;
        }

        byte[] ReadStream(Stream input)
        {
            byte[] buffer = new byte[16 * 1024];
            using (MemoryStream ms = new MemoryStream())
            {
                int read;
                while ((read = input.Read(buffer, 0, buffer.Length)) > 0)
                {
                    ms.Write(buffer, 0, read);
                }
                return ms.ToArray();
            }
        }

    }
}
