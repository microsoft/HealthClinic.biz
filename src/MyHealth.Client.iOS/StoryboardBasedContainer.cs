using Cirrious.MvvmCross.Touch.Views;
using Cirrious.MvvmCross.ViewModels;
using System;
using UIKit;

namespace MyHealth.Client.iOS
{
    public class StoryboardBasedContainer : MvxTouchViewsContainer
    {
        protected override IMvxTouchView CreateViewOfType(Type viewType, MvxViewModelRequest request)
        {
            return (IMvxTouchView)UIStoryboard.FromName("Storyboard", null)
                .InstantiateViewController(viewType.Name);
        }
    }
}