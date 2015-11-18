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

namespace MyHealth.Client.iOSWatchKitExtension
{
	[Register ("InterfaceController")]
	partial class InterfaceController
	{
		[Outlet]
		[GeneratedCode ("iOS Designer", "1.0")]
		WatchKit.WKInterfaceGroup countdownGroup { get; set; }

		[Outlet]
		[GeneratedCode ("iOS Designer", "1.0")]
		WatchKit.WKInterfaceLabel leftTimeLabel { get; set; }

		[Outlet]
		[GeneratedCode ("iOS Designer", "1.0")]
		WatchKit.WKInterfaceLabel nameLabel { get; set; }

		[Outlet]
		[GeneratedCode ("iOS Designer", "1.0")]
		WatchKit.WKInterfaceGroup nextInGroup { get; set; }

		[Outlet]
		[GeneratedCode ("iOS Designer", "1.0")]
		WatchKit.WKInterfaceLabel nextInLabel { get; set; }

		[Outlet]
		[GeneratedCode ("iOS Designer", "1.0")]
		WatchKit.WKInterfaceLabel waitingLabel { get; set; }

		void ReleaseDesignerOutlets ()
		{
			if (countdownGroup != null) {
				countdownGroup.Dispose ();
				countdownGroup = null;
			}
			if (leftTimeLabel != null) {
				leftTimeLabel.Dispose ();
				leftTimeLabel = null;
			}
			if (nameLabel != null) {
				nameLabel.Dispose ();
				nameLabel = null;
			}
			if (nextInGroup != null) {
				nextInGroup.Dispose ();
				nextInGroup = null;
			}
			if (nextInLabel != null) {
				nextInLabel.Dispose ();
				nextInLabel = null;
			}
			if (waitingLabel != null) {
				waitingLabel.Dispose ();
				waitingLabel = null;
			}
		}
	}
}
