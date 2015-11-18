using Cirrious.CrossCore.IoC;
using MyHealth.Client.Core.ServiceAgents;
using Cirrious.CrossCore;

namespace MyHealth.Client.Core
{
    public class App : Cirrious.MvvmCross.ViewModels.MvxApplication
    {
        public override void Initialize()
        {
			Mvx.ConstructAndRegisterSingleton<IMyHealthClient, MyHealthClient> ();
            Mvx.RegisterType<ICurrentUserService, CurrentUserService>();

            CreatableTypes()
                .EndingWith("Service")
                .AsInterfaces()
                .RegisterAsLazySingleton();

            RegisterAppStart(new AppStart());
        }
    }
}