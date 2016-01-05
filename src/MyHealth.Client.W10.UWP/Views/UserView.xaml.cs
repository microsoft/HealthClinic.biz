using MyHealth.Client.W10.UWP.Views.Base;
using Windows.UI.Xaml;
using MyHealth.Client.Core.ViewModels;

namespace MyHealth.Client.W10.UWP.Views
{
    public sealed partial class UserView : WindowsBasePage
    {
        public UserViewModel UserViewModel
        {
            get
            {
                return ViewModel as UserViewModel;
            }
        }
        public UserView()
        {
            this.InitializeComponent();
        }
    }
}

