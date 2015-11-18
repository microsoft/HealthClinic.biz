using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

using Android.App;
using Android.Content;
using Android.OS;
using Android.Runtime;
using Android.Views;
using Android.Widget;
using Android.Graphics;

namespace MyHealth.Client.Droid.Extensions
{
    static class ImageViewExtensions
    {
        public static Bitmap GetBitmap(this ImageView img)
        {
            img.BuildDrawingCache();
            return img.DrawingCache;
        }
    }
}