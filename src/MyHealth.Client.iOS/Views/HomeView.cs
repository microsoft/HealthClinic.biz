using Foundation;
using System;
using System.CodeDom.Compiler;
using UIKit;
using Cirrious.MvvmCross.Touch.Views;
using CoreGraphics;
using MyHealth.Client.Core.ViewModels;
using Cirrious.MvvmCross.Binding.BindingContext;
using MyHealth.Client.Core;
using CoreAnimation;
using MvvmCross.Plugins.Visibility;
using MyHealth.Client.iOS.Converters;
using MyHealth.Client.Core.Model;
using WormHoleSharp;
using MyHealth.Client.Core.Messages;

namespace MyHealth.Client.iOS
{
	partial class HomeView : BaseView
	{
		nfloat _heartWidthConstraintConstant, _heartHeightConstraintConstant;
        Wormhole _wormhole;

		protected HomeViewModel HomeViewModel
		{
			get { return ViewModel as HomeViewModel; }
		}

		public HomeView (IntPtr handle) : base (handle)
		{
            _wormhole = new Wormhole(AppSettings.iOSAppGroupIdentifier, AppSettings.iOSAppGroupDirectory);
		}

		public override void ViewDidLoad ()
		{
			base.ViewDidLoad ();

            _heartWidthConstraintConstant = heartWidthConstraint.Constant;
			_heartHeightConstraintConstant = heartHeightConstraint.Constant;

            HomeViewModel.PropertyChanged += UpdateAppleWatch;
		}

		public override void ViewDidLayoutSubviews ()
		{
			base.ViewDidLayoutSubviews ();

			var paragraphStyle = new NSMutableParagraphStyle { HyphenationFactor = 1 };
			var attributedString = new NSMutableAttributedString(
				HomeViewModel?.FirstAppointment?.Description ?? string.Empty, 
				paragraphStyle: paragraphStyle);

			meetingDescriptionLabel.AttributedText = attributedString;
			meetingDescriptionLabel.SizeToFit ();
		}

		public override void ViewDidAppear (bool animated)
		{
			base.ViewDidAppear (animated);
			AnimateHeart ();
		}

		protected override void SetUpBindings ()
		{
			base.SetUpBindings ();

			var set = this.CreateBindingSet<HomeView, HomeViewModel>(); 

			SetUpPillsBindings (set);

			SetUpAppointmentsBindings (set);

			SetUpTipBindings (set); 

			set.Apply(); 
		}

		protected override void SetUpNavigationBar()
		{
			base.SetUpNavigationBar ();

			var navigationController = this.ParentViewController.NavigationController;

			if (navigationController == null)
				return;

			navigationController.NavigationBar.BarStyle = UIBarStyle.Black;
			navigationController.NavigationBar.Translucent = false;
			navigationController.NavigationBar.BarTintColor = Colors.Accent;
			navigationController.NavigationBar.TintColor = UIColor.White;
			navigationController.NavigationBar.SetUpShadow (0.45f);
            UINavigationBar.Appearance.SetTitleTextAttributes(new UITextAttributes { Font = UIFont.FromName("Avenir-Book", 20) });
		}

		protected override void SetUpUI ()
		{
			base.SetUpUI ();

			nextPillsView.SetUpShadow();
			meetingDetailsView.SetUpShadow();
			secondMeetingQuickView.SetUpShadow();
			dailyHealthTipsView.SetUpShadow();

			CreateRoundCornersOnDoctorPicture ();
		}

        void UpdateAppleWatch(object sender, System.ComponentModel.PropertyChangedEventArgs e)
        {
            if (e.PropertyName != nameof(HomeViewModel.FirstMedicineCountDown) ||
			   HomeViewModel.FirstMedicine == null)
                return;

            _wormhole.PassMessage(NextPillsMessage.MessageType,
                new NextPillsMessage 
                { 
                    Name = new MedicineToNameWithDosisConverter()
                        .Convert(HomeViewModel.FirstMedicine.Medicine, null, null, null)
                        .ToString(), 
                    LeftTime = new TimeOfDayToStringConverter()
                        .Convert(HomeViewModel.FirstMedicine.NextDoseTime, null, null, null)
                        .ToString(), 
                    Percentage = HomeViewModel.FirstMedicineCountDown 
                });
        }

		void SetUpTipBindings (MvxFluentBindingDescriptionSet<HomeView, HomeViewModel> set)
		{
			set.Bind (dailyTipTitleLabel).To (vm => vm.Tip.Title);
			set.Bind (dailyTipLabel).To (vm => vm.Tip.Content);
		}

		void SetUpAppointmentsBindings (MvxFluentBindingDescriptionSet<HomeView, HomeViewModel> set)
		{
			set.Bind (meetingDetailsView).For (view => view.Frame).To (vm => vm.FirstAppointment).WithConversion (new NullToFrameHeightZeroConverter (), meetingDetailsView.Frame);
			set.Bind (doctorPictureImageView).To (vm => vm.FirstAppointment.Doctor.Picture).WithConversion ("InMemoryImage");
			set.Bind (doctorNameLabel).To (vm => vm.FirstAppointment.Doctor.Name);
			set.Bind (doctorJobTitleLabel).To (vm => vm.FirstAppointment.Speciality).WithConversion (new SpecialityIdToStringConverter ());
            set.Bind (urgentMeetingLabel).For (label => label.Hidden).To (vm => vm.FirstAppointment.IsUrgent).WithConversion (new NotConverter ()).WithFallback(true);
			set.Bind (meetingDateLabel).To (vm => vm.FirstAppointment.DateTime).WithConversion (new DateTimeToMonthDayYearConverter ());
			set.Bind (meetingHourLabel).To (vm => vm.FirstAppointment.DateTime).WithConversion (new DateTimeToHourMinutesConverter ());
			set.Bind (meetingHourIndicatorLabel).To (vm => vm.FirstAppointment.DateTime).WithConversion (new DateTimeToHourIndicatorConverter ());
			set.Bind (meetingRoomLabel).To (vm => vm.FirstAppointment.RoomNumber);
			set.Bind (secondMeetingQuickView).For (view => view.Frame).To (vm => vm.SecondAppointment).WithConversion (new NullToFrameHeightZeroConverter (), meetingDetailsView.Frame);
			set.Bind (doctor2PictureImageView).To (vm => vm.SecondAppointment.Doctor.Picture).WithConversion ("InMemoryImage");
			set.Bind (doctor2NameLabel).To (vm => vm.SecondAppointment.Doctor.Name);
			set.Bind (doctor2JobTitleLabel).To (vm => vm.SecondAppointment.Speciality).WithConversion (new SpecialityIdToStringConverter ());
			set.Bind (meeting2DateLabel).To (vm => vm.SecondAppointment.DateTime).WithConversion (new DateTimeToMonthDayYearConverter ());
			set.Bind (meeting2HourLabel).To (vm => vm.SecondAppointment.DateTime).WithConversion (new DateTimeToHourMinutesConverter ());
		}

		void SetUpPillsBindings (MvxFluentBindingDescriptionSet<HomeView, HomeViewModel> set)
		{
			set.Bind (firstMedicineCountDownImage).To (vm => vm.FirstMedicineCountDown).WithConversion (new CountDownValueToImageSourceConverter ());
			set.Bind (firstMedicineCountDownImage).For (c => c.Hidden).To (vm => vm.FirstMedicine).WithConversion (new MvxVisibilityValueConverter ());
			set.Bind (firstMedicineCountDownImage).For (c => c.Alpha).To (vm => vm.FirstMedicineSelected).WithConversion (new BoolToAlphaNativeConverter ());
			set.Bind (firstMedicineButton).For ("Title").To (vm => vm.FirstMedicine.Medicine).WithConversion (new MedicineToNameWithDosisConverter ());
			set.Bind (firstMedicineButton).To (vm => vm.ChangeToFirstMedicineCommand);
			set.Bind (firstMedicineButton).For (c => c.Hidden).To (vm => vm.FirstMedicine).WithConversion (new MvxVisibilityValueConverter ());
			set.Bind (firstMedicineButton).For (c => c.Alpha).To (vm => vm.FirstMedicineSelected).WithConversion (new BoolToAlphaNativeConverter ());
			set.Bind (secondMedicineCountDownImage).To (vm => vm.SecondMedicineCountDown).WithConversion (new CountDownValueToImageSourceConverter ());
			set.Bind (secondMedicineCountDownImage).For (c => c.Hidden).To (vm => vm.SecondMedicine).WithConversion (new MvxVisibilityValueConverter ());
			set.Bind (secondMedicineCountDownImage).For (c => c.Alpha).To (vm => vm.FirstMedicineSelected).WithConversion (new BoolToAlphaNativeConverter (), true);
			set.Bind (secondMedicineButton).For ("Title").To (vm => vm.SecondMedicine.Medicine).WithConversion (new MedicineToNameWithDosisConverter ());
			set.Bind (secondMedicineButton).To (vm => vm.ChangeToSecondMedicineCommand);
			set.Bind (secondMedicineButton).For (c => c.Hidden).To (vm => vm.SecondMedicine).WithConversion (new MvxVisibilityValueConverter ());
			set.Bind (secondMedicineButton).For (c => c.Alpha).To (vm => vm.FirstMedicineSelected).WithConversion (new BoolToAlphaNativeConverter (), true);
			set.Bind (currentMedicineLabel).To (vm => vm.CurrentMedicine.Medicine).WithConversion (new MedicineToNameWithDosisConverter ());
			set.Bind (currentMedicineLeftTimeLabel).To (vm => vm.CurrentMedicine.NextDoseTime).WithConversion (new TimeOfDayToStringConverter ());
			set.Bind (countDownImageView).To (vm => vm.CountDown).WithConversion (new CountDownValueToImageSourceConverter ());
			set.Bind (currentMedicineBreakfastCountLabel).To (vm => vm.CurrentMedicine.BreakfastDoses);
			set.Bind (currentMedicineLunchCountLabel).To (vm => vm.CurrentMedicine.LunchDoses);
			set.Bind (currentMedicineDinnerCountLabel).To (vm => vm.CurrentMedicine.DinnerDoses);
		}

		void AnimateHeart ()
		{
			heartWidthConstraint.Constant = _heartWidthConstraintConstant;
			heartHeightConstraint.Constant = _heartHeightConstraintConstant;

            this.View.LayoutIfNeeded();

			var gap = 5;

			heartWidthConstraint.Constant += gap;
			heartHeightConstraint.Constant += gap;
			heartImageView.SetNeedsUpdateConstraints ();

            UIView.Animate(0.5, 0.5,
                UIViewAnimationOptions.Autoreverse |
                UIViewAnimationOptions.Repeat |
                UIViewAnimationOptions.CurveEaseOut,
                () => this.View.LayoutIfNeeded(),
                null);
		}

		void CreateRoundCornersOnDoctorPicture ()
		{
			pictureFrameView.Layer.CornerRadius = 24;
			doctorPictureImageView.Layer.CornerRadius = 23;
			doctor2PictureImageView.Layer.CornerRadius = 22;
		}
	}
}
