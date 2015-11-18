using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MyHealth.Client.Core.Services
{

    public interface IDialogService
    {
        Task AlertAsync(string message, string title, string buttonText);
    }
}
