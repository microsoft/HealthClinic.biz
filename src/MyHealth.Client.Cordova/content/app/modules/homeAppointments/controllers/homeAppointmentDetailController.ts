module MyHealth.Client.Cordova.Application.HomeAppointments {

    var app = getModule();

    class HomeAppointmentDetailController {
        constructor($scope: any, homeAppointmentService: HomeAppointmentService, $rootScope: any, $stateParams: any) {

            $scope.$on('$ionicView.enter', () => {
                homeAppointmentService.update($stateParams.visited);
            });

            $scope.homeAppointment = homeAppointmentService.getDetails($stateParams.homeAppointmentId, $stateParams.visited);

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
