using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;
using MyHealth.Client.Core.Model;

namespace MyHealth.Client.Desktop.Controls
{
    /// <summary>
    /// Interaction logic for PatientSummary.xaml
    /// </summary>
    public partial class PatientSummary : UserControl
    {
        public PatientSummary()
        {
            InitializeComponent();
        }

        private void patientInfo_Click(object sender, RoutedEventArgs e)
        {
            Button button = (Button)sender;
            Patient selectedPatient = button.DataContext as Patient;
            if (selectedPatient != null)
            {
                ((MyHealth.Client.Desktop.App)App.Current).AppViewModel.CurrentPatient = selectedPatient;
                NavigationHelper.NavigateToPatientInfo();
            }
        }
    }
}
