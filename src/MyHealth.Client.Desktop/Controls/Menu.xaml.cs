using MyHealth.Client.Desktop.ViewModels;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Input;

namespace MyHealth.Client.Desktop.Controls
{
    public partial class Menu : UserControl
    {
        public Menu()
        {
            InitializeComponent();
        }
        public Menu(HeaderViewModel viewModel)            
        {
            this.DataContext = viewModel;
            InitializeComponent();            
        }                

        private void NewAppointment_Click(object sender, RoutedEventArgs e)
        {
            NavigationHelper.NavigateToPatientSelector();
        }
    }
}
