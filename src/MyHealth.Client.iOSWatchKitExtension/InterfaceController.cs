using System;

using WatchKit;
using Foundation;
using WormHoleSharp;
using MyHealth.Client.Core.Messages;
using MyHealth.Client.Core;
using UIKit;

namespace MyHealth.Client.iOSWatchKitExtension
{
    public partial class InterfaceController : WKInterfaceController
    {
        Wormhole _wormHole;

        public InterfaceController(IntPtr handle)
            : base(handle)
        {
        }

        public override void Awake(NSObject context)
        {
            base.Awake(context);

            _wormHole = new Wormhole (AppSettings.iOSAppGroupIdentifier, AppSettings.iOSAppGroupDirectory);
            _wormHole.ListenForMessage<NextPillsMessage> (NextPillsMessage.MessageType, UpdateUI);

            var waitingAttrString = new NSAttributedString("Please, open Patients on your iPhone", 
                new UIStringAttributes { Font = UIFont.SystemFontOfSize(14, UIFontWeight.Light) });
            waitingLabel.SetText(waitingAttrString);

            var nextInAttrString = new NSAttributedString("Next", 
                new UIStringAttributes { Font = UIFont.SystemFontOfSize(14, UIFontWeight.Medium) });
            nextInLabel.SetText(nextInAttrString);

            ToggleUI(true);
        }

        public override void WillActivate()
        {
            nameLabel.SetText("Run iPhone app...");
            leftTimeLabel.SetText("-");
        }

        void ToggleUI(bool hideUI = false)
        {
            waitingLabel.SetHidden(!hideUI);
            nameLabel.SetHidden(hideUI);
            nextInGroup.SetHidden(hideUI);
            countdownGroup.SetHidden(hideUI);
        }

        void UpdateUI(NextPillsMessage message)
        {
            ToggleUI();

            if (message.Name != null)
            {
                var attrString = new NSAttributedString (message.Name, 
                    new UIStringAttributes { Font = UIFont.SystemFontOfSize (20, UIFontWeight.Light)});
                nameLabel.SetText(attrString);
            }

            if (message.LeftTime != null)
            {
                var attrString = new NSAttributedString(message.LeftTime, 
                    new UIStringAttributes { Font = UIFont.SystemFontOfSize(14, UIFontWeight.Medium) });
                leftTimeLabel.SetText(attrString);
            }

            int percentage;

            if (message.Percentage < 0 || message.Percentage > 99)
                percentage = 0;
            else
                percentage = message.Percentage;

            countdownGroup.SetBackgroundImage("countdownWatch");
            countdownGroup.StartAnimating(new NSRange(0, percentage), 1, 1);
        }
    }
}

