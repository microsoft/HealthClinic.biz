module MyHealth.Client.Cordova.Application.HomeAppointments {

    var app = getModule();

    class HomeAppointmentListController {
        constructor($scope: any, homeAppointmentService: HomeAppointmentService, $rootScope: any, $state: any) {

            $scope.$on('$ionicView.enter', () => {
                homeAppointmentService.update();
            });

            $scope.homeAppointments = homeAppointmentService.get();
            $scope.$on('homeAppointmentUpdated', () => {
                $scope.$apply();
            });

            $scope.navigate = (homeAppointment: any) => {
                $state.go('app.homeAppointment', { homeAppointmentId: homeAppointment.appointmentId });
            };

            var today = moment({ hour: 0 });
            $scope.homeAppointmentsFilter = homeAppointment => {
                var diff = today.diff(moment(homeAppointment.dateTime), 'hours');
                return diff <= 0 && !homeAppointment.visited;
            };
        }
    }

    app.controller('homeAppointmentListController', HomeAppointmentListController);
}
