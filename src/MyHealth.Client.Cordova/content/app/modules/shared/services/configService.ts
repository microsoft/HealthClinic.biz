module MyHealth.Client.Cordova.Application.Shared {

    var app = getModule();

    export class ConfigService {

        public Azure = {
            API_URL: 'https://YOUR_MOBILEAPP.azurewebsites.net'
        };


        public General = {
            DEFAULT_TENANT_ID: 0,
            DEFAULT_DOCTOR_GUID: 'D0ACA653-2AB1-4160-87FC-21E72FD2ED44',
            REQUIRE_LOGIN: false
       
        };

        public BingMaps = {
            API_KEY: 'YOUR_BING_KEY'
        };

        public Update = {
            AUTO: false
        };

        private getFromLocalStorage() {

            var ConfigUpdateAUTOStored = localStorage.getItem('Config_Update_AUTO');
            if (ConfigUpdateAUTOStored) {
                this.Update.AUTO = localStorage.getItem('Config_Update_AUTO') === 'true';
            }
            var ConfigGeneralLoginStored = localStorage.getItem('Config_General_REQUIRE_LOGIN');
            if (ConfigGeneralLoginStored) {
                this.General.REQUIRE_LOGIN = localStorage.getItem('Config_General_REQUIRE_LOGIN') === 'true';
            }
        }

        public save() {
            localStorage.setItem('Config_Update_AUTO', this.Update.AUTO.toString());
            localStorage.setItem('Config_General_REQUIRE_LOGIN', this.General.REQUIRE_LOGIN.toString());
        }

        public init() {
            this.getFromLocalStorage();
        }

        constructor() { /*...*/ }
    }

    app.service('configService', ConfigService);
}
