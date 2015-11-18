using MyHealth.Client.Desktop.ViewModels;
using System.Windows;
using System.Windows.Controls;

namespace MyHealth.Client.Desktop.Views
{
    /// <summary>
    /// Interaction logic for MainView.xaml
    /// </summary>
    public partial class PatientSelectorView : Page
    {
        public PatientSelectorView()
        {
            InitializeComponent();
        }

        private void TextBox_TextChanged(object sender, TextChangedEventArgs e)
        {
            AppViewModel appVM = DataContext as AppViewModel;
            PatientSelectorViewModel vm = appVM.CurrentViewModel as PatientSelectorViewModel;
            vm.Filter(((TextBox)sender).Text);
        }

        private void Page_Loaded(object sender, RoutedEventArgs e)
        {
            SearchText.Focus();
        }
    }
}
