using Android.OS;
using Android.Runtime;
using Android.Views;
using Cirrious.MvvmCross.Droid.Support.Fragging;
using MyHealth.Client.Core.ViewModels;
using Cirrious.MvvmCross.Droid.Support.Fragging.Fragments;
using Cirrious.MvvmCross.Binding.Droid.BindingContext;
using MyHealth.Client.Droid.Extensions;

namespace MyHealth.Client.Droid.Views
{
    [MvxOwnedViewModelFragment]
    [Register("myhealth.client.droid.views.TreatmentFragment")]
    public class TreatmentFragment : MvxFragment<TreatmentViewModel>
    {
        public override View OnCreateView(LayoutInflater inflater, ViewGroup container, Bundle savedInstanceState)
        {
            var ignored = base.OnCreateView(inflater, container, savedInstanceState);
            (Activity as MainActivity)?.SetCustomTitle("Treatments");
            return this.BindingInflate(Resource.Layout.TreatmentView, null);
        }
    }
}