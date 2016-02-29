// Helpers/Settings.cs
using Plugin.Settings;
using Plugin.Settings.Abstractions;

namespace MyHealth.Client.Core.Helpers
{
    /// <summary>
    /// This is the Settings static class that can be used in your Core solution or in any
    /// of your client applications. All settings are laid out the same exact way with getters
    /// and setters. 
    /// </summary>
    public static class Settings
    {
        private static ISettings AppSettings
        {
            get
            {
                return CrossSettings.Current;
            }
        }

        private const string SecurityEnabledKey = "adauthenticationenabled_key";
        private static readonly bool securityEnabled = false;

        public static bool SecurityEnabled
        {
            get
            {
                return AppSettings.GetValueOrDefault(SecurityEnabledKey, securityEnabled);
            }
            set
            {
                AppSettings.AddOrUpdateValue(SecurityEnabledKey, value);
            }
        }

        private const string TouchIdEnrolledAndFingerprintDetectedKey = 
            "touchidenrolledandfingerprintdetectedkey_key";
        private static readonly bool touchIdEnrolledAndFingerprintDetected = false;

        public static bool TouchIdEnrolledAndFingerprintDetected
        {
            get
            {
                return AppSettings.GetValueOrDefault(
                    TouchIdEnrolledAndFingerprintDetectedKey, 
                    touchIdEnrolledAndFingerprintDetected);
            }
            set
            {
                AppSettings.AddOrUpdateValue(
                    TouchIdEnrolledAndFingerprintDetectedKey, 
                    value);
            }
        }
    }
}