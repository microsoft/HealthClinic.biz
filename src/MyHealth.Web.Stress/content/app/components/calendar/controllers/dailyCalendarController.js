class DailyCalendarController {

    constructor ($scope, $rootScope, $state, CalendarService, $stateParams, toasterService) {

        const dateFormat = 'DD/MM/YYYY HH:mm:ss';

        var calculateDuration = () => {
            $scope.dailyData.Appointments.forEach((daily) => {
                var difference = moment(moment(daily.End), dateFormat).diff(moment(moment(daily.Start), dateFormat));
                daily.Duration = moment.duration(difference).asHours();
            });
        };

        var retrieveDayInformation = (year, month, day) => {
            $rootScope.loading = true;

            CalendarService.getDayInformation(year, month, day)
                .then((response) => {
                    $scope.dailyData = response.data;
                    $scope.dailyData.Today = new Date($scope.dailyData.Year, $scope.dailyData.Month - 1, $scope.dailyData.Day);
                    calculateDuration();
                })
                .catch((error) => {
                    toasterService.showServerError(error);
                })
                .finally(() => {
                    $rootScope.loading = false;
                });
        };

        $scope.goBack = () => {
            $state.go('calendar.monthly');
        };

        retrieveDayInformation($stateParams.year, $stateParams.month, $stateParams.day);
    }
}


DailyCalendarController.$inject = ['$scope', '$rootScope', '$state', 'calendarService', '$stateParams', 'toasterService'];
export default DailyCalendarController;