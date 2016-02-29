using MyHealth.Client.Core.Model;
using System.Threading.Tasks;

namespace MyHealth.Client.Core.ServiceAgents
{
    class CurrentUserService : ICurrentUserService
    {
        private readonly IMyHealthClient _client;

        private Patient _current;

        public CurrentUserService(IMyHealthClient client)
        {
            _client = client;
            _current = null;
        }

        public async Task<Patient> GetCurrentAsync()
        {
            if (_current == null)
            {
                _current = await _client.PatientsService.GetAsync(AppSettings.CurrentPatientId);
            }
            return _current;
        }
    }
}
