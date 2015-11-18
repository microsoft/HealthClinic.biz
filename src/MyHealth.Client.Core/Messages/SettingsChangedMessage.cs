using MvvmCross.Plugins.Messenger;

namespace MyHealth.Client.Core
{
    public class SettingsChangedMessage : MvxMessage
    {
        public SettingsChangedMessage(object sender) : base(sender)
        {
        }
    }
}
