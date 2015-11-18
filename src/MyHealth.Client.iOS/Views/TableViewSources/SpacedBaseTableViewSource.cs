using System;
using Cirrious.MvvmCross.Binding.Touch.Views;
using UIKit;
using Foundation;
using Cirrious.MvvmCross.Binding.ExtensionMethods;
using CoreGraphics;

namespace MyHealth.Client.iOS
{
	public abstract class SpacedBaseTableViewSource<T> : MvxTableViewSource
        where T : MvxTableViewCell
	{
        public SpacedBaseTableViewSource(UITableView tableView)
			: base(tableView)
		{
		}

		public override nint NumberOfSections (UITableView tableView)
		{
			return ItemsSource.Count ();
		}

		public override nint RowsInSection (UITableView tableview, nint section)
		{
			return 1;
		}

		public override UIView GetViewForFooter (UITableView tableView, nint section)
		{
			var footer = new UIView { BackgroundColor = UIColor.Clear };

			return footer;
		}

		protected override abstract UITableViewCell GetOrCreateCellFor (UITableView tableView, 
		                                                      NSIndexPath indexPath, object item);
	}
}

