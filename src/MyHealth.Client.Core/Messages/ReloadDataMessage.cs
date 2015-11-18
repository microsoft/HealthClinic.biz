using MvvmCross.Plugins.Messenger;
using System;

namespace MyHealth.Client.Core
{
	public class ReloadDataMessage : MvxMessage
	{
		public ReloadDataMessage (object sender) : base(sender)
		{
		}
	}
}

