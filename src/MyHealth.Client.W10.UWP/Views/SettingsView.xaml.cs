using MyHealth.Client.W10.UWP.Views.Base;
using MyHealth.Client.Core.ViewModels;

namespace MyHealth.Client.W10.UWP.Views
{
    public sealed partial class SettingsView : WindowsBasePage
    {
        public SettingsView()
        {
            this.InitializeComponent();
        }

        public SettingsViewModel SettingsViewModel
        {
            get
            {
                return ViewModel as SettingsViewModel;
            }
        }
    }
}
