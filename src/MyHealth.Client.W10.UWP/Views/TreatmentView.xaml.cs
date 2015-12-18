using MyHealth.Client.W10.UWP.Views.Base;
using Windows.UI.Xaml.Controls;
using MyHealth.Client.Core.ViewModels;

namespace MyHealth.Client.W10.UWP.Views
{
    public sealed partial class TreatmentView : WindowsBasePage
    {
        public TreatmentViewModel TreatmentViewModel
        {
            get
            {
                return ViewModel as TreatmentViewModel;
            }
        }
        public TreatmentView()
        {
            this.InitializeComponent();
        }

        private void ListView_SelectionChanged(object sender, SelectionChangedEventArgs e)
        {
            var offset = 70;
            scrollViewer.ChangeView(null, scrollViewer.ScrollableHeight - offset, null, false);
        }
    }
}
