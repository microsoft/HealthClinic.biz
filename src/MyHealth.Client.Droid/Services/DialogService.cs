using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

using Android.App;
using Android.Content;
using Android.OS;
using Android.Runtime;
using Android.Views;
using Android.Widget;
using System.Threading.Tasks;
using Cirrious.CrossCore.Droid.Platform;
using Cirrious.CrossCore;
using MyHealth.Client.Core.Services;

namespace MyHealth.Client.Droid.Services
{
    class DialogService : IDialogService
    {
        protected Activity CurrentActivity
        {
            get { return Mvx.Resolve<IMvxAndroidCurrentTopActivity>().Activity; }
        }


        public Task AlertAsync(string message, string title, string buttonText)
        {
            var tcs = new TaskCompletionSource<object>();
            Alert(message, () => tcs.SetResult(null), title, buttonText);
            return tcs.Task;
        }

        public void Alert(string message, Action done, string title, string okButton)
        {
            Application.SynchronizationContext.Post(ignored =>
            {
                if (CurrentActivity == null) return;
                new AlertDialog.Builder(CurrentActivity)
                    .SetMessage(message)
                        .SetTitle(title)
                        .SetPositiveButton(okButton, delegate
                        {
                            if (done != null)
                                done();
                        })
                        .Show();
            }, null);
        }
    }
}