using Android.Content;
using AndroidHUD;

namespace MyHealth.Client.Droid.Views
{
    public class BindableProgress
    {
        private readonly Context _context;

        public BindableProgress(Context context)
        {
            _context = context;
        }

        public bool Visible
        {
            get
            {
                if (AndHUD.Shared.CurrentDialog == null)
                {
                    return false;
                }

                return AndHUD.Shared.CurrentDialog.IsShowing;
            }

            set
            {
                if (value == Visible)
                    return;

                if (value)
                {
                    AndHUD.Shared.Show(this._context);
                }
                else
                {
                    AndHUD.Shared.Dismiss(this._context);
                }
            }
        }
    }
}