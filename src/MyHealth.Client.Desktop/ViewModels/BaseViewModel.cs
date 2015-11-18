using MyHealth.Client.Desktop.Infrastructure;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Text;
using System.Threading.Tasks;

namespace MyHealth.Client.Desktop.ViewModels
{
    public abstract class BaseViewModel : ObservableViewModel
    {

        public abstract void Load();

        public abstract void Update();

        protected RelayCommand actionCommand = null;
        protected RelayCommand navCommand = null;

        protected virtual bool CanExecuteAction()
        {
            return true;
        }

        public abstract RelayCommand ActionCommand { get; }

        public abstract RelayCommand NavigateBackCommand { get; }     

        public HeaderViewModel Header
        {
            get
            {
                return ((App)App.Current).AppViewModel.CurrentHeaderViewModel;
            }
        }

        protected abstract void SetHeaderValues(HeaderViewModel headerViewModel);

    }
    public abstract class ObservableViewModel : INotifyPropertyChanged
    {
        public event PropertyChangedEventHandler PropertyChanged;

        protected void RaisePropertyChanged([CallerMemberName] string propertyName = null)
        {
            var handler = PropertyChanged;
            if (handler != null)
            {
                handler(this, new PropertyChangedEventArgs(propertyName));
            }
        }
    }
}
