using MvvmCross.Plugins.Messenger;

namespace MyHealth.Client.Core.Messages
{
    public class LoggedUserInfoChangedMessage : MvxMessage
    {
        private readonly string _User;
        private readonly string _Email;
        private readonly byte[] _Photo;

        public string User { get { return _User; } }
        public string Email { get { return _Email; } }
        public byte[] Photo { get { return _Photo; } }

        public LoggedUserInfoChangedMessage(object sender, string user, string email, byte[] photo) 
            : base(sender)
        {
            _User = user;
            _Email = email;
            _Photo = photo;
        }
    }
}


