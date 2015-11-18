using Toolbar = Android.Support.V7.Widget.Toolbar;
using Android.Content.Res;

namespace MyHealth.Client.Droid.Activities
{
    static class ToolbarExtensions
    {
        public static void PadActionBar(this Toolbar toolbar, Resources resources)
        {
            var resourceId = resources.GetIdentifier("status_bar_height", "dimen", "android");
            var height = resourceId > 0 ?
                resources.GetDimensionPixelSize(resourceId) :
                0;
            toolbar.SetPadding(0, height / 2, 0, 0);
        }
    }
}