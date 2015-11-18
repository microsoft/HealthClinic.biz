using System;
using UIKit;
using CoreGraphics;

namespace MyHealth.Client.iOS
{
	public static class Helpers
	{
		public static void SetUpShadow (this UIView view, float opacity = 0.5f)
		{
			var shadowColor = UIColor.Black.CGColor;
			var shadowOffset = new CGSize (0, 1);
			var shadowOpacity = opacity;
			var shadowRadius = 1;

			var layer = view.Layer;

			layer.ShadowColor = shadowColor;
			layer.ShadowOffset = shadowOffset;
			layer.ShadowOpacity = shadowOpacity;
			layer.ShadowRadius = shadowRadius;
		}

        public static void SetUpBorder(this UIView view)
        {
            view.Layer.BorderColor = Colors.Border.CGColor;
            view.Layer.BorderWidth = 1;
        }
	}
}

