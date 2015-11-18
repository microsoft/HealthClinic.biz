using Autofac;
using MyHealth.Client.Core.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MyHealth.Client.Desktop.ViewModels
{
    public class AppViewModel : ObservableViewModel
    {
        public AppViewModel()
        {
            var container = ((App)App.Current).Container;
            this.CurrentHeaderViewModel = container.Resolve<HeaderViewModel>();
            CurrentPatient = null;
        }

        public BaseViewModel CurrentViewModel { get; set; }
        
        public HeaderViewModel CurrentHeaderViewModel { get; set; }
        
        public Patient CurrentPatient { get; set; }

        public List<Patient> Patients { get; set; }  //cached list of patients
    }
}
