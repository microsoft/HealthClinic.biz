using System;
using Cirrious.MvvmCross.Binding.Touch.Views;
using UIKit;
using Foundation;
using Cirrious.MvvmCross.Binding.ExtensionMethods;
using CoreGraphics;

namespace MyHealth.Client.iOS
{
    public class AppointmentTableViewSource : 
        SpacedBaseTableViewSource<AppointmentTableCell>
	{
		public AppointmentTableViewSource(UITableView tableView)
			: base(tableView)
		{
		}

		public override nint NumberOfSections (UITableView tableView)
		{
            return 1;
		}

		public override nint RowsInSection (UITableView tableview, nint section)
		{
            return ItemsSource.Count();
		}

        public override UIView GetViewForFooter (UITableView tableView, nint section)
		{
			var footer = new UIView { BackgroundColor = UIColor.Clear };

			return footer;
		}

		protected override UITableViewCell GetOrCreateCellFor(UITableView tableView, 
			NSIndexPath indexPath, object item)
		{
			var returnCell = (AppointmentTableCell)tableView.DequeueReusableCell(
				AppointmentTableCell.Identifier);

			return returnCell;
		}

		protected override object GetItemAt(NSIndexPath indexPath)
		{
			if (ItemsSource == null)
				return null;

			return ItemsSource.ElementAt(indexPath.Row);
		}
	}
}

