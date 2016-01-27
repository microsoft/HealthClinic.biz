namespace MyHealth.Client.Core
{
	public static class AppSettings
	{
        public static string ServerlUrl = "http://YOUR_WEB.azurewebsites.net/";

        public static string MobileAPIUrl = "https://YOUR_WEB_MOBILE.azurewebsites.net";

        public static int DefaultPatientId = YOUR_PATIENT_ID;

        public static int DefaultTenantId = YOUR_TENANT_ID;

        public static string DefaultAppointmentDescription = "Follow up in order to determine the effectiveness of treatment received";

        public static int MinimumRoomNumber = 1;

        public static int MaximumRoomNumber = 10;

        public static string NonExistingFieldDefaultValue = "-";

        // Settings for outlook.com integration
        public const string DroidClientId = "YOUR_ANDROID_CLIENT_ID";
        public const string iOSClientId = "YOUR_IOS_CLIENT_ID";
        public const string WUPClientId = "YOUR_UWP_CLIENT_ID";
        public static readonly System.Uri RedirectUri = new System.Uri("urn:ietf:wg:oauth:2.0:oob");

        // HockeyApp AppId
        public static string HockeyAppiOSAppID = "YOUR_HOCKEY_APP_ID";

        public static string iOSAppGroupIdentifier = "group.app.client.patients";

        public static string iOSAppGroupDirectory = "messageDir";
    }
}

    