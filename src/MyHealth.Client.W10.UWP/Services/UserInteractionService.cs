using MyHealth.Client.Core.Services;
using System;
using System.Threading.Tasks;
using Windows.UI.Popups;

namespace MyHealth.Client.W10.UWP.Services
{
    class UserInteractionService : IDialogService
    {
        public async Task AlertAsync(string message, string title = "", string okButton = "OK")
        {
            var messageDialog = new MessageDialog(message, title);
            messageDialog.Commands.Add(new UICommand(okButton, (x) => { }));
            await messageDialog.ShowAsync();
        }
    }
}
