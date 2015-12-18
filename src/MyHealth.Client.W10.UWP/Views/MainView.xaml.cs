using MvvmCross.Plugins.Messenger;
using MyHealth.Client.Core.ViewModels;
using MyHealth.Client.W10.UWP.Views.Base;
using System.Linq;
using Windows.UI.Xaml.Controls;
using Windows.UI.Xaml.Navigation;

namespace MyHealth.Client.W10.UWP.Views
{
    public sealed partial class MainView : WindowsBasePage
    {
        public MainView(Frame frame, IMvxMessenger messenger)
        {
            this.InitializeComponent();
            SplitView.Content = frame;
            frame.Navigated += Frame_Navigated;
            this.DataContext = this;
            ViewModel = new MainViewModel(messenger);
        }
        private void HamburguerButton_Click(object sender, Windows.UI.Xaml.RoutedEventArgs e)
        {
            SplitView.IsPaneOpen = !SplitView.IsPaneOpen;
        }

        private void Frame_Navigated(object sender, NavigationEventArgs e)
        {
            var type = e.SourcePageType.ToString();
            var frame = this.SplitView.Content as Frame;
            PageTitle.Text = ((Base.WindowsBasePage)frame.Content).Title;
            SplitView.IsPaneOpen = false;
            foreach (var radioButton in RadioButtonContainer.Children.OfType<RadioButton>())
            {
                var name = radioButton.Content.ToString();
               
                if (string.IsNullOrEmpty(name) || PageTitle.Text.CompareTo(name) != 0)
                {
                    radioButton.IsChecked = false;
                }
                else
                {
                    radioButton.IsChecked = true;
                }
            }

            NewAppointment.IsEnabled = PageTitle.Text.CompareTo("Appointment") == 0 ? false : true;
        }

        public MainViewModel MainViewModel
        {
            get
            {
                return ViewModel as MainViewModel;
            }
        }
    }
}
