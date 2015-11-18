using System;
using Android.Widget;
using Cirrious.MvvmCross.Binding.Droid.Target;
using Android.Graphics;

namespace MyHealth.Client.Droid.Bindings
{
    public class MvxTextViewTextColorBinding : MvxAndroidTargetBinding
    {
        public MvxTextViewTextColorBinding(TextView textView) : base(textView)
        {
        }

        protected override void SetValueImpl(object target, object value)
        {
            var txt = target as TextView;
            if (txt != null && (value is Color))
            {
                txt.SetTextColor((Color)value);
            }
        }

        public override Type TargetType
        {
            get { return typeof(Color); }
        }
    }
}