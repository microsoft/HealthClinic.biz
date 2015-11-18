using System;
using Cirrious.MvvmCross.Binding.Touch.Views;
using UIKit;
using Foundation;
using Cirrious.MvvmCross.Binding.ExtensionMethods;
using CoreGraphics;

namespace MyHealth.Client.iOS
{
    public class TreatmentTableViewSource : SpacedBaseTableViewSource<TreatmentTableCell>
	{
		public TreatmentTableViewSource(UITableView tableView)
			: base(tableView)
		{
		}

		public override nint NumberOfSections (UITableView tableView)
		{
            return ItemsSource.Count();
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

		protected override UITableViewCell GetOrCreateCellFor(UITableView tableView, 
			NSIndexPath indexPath, object item)
		{
			var returnCell = (TreatmentTableCell)tableView.DequeueReusableCell(
				TreatmentTableCell.Identifier);

			return returnCell;
		}

		protected override object GetItemAt(NSIndexPath indexPath)
		{
			if (ItemsSource == null)
				return null;

			return ItemsSource.ElementAt(indexPath.Section);
		}
	}
}

