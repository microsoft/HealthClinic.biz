using MvvmCross.Plugins.Messenger;

namespace MyHealth.Client.Core.Messages
{
    public class LoggedUserInfoChangedMessage : MvxMessage
    {
        public LoggedUserInfoChangedMessage(object sender) 
            : base(sender)
        {
        }
    }
}


