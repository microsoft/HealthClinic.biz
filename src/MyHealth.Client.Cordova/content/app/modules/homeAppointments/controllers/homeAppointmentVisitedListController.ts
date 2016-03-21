module MyHealth.Client.Cordova.Application.HomeAppointments {

    var app = getModule();

    class HomeAppointmentVisitedListController {
        constructor($scope: any, homeAppointmentService: HomeAppointmentService, $rootScope: any, $state: any) {

            $scope.$on('$ionicView.enter', () => {
                homeAppointmentService.update(true);
            });

            $scope.homeAppointments = homeAppointmentService.getVisited();
            $scope.$on('homeAppointmentUpdated', () => {
                $scope.$apply();
            });

            $scope.navigate = (homeAppointment: any) => {
                $state.go('app.homeAppointment', { homeAppointmentId: homeAppointment.appointmentId, visited: homeAppointment.visited });
            };

        }
    }

    app.controller('homeAppointmentVisitedListController', HomeAppointmentVisitedListController);
}
