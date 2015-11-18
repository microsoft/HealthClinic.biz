using Android.OS;
using Android.Runtime;
using Android.Views;
using MyHealth.Client.Core.ViewModels;
using Cirrious.MvvmCross.Binding.Droid.BindingContext;
using Cirrious.MvvmCross.Droid.Support.Fragging;
using Cirrious.MvvmCross.Droid.Support.Fragging.Fragments;
using MyHealth.Client.Droid.Extensions;

namespace MyHealth.Client.Droid.Views
{
    [MvxOwnedViewModelFragment]
    [Register("myhealth.client.droid.views.AppointmentsFragment")]
    public class AppointmentsFragment : MvxFragment<AppointmentsViewModel>
    {
        bool loaded;

        public override View OnCreateView(LayoutInflater inflater, ViewGroup container, Bundle savedInstanceState)
        {
            var ignored = base.OnCreateView(inflater, container, savedInstanceState);
            (Activity as MainActivity)?.SetCustomTitle("Appointments");
            loaded = true;
            return this.BindingInflate(Resource.Layout.AppointmentsView, null);
        }
        
        public override void OnResume()
        {
            if (!loaded) ViewModel.Start();
            base.OnResume();
        }

        public override void OnStop()
        {
            loaded = false;
            base.OnStop();
        }
    }
}