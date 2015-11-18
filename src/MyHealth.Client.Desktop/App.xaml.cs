using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Linq;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Navigation;
using Autofac;
using MyHealth.Client.Desktop.Infrastructure;
using MyHealth.Client.Desktop.ViewModels;

namespace MyHealth.Client.Desktop
{
    /// <summary>
    /// Interaction logic for App.xaml
    /// </summary>
    public partial class App : Application
    {
        private Lazy<IContainer> container = new Lazy<IContainer>(IocContainer.BuildContainer);

        public IContainer Container
        {
            get
            {
                return container.Value;
            }
        }

        private Lazy<AppViewModel> _appViewModel = new Lazy<AppViewModel>();
        public AppViewModel AppViewModel
        {
            get { return _appViewModel.Value; }
        }

    }
}
