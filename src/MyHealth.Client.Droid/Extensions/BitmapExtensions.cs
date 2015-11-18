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
    static class BitmapExtensions
    {
        public static Bitmap ToGreyScale(this Bitmap bmp)
        {
            if (bmp == null) return null;

            var height = bmp.Height;
            var width = bmp.Width;
            var bmpGrayscale = Bitmap.CreateBitmap(width, height, Bitmap.Config.Argb8888);
            var canvas = new Canvas(bmpGrayscale);
            var paint = new Paint();
            var cm = new ColorMatrix();
            cm.SetSaturation(0);
            var filter = new ColorMatrixColorFilter(cm);
            paint.SetColorFilter(filter);
            canvas.DrawBitmap(bmp, 0, 0, paint);
            return bmpGrayscale;
        } 
    }
}