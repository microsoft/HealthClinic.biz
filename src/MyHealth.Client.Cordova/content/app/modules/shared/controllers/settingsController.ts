module MyHealth.Client.Cordova.Application.Shared {

    var app = getModule();

    class SettingsController {
        constructor($scope: any, configService: ConfigService) {
            $scope.Settings = configService;

            $scope.$watchCollection('Settings.Update', function () {
                configService.save();
            });

            $scope.$watchCollection('Settings.General', function () {
                configService.save();
            });
        }
    }

    app.controller('settingsController', SettingsController);
}
