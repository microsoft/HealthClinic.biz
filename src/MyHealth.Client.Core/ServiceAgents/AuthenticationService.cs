using System.Linq;
using System.Threading.Tasks;
using Cirrious.CrossCore;
using Microsoft.IdentityModel.Clients.ActiveDirectory;
using MvvmCross.Plugins.Messenger;
using MyHealth.Client.Core.Helpers;
using MyHealth.Client.Core.Messages;

namespace MyHealth.Client.Core.ServiceAgents
{
    public class AuthenticationService
    {
        private readonly PatientsService _patientService;
		private readonly IMvxMessenger _messenger;

        public AuthenticationService(PatientsService patientService, IMvxMessenger messenger)
        {
            _patientService = patientService;
            _messenger = messenger;
        }

        public async Task SignInAsync(IPlatformParameters context)
        {
            await MicrosoftGraphService.SignInAsync(context);
			var currentPatient = await GetPatientInfoAsync();
            
			if (currentPatient != null)
            {
                AppSettings.CurrentPatientId = currentPatient.PatientId;
                // We first get patient's picture from backend
				MicrosoftGraphService.LoggedUserPhoto = currentPatient.Picture;
				// And, then, try to get a newer one from Microsoft Graph
				MicrosoftGraphService.LoggedUserPhoto = await MicrosoftGraphService.GetUserPhotoAsync();
            }

			_messenger.Publish(new LoggedUserInfoChangedMessage(this));
        }

		public void SignOut ()
		{
			MicrosoftGraphService.SignOut ();
		}

        private async Task<Model.Patient> GetPatientInfoAsync()
        {
			var patientsMatchingName = await _patientService
				.GetByNameAsync (MicrosoftGraphService.LoggedUser, 1);
			var patient = patientsMatchingName.FirstOrDefault();

			return patient;
        }
    }

}
