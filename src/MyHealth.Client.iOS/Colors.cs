using System;
using UIKit;

namespace MyHealth.Client.iOS
{
	public static class Colors
	{
		/// <summary>
		/// Green-like color.
		/// </summary>
		public static UIColor Accent = new UIColor (0 / 255f, 216 / 255f, 204 / 255f, 1);

		/// <summary>
		/// Dark blue-like color.
		/// </summary>
		public static UIColor TabBarNormalText = new UIColor (61 / 255f, 61 / 255f, 76 / 255f, 1);

		/// <summary>
		/// Selected background view color at appointment list.
		/// </summary>
		public static UIColor SelectedBackgroundView = new UIColor (248 / 255f, 248 / 255f, 248 / 255f, 1);

        /// <summary>
        /// New Appointment border color.
        /// </summary>
        public static UIColor Border = new UIColor(225 / 255f, 225 / 255f, 225 / 255f, 1);
	}
}

