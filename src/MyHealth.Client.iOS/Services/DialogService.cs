using MyHealth.Client.Core.Services;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using UIKit;

namespace MyHealth.Client.iOS.Services
{
    class DialogService : IDialogService
    {
        public Task AlertAsync(string message, string title, string buttonText)
        {
            var tcs = new TaskCompletionSource<object>();
            Alert(message, () => tcs.TrySetResult(null), title, buttonText);
            return tcs.Task;
        }

        public void Alert(string message, Action done, string title, string buttonText )
        {
            UIApplication.SharedApplication.InvokeOnMainThread(() =>
            {
                var alert = new UIAlertView(title ?? string.Empty, message, null, buttonText);
                if (done != null)
                {
                    alert.Clicked += (sender, args) => done();
                }
                alert.Show();
            });

        }


    }
}
