using System;
using Cirrious.MvvmCross.Binding.Droid.Target;
using Android.Graphics;
using Cirrious.MvvmCross.Binding.Droid.Views;

namespace MyHealth.Client.Droid.Bindings
{
    public class MvxImageViewTintColorBinding : MvxAndroidTargetBinding
    {
        public MvxImageViewTintColorBinding(MvxImageView iview) : base(iview)
        {
        }

        protected override void SetValueImpl(object target, object value)
        {
            var img = target as MvxImageView;
            if (img != null && (value is Color))
            {
                img.SetColorFilter((Color)value);
            }
        }

        public override Type TargetType
        {
            get { return typeof(Color); }
        }
    }
}