module MyHealth.Client.Cordova.Application.Shared {

    var app = getModule();

    class MainController {
        constructor($scope: any, $rootScope: any, $ionicHistory: ionic.navigation.IonicHistoryService,
            dataService: DataService, updateService: UpdateService) {

            $scope.activeDoctor = dataService.activeDoctor;
            $scope.$on('activeDoctorUpdated', () => {
                $scope.$apply();
            });

            $scope.checkForUpdates = {
                action: () => {
                    updateService.checkForUpdate();
                },
                message: 'Check for updates',
                working: false
            };

            $scope.$on('updateStatusChanged', (ev, data) => {
                switch (data.status) {
                    case 'checking_for_updates':
                        $scope.checkForUpdates.message = 'Checking for updates...';
                        $scope.checkForUpdates.working = true;
                        break;
                    case 'downloading_update':
                        $scope.checkForUpdates.message = 'Downloading update...';
                        $scope.checkForUpdates.working = true;
                        break;
                    case 'installing_update':
                        $scope.checkForUpdates.message = 'Installing update...';
                        $scope.checkForUpdates.working = true;
                        break;
                    default:
                        $scope.checkForUpdates.message = 'Check for updates';
                        $scope.checkForUpdates.working = false;
                }
                if ($scope.$root.$$phase !== '$apply' && $scope.$root.$$phase !== '$digest') {
                    $scope.$apply();
                }
            });

            $scope.menuList = [
                { icon: 'home',     value: 'Home',     stateName: 'app.home' },
                { icon: 'calendar', value: 'Visited',  stateName: 'app.visited' },
                { icon: 'settings', value: 'Settings', stateName: 'app.settings'}
            ];

            $scope.currentStateName = $ionicHistory.currentStateName();
            $rootScope.$on('$stateChangeSuccess',
                (event : any, toState : any) => {
                    $scope.currentStateName = toState.name;
                });
        }
    }

    app.controller('mainController', MainController);
}
