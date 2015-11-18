using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
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

namespace MyHealth.Client.HealthCloudAPI
{
    /// <summary>
    /// Interaction logic for Selection.xaml
    /// </summary>
    public partial class Selection : Page, INotifyPropertyChanged
    {
        private string accessToken;


        private DelegateCommand navigateCommand;

        public event PropertyChangedEventHandler PropertyChanged;

        public DelegateCommand NavigateCommand
        {
            get { return navigateCommand; }
            set
            {
                navigateCommand = value;
                var handler = PropertyChanged;
                if (handler != null)
                {
                    handler(this, new PropertyChangedEventArgs(nameof(NavigateCommand)));
                }
            }
        }

        public Selection(string accessToken)
        {
            InitializeComponent();
            
            this.accessToken = accessToken;
            NavigateCommand = new DelegateCommand(() =>
            {
                NavigationService.Navigate(new Retriever(accessToken, StartDate.SelectedDate.Value, EndDate.SelectedDate.Value));
            },
            () => { return StartDate.SelectedDate.HasValue && EndDate.SelectedDate.HasValue; });
        }
    }


    public class DelegateCommand : ICommand
    {
        public event EventHandler CanExecuteChanged
        {
            add { CommandManager.RequerySuggested += value; }
            remove { CommandManager.RequerySuggested -= value; }
        }

        Action execute;
        Func<bool> canExecute;

        public DelegateCommand(Action execute, Func<bool> canExecute)
        {
            this.execute = execute;
            this.canExecute = canExecute;
        }

        public bool CanExecute(object parameter)
        {
            if(canExecute != null)
            {
                return canExecute();
            }
            return false;
        }

        public void Execute(object parameter)
        {
            if(execute != null)
            {
                execute();
            }
        }
    }
}
