module MyHealth.Client.Cordova.Application {
    export module HomeAppointments {
        angular.module('app.homeAppointments', []);
        export var getModule: () => ng.IModule = () => {
            return angular.module('app.homeAppointments');
        };
    }
}
