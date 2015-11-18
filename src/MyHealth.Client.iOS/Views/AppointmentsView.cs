using Cirrious.MvvmCross.Touch.Views;
using Foundation;
using System;
using System.CodeDom.Compiler;
using UIKit;
using MyHealth.Client.Core.ViewModels;
using Cirrious.MvvmCross.Binding.BindingContext;

namespace MyHealth.Client.iOS
{
	partial class AppointmentsView : BaseView
	{
		static readonly int Margin = 8;

		AppointmentTableViewSource _tableViewSource;

        protected AppointmentsViewModel AppointmentsViewModel
        {
            get
            {
                return ViewModel as AppointmentsViewModel;
            }
        }

		public AppointmentsView (IntPtr handle) : base (handle)
		{
		}

		public override void ViewDidLoad()
		{
			_tableViewSource = new AppointmentTableViewSource(appointmentsTableView);

			base.ViewDidLoad();

            Title = "Appointments";

			appointmentsTableView.Source = _tableViewSource;
            appointmentsTableView.SeparatorStyle = UITableViewCellSeparatorStyle.SingleLine;
            appointmentsTableView.SeparatorColor = UIColor.FromRGB(0, 215, 203);
			appointmentsTableView.ReloadData();
		}

		public override void ViewWillAppear(bool animated)
		{
			base.ViewWillAppear(animated);

            AppointmentsViewModel?.RefreshCommand?.Execute();

			appointmentsTableView.DeselectRow(appointmentsTableView.IndexPathForSelectedRow, 
				true);
		}

		protected override void SetUpBindings()
		{
			base.SetUpBindings ();

			var set = this.CreateBindingSet<AppointmentsView, AppointmentsViewModel>();

			set.Bind(_tableViewSource).To(vm => vm.Appointments);
			set.Bind(_tableViewSource)
				.For(source => source.SelectionChangedCommand)
                .To(vm => vm.ShowDetailsCommand);

			set.Apply();
		}

		protected override void SetUpUI ()
		{
			base.SetUpUI ();

            appointmentsTableView.ContentInset = new UIEdgeInsets(Margin, 0, Margin, 0);
            appointmentsTableView.SeparatorInset = new UIEdgeInsets(Margin, 0, Margin, 0);
        }
	}
}
