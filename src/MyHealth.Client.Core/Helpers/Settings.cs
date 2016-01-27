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

    #region Setting Constants

    private const string ADAuthenticationEnabledKey = "adauthenticationenabled_key";
    private static readonly bool ADAuthenticationEnabledDefault = false;

    #endregion


    public static bool ADAuthenticationEnabled
        {
      get
      {
        return AppSettings.GetValueOrDefault<bool>(ADAuthenticationEnabledKey, ADAuthenticationEnabledDefault);
      }
      set
      {
        AppSettings.AddOrUpdateValue<bool>(ADAuthenticationEnabledKey, value);
      }
    }

  }
}