using Android.OS;
using Android.Runtime;
using Android.Views;
using MyHealth.Client.Core.ViewModels;
using Cirrious.MvvmCross.Droid.Support.Fragging.Fragments;
using Cirrious.MvvmCross.Droid.Support.Fragging;
using Cirrious.MvvmCross.Binding.Droid.BindingContext;
using Android.Widget;
using MyHealth.Client.Droid.Extensions;

namespace MyHealth.Client.Droid.Views
{
    [MvxOwnedViewModelFragment]
    [Register("myhealth.client.droid.views.UserFragment")]
    public class UserFragment : MvxFragment<UserViewModel>
    {
        public override View OnCreateView(LayoutInflater inflater, ViewGroup container, Bundle savedInstanceState)
        {
            var ignored = base.OnCreateView(inflater, container, savedInstanceState);
            (Activity as MainActivity)?.SetCustomTitle("User");
            return this.BindingInflate(Resource.Layout.UserView, null);
        }

        public override void OnViewCreated(View view, Bundle savedInstanceState)
        {
            var userImage = (LinearLayout)view.FindViewById(Resource.Id.userImageLinearLayout);
            userImage.BringToFront();

            base.OnViewCreated(view, savedInstanceState);
        }
    }
}