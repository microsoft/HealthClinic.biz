using Android.OS;
using Android.Runtime;
using Android.Views;
using MyHealth.Client.Core.ViewModels;
using Cirrious.MvvmCross.Binding.Droid.BindingContext;
using Cirrious.MvvmCross.Droid.Support.Fragging;
using Cirrious.MvvmCross.Droid.Support.Fragging.Fragments;
using Android.Widget;
using Android.Graphics;
using Android.Views.Animations;
using System.ComponentModel;
using MyHealth.Client.Droid.Extensions;

namespace MyHealth.Client.Droid.Views
{
    [MvxOwnedViewModelFragment]
    [Register("myhealth.client.droid.views.HomeFragment")]
    public class HomeFragment : MvxFragment<HomeViewModel>
    {
        public override View OnCreateView(LayoutInflater inflater, ViewGroup container, Bundle savedInstanceState)
        {
            var ignored = base.OnCreateView(inflater, container, savedInstanceState);
            return this.BindingInflate(Resource.Layout.HomeView, null);
        }

        public override void OnStop()
        {
            base.OnStop();
            StopPillButtonBindings();
            StopHeartAnimation(View);  
        }

        public override void OnStart()
        {
            base.OnStart();
            StartHeartAnimation(View);
        }

        private void StopPillButtonBindings()
        {
            this.ViewModel.PropertyChanged -= OnViewModelPropertyChanged;
        }

        public override void OnViewCreated(View view, Bundle savedInstanceState)
        {
            base.OnViewCreated(view, savedInstanceState);
            (Activity as MainActivity)?.SetCustomTitle("Home");
            SetupUI();
           
            StartPillButtonBindings();
        }

        private void StartPillButtonBindings()
        {
            RefreshMedicineButtonStatus(firstMedicineSelected: ViewModel.FirstMedicineSelected);
            this.ViewModel.PropertyChanged += OnViewModelPropertyChanged;
        }

        private void StopHeartAnimation(View view)
        {
            var heart = view.FindViewById<ImageView>(Resource.Id.heart);
            heart.Animation = null;
        }

        private void StartHeartAnimation(View view)
        {
            var heart = view.FindViewById<ImageView>(Resource.Id.heart);
            var anim = new ScaleAnimation(fromX: 1,
                                            toX: 0.8f,
                                            fromY: 1,
                                            toY: 0.8f,
                                            pivotXType: Dimension.RelativeToSelf,
                                            pivotXValue: 0.5f,
                                            pivotYType: Dimension.RelativeToSelf,
                                            pivotYValue: 0.5f);

            anim.RepeatMode = RepeatMode.Reverse;
            anim.RepeatCount = Animation.Infinite;
            anim.Interpolator = new AccelerateDecelerateInterpolator();
            anim.Duration = 1000;
            heart.Animation = anim;
        }

        private void SetupUI()
        {
            var dailyTipsHeaderTextview = View.FindViewById<TextView>(Resource.Id.dailyTipsHeaderTextView);
            var font = Typeface.CreateFromAsset(Activity.BaseContext.Assets, "fonts/Raleway 700.ttf");
            dailyTipsHeaderTextview.Typeface = font;
        }

        private void OnViewModelPropertyChanged(object sender, PropertyChangedEventArgs e)
        {
            if (e.PropertyName == "FirstMedicineSelected")
            {
                RefreshMedicineButtonStatus(ViewModel.FirstMedicineSelected);
            }
        }

        private void RefreshMedicineButtonStatus(bool firstMedicineSelected)
        {
            var selectedColor = Color.Argb(0xff, 0x00, 0xd8, 0xcc);
            var unselectedColor = Color.Argb(0xff, 0xc0, 0xc0, 0xc0);
            var btn1 = View.FindViewById<Button>(Resource.Id.medicine1Button);
            var btn2 = View.FindViewById<Button>(Resource.Id.medicine2Button);
            btn1.SetTextColor(firstMedicineSelected ? selectedColor : unselectedColor);
            btn2.SetTextColor(firstMedicineSelected ? unselectedColor : selectedColor);
        }
    }
}