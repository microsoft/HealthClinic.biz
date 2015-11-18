using Android.App;
using Cirrious.MvvmCross.Droid.Support.Fragging.Presenter;
using Cirrious.MvvmCross.ViewModels;
using MyHealth.Client.Droid.Activities;
using MyHealth.Client.Droid.Views;
using MyHealth.Client.Core.ViewModels;

namespace MyHealth.Client.Droid
{
    class CustomPresenter : MvxFragmentsPresenter
    {
        public override void Show(MvxViewModelRequest request)
        {
            if (request.ViewModelType == typeof(SettingsViewModel))
            {
                ((MainActivity)Activity).DrawerLayout.CloseDrawers();
                Activity.StartActivity(typeof(SettingsView));
            }
            else
            {
                base.Show(request);
            }
        }

        public override void ChangePresentation(MvxPresentationHint hint)
        {
            var closeHint = hint as MvxClosePresentationHint;

            if (closeHint != null &&
                closeHint.ViewModelToClose.GetType() == typeof(SettingsViewModel))
            {
                SettingsView.Current.Finish();

            }
            else
            {
                base.ChangePresentation(hint);
            }
        }
    }
}