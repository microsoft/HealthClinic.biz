using System.Collections.Generic;

namespace MyHealth.Client.W10.UWP
{
    using Cirrious.CrossCore.Platform;
    using Cirrious.MvvmCross.ViewModels;
    using Cirrious.MvvmCross.WindowsUWP.Platform;
    using Windows.UI.Xaml.Controls;
    using Services;
    using Cirrious.CrossCore;
    using Core.Services;

    class Setup : MvxWindowsSetup
    {
        public Setup(Frame rootFrame) : base(rootFrame)
        {
            
        }

        protected override IMvxApplication CreateApp()
        {
            var ignored = Microsoft.DemoTelemetry.TelemetryHelper.SendTelemetryAsync(
                demoName: "HealthClinic.biz",
                tags: new Dictionary<string, string[]> {
                    { "Products", new[] { "Xamarin", "Universal Windows App" } },
                    { "Audience", new[] { "Developers"} }
                }
            );

            Mvx.RegisterType<IDialogService, UserInteractionService>();

            return new Core.App();
        }

        protected override IMvxTrace CreateDebugTrace()
        {
            return new DebugTrace();
        }
    }
}
