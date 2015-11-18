using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

using Android.App;
using Android.Content;
using Android.OS;
using Android.Runtime;
using Android.Views;
using Toolbar = Android.Support.V7.Widget.Toolbar;
using Android.Widget;

namespace MyHealth.Client.Droid.Extensions
{
    static class ActivityExtensions
    {
        public static void SetCustomTitle(this Activity activity, string title)
        {
            var toolbar = activity.FindViewById<Toolbar>(Resource.Id.toolbar);
            var textTitle = toolbar?.FindViewById<TextView>(Resource.Id.toolbar_title);
            if (textTitle != null)
            {
                textTitle.Text = title;
            }
        }
    }
}