using System;
using System.Collections.Generic;
using System.Text;

namespace MyHealth.Client.iOS
{
    public class ShortcutHelper
    {
        /// <summary>
        /// https://developer.apple.com/library/prerelease/ios/documentation/UIKit/Reference/UIApplicationShortcutIcon_Class/#//apple_ref/c/tdef/UIApplicationShortcutIconType
        /// </summary>
        public static class ShortcutIdentifiers
        {
            public const string Appointments = "com.your-company.MyHealth.Client.iOS.Appointments";
            public const string Treatments = "com.your-company.MyHealth.Client.iOS.Treatments";
            public const string User = "com.your-company.MyHealth.Client.iOS.User";
        }
    }
}
