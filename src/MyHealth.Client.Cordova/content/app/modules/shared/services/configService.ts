module MyHealth.Client.Cordova.Application.Shared {

    var app = getModule();

    export class ConfigService {

        public Azure = {
            API_URL: 'https://YOUR_MOBILEAPP.azurewebsites.net',
            API_ALT_URL: 'https://YOUR_GATEWAY.azurewebsites.net'
        };

        public General = {
            DEFAULT_DOCTOR_GUID: 'D0ACA653-2AB1-4160-87FC-21E72FD2ED44',
            REQUIRE_LOGIN: false
        };

        public AppInsights = {
            INSTRUMENTATION_KEY: 'YOUR_KEY'
        };

        public BingMaps = {
            API_KEY: 'YOUR_KEY'
        };

        public Update = {
            AUTO: false
        };

        private getFromLocalStorage() {
            var ConfigUpdateAUTOStored = localStorage.getItem('Config_Update_AUTO');
            if (ConfigUpdateAUTOStored) {
                this.Update.AUTO = localStorage.getItem('Config_Update_AUTO') === 'true';
            }
        }

        public save() {
            localStorage.setItem('Config_Update_AUTO', this.Update.AUTO.toString());
        }

        public init() {
            this.getFromLocalStorage();
        }

        constructor() { /*...*/ }
    }

    app.service('configService', ConfigService);
}
