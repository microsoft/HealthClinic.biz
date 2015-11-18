class MonthlyCalendarController {
    constructor($scope, $rootScope, CalendarService, toasterService) {

        const stressTrendTypes = {
            Up : 0,
            Equal : 1,
            Down : 2
        };

        var getClassBasedOnStress = (stressTrend) => {
            if (stressTrendTypes.Up === stressTrend) {
                return 'up';
            } else if (stressTrendTypes.Down === stressTrend) {
                return 'down';
            } else {
                return 'same';
            }
        };

        var retrieveMonthInformation = (calendar, year, month) => {
            $rootScope.loading = true;
            $scope.eventSources.events = [];
            CalendarService.getMonthInformation(year, month)
               .then((response) => {
                   response.data.Days.forEach((day) => {
                       var date = new Date(day.Year, day.Month - 1, day.Day);
                       var event = {
                           title: day.NumberOfMeetings,
                           start: date,
                           end: date,
                           ownClassName: `calendar-event ${getClassBasedOnStress(day.StressTrend)}`
                       };
                       calendar.renderEvent(event);
                       $scope.eventSources.events.push(event);
                       $scope.eventsRendered.push(event);
                   });
               })
               .catch((error) => {
                   toasterService.showServerError(error);
               })
               .finally(() => {
                   $rootScope.loading = false;
               });
        };

        $scope.eventSources = {
            color: 'transparent',
            textColor: 'white',
            events: []
        };

        $scope.uiConfig = {
            calendar: {
                height: 730,
                editable: false,
                header: {
                    left: '',
                    center: '',
                    right: 'prev, title, next'
                },
                eventAfterAllRender: () => {
                    $scope.eventsRendered = $scope.eventSources.events;
                },
                viewRender: (view) => {
                    var currentDate = view.calendar.getDate();
                    retrieveMonthInformation(view.calendar, currentDate.year(), currentDate.month() + 1);
                }
            },
            themeButtonIcons: {
                prev: 'calendar-prev-button',
                next: 'calendar-next-button'
            }
        };
    }
}

MonthlyCalendarController.$inject = ['$scope', '$rootScope', 'calendarService', 'toasterService'];
export default MonthlyCalendarController;