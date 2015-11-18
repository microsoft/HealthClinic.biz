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
            Mvx.RegisterType<IDialogService, UserInteractionService>();

            return new Core.App();
        }

        protected override IMvxTrace CreateDebugTrace()
        {
            return new DebugTrace();
        }
    }
}
