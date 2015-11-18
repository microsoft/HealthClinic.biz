using Microsoft.IdentityModel.Clients.ActiveDirectory;

namespace MyHealth.Office365
{
    public class Office365Configuration
    {
        public string TenantId { get; set; }
        public string AuthorizationUri { get; set; }
        public string GraphResourceUri { get; set; }
        public string AccessTokenUri { get; set; }
        public string ApiBaseUrl { get; set; }
        public string EventsApiFormatString { get; set; }
        public string UserProfileApiFormatString { get; set; }
        public string UserPhotoApiFormatString { get; set; }
        public string CalendarApiFormatString { get; set; }

        public string ClientCertificatePfx { get; set; }
        public string ClientId { get; set; }
        public string ClientCertificatePassword { get; set; }
        public string DebugOffice365User { get; set; }
        public AuthenticationContext AuthContext { get; set; }
    }
}
