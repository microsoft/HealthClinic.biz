module MyHealth.Client.Cordova.Application {
    export module Shared {
        angular.module('app.shared', []);
        export var getModule: () => ng.IModule = () => {
            return angular.module('app.shared');
        };
    }
}
