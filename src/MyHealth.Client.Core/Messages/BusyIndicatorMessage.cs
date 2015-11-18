using MvvmCross.Plugins.Messenger;

namespace MyHealth.Client.Core
{
    public class BusyIndicatorMessage : MvxMessage
    {
        private readonly bool _isBusy;

        public bool IsBusy { get { return _isBusy; } }

        public BusyIndicatorMessage(object sender, bool isBusy) : base(sender)
        {
            _isBusy = isBusy;
        }
    }
}
