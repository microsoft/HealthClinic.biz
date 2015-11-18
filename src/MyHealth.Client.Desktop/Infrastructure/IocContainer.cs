using Autofac;
using MyHealth.Client.Core.ServiceAgents;
using MyHealth.Client.Desktop.ViewModels;
using MyHealth.Client.Desktop.Views;
using MyHealth.Client.Desktop.Controls;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MyHealth.Client.Desktop.Infrastructure
{
    class IocContainer
    {
        public static IContainer BuildContainer()
        {
            var builder = new ContainerBuilder();

            builder.RegisterType<MainView>();
            builder.RegisterType<MainViewModel>();
            builder.RegisterType<PatientSelectorView>();
            builder.RegisterType<PatientSelectorViewModel>();
            builder.RegisterType<NewAppointmentView>();
            builder.RegisterType<NewAppointmentViewModel>();
            builder.RegisterType<Menu>();
            builder.RegisterType<HeaderViewModel>();            
            builder.RegisterType<PatientInfoView>();
            builder.RegisterType<PatientInfoViewModel>();
            builder.RegisterType<AppViewModel>();
            builder.RegisterType<MyHealthClient>().As<IMyHealthClient>();

            return builder.Build();
        }
    }
}
