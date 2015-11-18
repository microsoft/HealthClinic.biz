using MyHealth.Client.W10.UWP.Views.Base;
using Windows.UI.Xaml.Controls;

namespace MyHealth.Client.W10.UWP.Views
{
    public sealed partial class TreatmentView : WindowsBasePage
    {
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
