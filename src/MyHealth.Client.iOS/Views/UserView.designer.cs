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
	[Register ("UserView")]
	partial class UserView
	{
		[Outlet]
		UIKit.UILabel ageBirth { get; set; }

		[Outlet]
		UIKit.UILabel bloodGroupLabel { get; set; }

		[Outlet]
		UIKit.UIView contentView { get; set; }

		[Outlet]
		UIKit.UILabel genreLabel { get; set; }

		[Outlet]
		UIKit.UILabel heightLabel { get; set; }

		[Outlet]
		UIKit.UILabel idLabel { get; set; }

		[Outlet]
		UIKit.UILabel nameLabel { get; set; }

		[Outlet]
		UIKit.UIView userFrameView { get; set; }

		[Outlet]
		UIKit.UIImageView userImageView { get; set; }

		[Outlet]
		UIKit.UILabel weightLabel { get; set; }

		[Outlet]
		UIButton btnUserLogin { get; set; }

		void ReleaseDesignerOutlets ()
		{
			if (ageBirth != null) {
				ageBirth.Dispose ();
				ageBirth = null;
			}
			if (bloodGroupLabel != null) {
				bloodGroupLabel.Dispose ();
				bloodGroupLabel = null;
			}
			if (contentView != null) {
				contentView.Dispose ();
				contentView = null;
			}
			if (genreLabel != null) {
				genreLabel.Dispose ();
				genreLabel = null;
			}
			if (heightLabel != null) {
				heightLabel.Dispose ();
				heightLabel = null;
			}
			if (idLabel != null) {
				idLabel.Dispose ();
				idLabel = null;
			}
			if (nameLabel != null) {
				nameLabel.Dispose ();
				nameLabel = null;
			}
			if (userFrameView != null) {
				userFrameView.Dispose ();
				userFrameView = null;
			}
			if (userImageView != null) {
				userImageView.Dispose ();
				userImageView = null;
			}
			if (weightLabel != null) {
				weightLabel.Dispose ();
				weightLabel = null;
			}
		}
	}
}
