using MyHealth.Client.W10.UWP.Views.Base;
using Windows.UI.Xaml.Media.Animation;

namespace MyHealth.Client.W10.UWP.Views
{
    public sealed partial class HomeView : WindowsBasePage
    {
        public HomeView()
        {
            this.InitializeComponent();

            Storyboard sb = this.Resources["HeartStoryboard"] as Storyboard;
            sb.SpeedRatio = 0.8f;
            sb.Begin();
        }
    }
}
