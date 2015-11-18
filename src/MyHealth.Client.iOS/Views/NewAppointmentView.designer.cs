// WARNING
//
// This file has been generated automatically by Xamarin Studio to store outlets and
// actions made in the UI designer. If it is removed, they will be lost.
// Manual changes to this file may not be handled correctly.
//
using Foundation;
using System.CodeDom.Compiler;

namespace MyHealth.Client.iOS
{
	[Register ("NewAppointmentView")]
	partial class NewAppointmentView
	{
		[Outlet]
		UIKit.UIView avgContainerView { get; set; }

		[Outlet]
		UIKit.NSLayoutConstraint avgFixedHeightConstraint { get; set; }

		[Outlet]
		UIKit.UILabel avgLabel { get; set; }

		[Outlet]
		UIKit.UIView backgroundView { get; set; }

		[Outlet]
		UIKit.UIView calendarContainerView { get; set; }

		[Outlet]
		UIKit.UIButton cancelButton { get; set; }

		[Outlet]
		UIKit.UITextField doctorTextField { get; set; }

		[Outlet]
		UIKit.UITextField hourTextField { get; set; }

		[Outlet]
		UIKit.UIButton saveButton { get; set; }

		[Outlet]
		UIKit.UITextField specialityTextField { get; set; }
		
		void ReleaseDesignerOutlets ()
		{
			if (avgContainerView != null) {
				avgContainerView.Dispose ();
				avgContainerView = null;
			}

			if (avgLabel != null) {
				avgLabel.Dispose ();
				avgLabel = null;
			}

			if (backgroundView != null) {
				backgroundView.Dispose ();
				backgroundView = null;
			}

			if (calendarContainerView != null) {
				calendarContainerView.Dispose ();
				calendarContainerView = null;
			}

			if (cancelButton != null) {
				cancelButton.Dispose ();
				cancelButton = null;
			}

			if (doctorTextField != null) {
				doctorTextField.Dispose ();
				doctorTextField = null;
			}

			if (hourTextField != null) {
				hourTextField.Dispose ();
				hourTextField = null;
			}

			if (saveButton != null) {
				saveButton.Dispose ();
				saveButton = null;
			}

			if (specialityTextField != null) {
				specialityTextField.Dispose ();
				specialityTextField = null;
			}

			if (avgFixedHeightConstraint != null) {
				avgFixedHeightConstraint.Dispose ();
				avgFixedHeightConstraint = null;
			}
		}
	}
}
