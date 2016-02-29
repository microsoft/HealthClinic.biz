using Microsoft.IdentityModel.Clients.ActiveDirectory;
using System.Threading.Tasks;
using System.Linq;
using MyHealth.Client.Core.Helpers;
using MvvmCross.Plugins.Messenger;
using Cirrious.CrossCore;
using MyHealth.Client.Core.Messages;

namespace MyHealth.Client.Core.ServiceAgents
{
    public class AuthenticationService
    {
        private PatientsService _patientService = null;
        IMvxMessenger _messenger = null;
        private const int GetOnlyOne = 1;

        public AuthenticationService(PatientsService patientService, IMvxMessenger messenger)
        {
            _patientService = patientService;
            _messenger = messenger;
        }

        public async Task SignInAsync(IPlatformParameters context)
        {
            if (Settings.SecurityEnabled)
            {
                await MicrosoftGraphService.SignInAsync(context);

                Model.Patient currentPatient = await GetPatientInfo();
                if (currentPatient != null)
                {
                    AppSettings.CurrentPatientId = currentPatient.PatientId;
                    MicrosoftGraphService.LoggedUserPhoto = currentPatient.Picture;
                }

                PublishChanges();
                LoadUserPhoto();
            }
        }

        private async void LoadUserPhoto()
        {
            MicrosoftGraphService.LoggedUserPhoto = await MicrosoftGraphService.GetUserPhotoAsync();
            PublishChanges();
        }

        private void PublishChanges()
        {
            _messenger.Publish(new LoggedUserInfoChangedMessage(this,
                    user: MicrosoftGraphService.LoggedUser,
                    email: MicrosoftGraphService.LoggedUserEmail,
                    photo: MicrosoftGraphService.LoggedUserPhoto));
        }

        private async Task<Model.Patient> GetPatientInfo()
        {
            return (await _patientService
                        .GetByNameAsync(MicrosoftGraphService.LoggedUser, GetOnlyOne))
                            .FirstOrDefault();
        }
    }

}
