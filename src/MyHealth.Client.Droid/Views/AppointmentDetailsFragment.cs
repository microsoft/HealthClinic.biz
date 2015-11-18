using Android.OS;
using Android.Views;
using Cirrious.MvvmCross.Droid.Support.Fragging.Fragments;
using MyHealth.Client.Core.ViewModels;
using Cirrious.MvvmCross.Binding.Droid.BindingContext;
using Cirrious.MvvmCross.Droid.Support.Fragging;
using Android.Runtime;
using MyHealth.Client.Droid.Extensions;

namespace MyHealth.Client.Droid.Views
{
    [MvxOwnedViewModelFragment]
    [Register("myhealth.client.droid.views.AppointmentDetailsFragment")]
    public class AppointmentDetailsFragment : MvxFragment<AppointmentDetailsViewModel>
    {
        public override View OnCreateView(LayoutInflater inflater, ViewGroup container, Bundle savedInstanceState)
        {
            var ignored = base.OnCreateView(inflater, container, savedInstanceState);
            (Activity as MainActivity)?.SetCustomTitle("Appointment");
            return this.BindingInflate(Resource.Layout.AppointmentDetailsView, null);
        }
    }
}