using System;
using MBProgressHUD;
using UIKit;

namespace MyHealth.Client.iOS
{
	public class BindableProgress
	{
		private MTMBProgressHUD _progress;
		private UIView _parent;

		public BindableProgress(UIView parent)
		{
			_parent = parent;
		}

		public bool Visible
		{
			get { return _progress != null; }
			set
			{
				if (Visible == value)
					return;

				if (value)
				{
					_progress = new MTMBProgressHUD(_parent)
					{
						LabelText = "Please, wait...",
						RemoveFromSuperViewOnHide = true
					};
					_parent.AddSubview(_progress);
					_progress.Show(true);
				}
				else
				{
					_progress.Hide(true);
					_progress = null;
				}
			}
		}
	}
}

