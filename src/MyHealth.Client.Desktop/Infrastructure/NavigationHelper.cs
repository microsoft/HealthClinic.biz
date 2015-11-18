using Autofac;
using MyHealth.Client.Desktop.ViewModels;
using MyHealth.Client.Desktop.Views;
using System.Windows.Controls;
using MyHealth.Client.Core.Model;

namespace MyHealth.Client.Desktop
{
    internal static class NavigationHelper
    {
        public static Frame MainFrame { get; set; }


        public static void NavigateToMainPage()
        {
            if (MainFrame.Content is MainView)
            {
                return;
            }

            Navigate<MainView, MainViewModel>();
        }

        public static void NavigateToPatientSelector()
        {
            Navigate<PatientSelectorView, PatientSelectorViewModel>();
        }

        internal static void NavigateToNewAppointment()
        {
            Navigate<NewAppointmentView, NewAppointmentViewModel>();
        }

        public static void NavigateToPatientInfo()
        {
            Navigate<PatientInfoView, PatientInfoViewModel>();
        }


        private static void MainViewNavigated(object sender, System.Windows.Navigation.NavigationEventArgs e)
        {
            MainFrame.Navigated -= MainViewNavigated;
            var viewModel = (AppViewModel)((Page)MainFrame.Content).DataContext;
            viewModel.CurrentViewModel.Update();           
        }

        private static VM Navigate<V, VM>()
            where V : Page
            where VM : BaseViewModel
        {
            var container = ((App)App.Current).Container;
            var view = container.Resolve<V>();
            var viewModel = container.Resolve<VM>();
           
            var appViewModel = ((App)App.Current).AppViewModel;
            appViewModel.CurrentViewModel = viewModel;

            view.DataContext = appViewModel;
            
            MainFrame.Navigate(view);
            viewModel.Load();
            viewModel.Update();

            return viewModel;
        }
    }
}
