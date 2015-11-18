// WARNING
//
// This file has been generated automatically by Xamarin Studio from the outlets and
// actions declared in your storyboard file.
// Manual changes to this file will not be maintained.
//
using Foundation;
using System;
using System.CodeDom.Compiler;
using UIKit;

namespace MyHealth.Client.iOS
{
	[Register ("TreatmentTableCell")]
	partial class TreatmentTableCell
	{
		[Outlet]
		UIKit.UIImageView countdownImageView { get; set; }

		[Outlet]
		UIKit.UILabel hourLabel { get; set; }

		[Outlet]
		UIKit.UILabel medecineLabel { get; set; }

		[Outlet]
		[GeneratedCode ("iOS Designer", "1.0")]
		UILabel breakfastCountLabel { get; set; }

		[Outlet]
		[GeneratedCode ("iOS Designer", "1.0")]
		UILabel dinnerCountLabel { get; set; }

		[Outlet]
		[GeneratedCode ("iOS Designer", "1.0")]
		UILabel lunchCountLabel { get; set; }

		void ReleaseDesignerOutlets ()
		{
			if (breakfastCountLabel != null) {
				breakfastCountLabel.Dispose ();
				breakfastCountLabel = null;
			}
			if (dinnerCountLabel != null) {
				dinnerCountLabel.Dispose ();
				dinnerCountLabel = null;
			}
			if (lunchCountLabel != null) {
				lunchCountLabel.Dispose ();
				lunchCountLabel = null;
			}
		}
	}
}
