module MyHealth.Client.Cordova.Application.HomeAppointments {

    var app = getModule();

    class HomeAppointmentDetailController {
        constructor($scope: any, homeAppointmentService: HomeAppointmentService, $rootScope: any, $stateParams: any) {

            $scope.$on('$ionicView.enter', () => {
                homeAppointmentService.update();
            });

            $scope.homeAppointment = homeAppointmentService.get($stateParams.homeAppointmentId);
            $scope.$on('homeAppointmentUpdated', () => {
                $scope.$apply();
            });

            $scope.$watch('homeAppointment', (newVal: any, oldVal: any) => {
                if (newVal && oldVal && newVal !== oldVal) {
                    homeAppointmentService.updateAppointment($scope.homeAppointment);
                }
            }, true);
        }
    }

    app.controller('homeAppointmentDetailController', HomeAppointmentDetailController);
}
