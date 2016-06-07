using System;

namespace MyHealth.Client.Core
{
	public static class AppSettings
	{
        public static string ServerlUrl = "http://YOUR_WEB.azurewebsites.net/";

        public static string MobileAPIUrl = "https://YOUR_WEB_MOBILE.azurewebsites.net";

        public static int DefaultPatientId = __YOURPATIENTID__;

        public static int CurrentPatientId = __YOURPATIENTID__;

        public static int DefaultTenantId = __YOURTENANTID__;

        public static string DefaultAppointmentDescription = "Follow up in order to determine the effectiveness of treatment received";

        public static int MinimumRoomNumber = 1;

        public static int MaximumRoomNumber = 10;

        public static string NonExistingFieldDefaultValue = "-";

        // HockeyApp AppId
        public static string HockeyAppiOSAppID = "YOUR_HOCKEY_APP_ID";

        public static string iOSAppGroupIdentifier = "group.app.client.patients";

        public static string iOSAppGroupDirectory = "messageDir";

        public static bool OutlookIntegration = false;

        public static SecuritySettings Security
        {
            get
            {
                if (OutlookIntegration)
                    return OutlookSettings;
                else
                    return AADSettings;
            }
        }

        static SecuritySettings AADSettings = new SecuritySettings()
        {
            ClientId = "YOUR_AAD_CLIENT_ID",
            RedirectUri = new Uri("http://your_aad_redirect_url"),
            Authority = "YOUR_AAD_AUTHORITY",
            Scope = "https://graph.microsoft.com",
            Domain = "YOUR_AAD_DOMAIN"
        };

        static SecuritySettings OutlookSettings = new SecuritySettings()
        {
            ClientId = "YOUR_OUTLOOK_CLIENT_ID",
            RedirectUri = new Uri("http://your_outlook_redirect_url"),
            Authority = "YOUR_OUTLOOK_AUTHORITY",
            Scope = "https://graph.microsoft.com/calendars.readwrite",
            Domain = "YOUR_OUTLOOK_DOMAIN"
        };

    }

    public class SecuritySettings
    {
        public string ClientId { get; set; }
        public Uri RedirectUri { get; set; }
        public string Authority { get; set; }
        public string Scope { get; set; }
        public string Domain { get; set; }
    }
}

    
