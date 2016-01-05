using MyHealth.Client.Core.ViewModels;
using MyHealth.Client.W10.UWP.Views.Base;
using Windows.UI.Xaml.Controls;

namespace MyHealth.Client.W10.UWP.Views
{
    public sealed partial class AppointmentsView : WindowsBasePage
    {
        public AppointmentsView()
        {
            this.InitializeComponent();
        }

        private void ListView_SelectionChanged(object sender, SelectionChangedEventArgs e)
        {
            var offset = 100;
            scrollViewer.ChangeView(null, scrollViewer.ScrollableHeight - offset, null, false);
        }

        public AppointmentsViewModel AppointmentsViewModel
        {
            get
            {
                return ViewModel as AppointmentsViewModel;
            }
        }
    }
}
