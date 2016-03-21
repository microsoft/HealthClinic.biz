module MyHealth.Client.Cordova.Application.HomeAppointments {

    var app = getModule();

    class HomeAppointmentListController {
        constructor($scope: any, homeAppointmentService: HomeAppointmentService, $rootScope: any, $state: any) {

            $scope.$on('$ionicView.enter', () => {
                homeAppointmentService.update(false);
            });

            $scope.homeAppointments = homeAppointmentService.get();
            $scope.$on('homeAppointmentUpdated', () => {
                $scope.$apply();
            });

            $scope.navigate = (homeAppointment: any) => {
                $state.go('app.homeAppointment', { homeAppointmentId: homeAppointment.appointmentId});
            };

        }
    }

    app.controller('homeAppointmentListController', HomeAppointmentListController);
}
