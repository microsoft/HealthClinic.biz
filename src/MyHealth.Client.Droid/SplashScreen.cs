using Android.App;
using Android.Content.PM;
using Cirrious.MvvmCross.Droid.Views;

namespace MyHealth.Client.Droid
{
    [Activity(
		Label = "@string/ApplicationName"
		, MainLauncher = true
		, Theme = "@style/Theme.Splash"
		, NoHistory = true
        , ConfigurationChanges = ConfigChanges.ScreenSize | ConfigChanges.Orientation
        , ScreenOrientation = ScreenOrientation.Portrait)]

    public class SplashScreen : MvxSplashScreenActivity
    {
        public SplashScreen()
            : base(Resource.Layout.SplashScreen)
        {
        }
    }
}