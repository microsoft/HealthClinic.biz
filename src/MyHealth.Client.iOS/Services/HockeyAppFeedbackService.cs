using System;
using MyHealth.Client.Core.Services;
using HockeyApp;

namespace MyHealth.Client.iOS.Services
{
    public class HockeyAppFeedbackService : IHockeyAppFeedbackService
    {
        public HockeyAppFeedbackService()
        {
        }

        #region IHockeyAppFeedbackService implementation

        public void LaunchHockeyAppFeedback()
        {
            BITHockeyManager.SharedHockeyManager.FeedbackManager.ShowFeedbackComposeView();
        }

        #endregion
    }
}

