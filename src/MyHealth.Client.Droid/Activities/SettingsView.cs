using Android.App;
using Android.OS;
using Xamarin.Forms.Platform.Android;
using MyHealth.Client.Core;

namespace MyHealth.Client.Droid.Activities
{
    [Activity (
        Label = "Settings",
        Theme = "@android:style/Theme.Material.Light")]
    public class SettingsView : FormsApplicationActivity
    {

        public static SettingsView Current { get; private set; }
        protected override void OnCreate(Bundle bundle)
        {
            base.OnCreate(bundle);

            Current = this;
            Xamarin.Forms.Forms.Init(this, bundle);
            LoadApplication(new SettingsApp());
        }

        protected override void OnDestroy()
        {
            base.OnDestroy();
            Current = null;
        }
    }

    public class SettingsApp : Xamarin.Forms.Application
    {

        public SettingsApp()
        {
            MainPage = new SettingsPage();
        }
    }
}