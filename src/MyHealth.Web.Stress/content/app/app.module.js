var moduleName = 'myHealth';

import sharedModuleName from './components/shared/shared.module';
import calendarModuleName from './components/calendar/calendar.module';

var app = angular.module(moduleName, ['ui.calendar', 'ui.router', 'toaster', 'ngAnimate', sharedModuleName, calendarModuleName]);

app.config(config);

function config($stateProvider, $urlRouterProvider, $compileProvider) {

    const defaultUrl = '/calendar/monthly';

    $compileProvider.debugInfoEnabled(false);

    $urlRouterProvider.when('', defaultUrl);
    $urlRouterProvider.when('/', defaultUrl);

    $urlRouterProvider.otherwise('/404');

    $stateProvider
        .state('calendar', {
            abstract: true,
            templateUrl: '/app/components/calendar/views/calendarLayout.html'
        })
        .state('calendar.monthly', {
            parent:'calendar',
            url: '/calendar/monthly',
            templateUrl: '/app/components/calendar/views/monthlyCalendar.html',
            controller:'monthlyCalendarController'
        })
        .state('calendar.daily', {
            parent:'calendar',
            url: '/calendar/daily/{year:int}/{month:int}/{day:int}/',
            templateUrl: '/app/components/calendar/views/dailyCalendar.html',
            controller:'dailyCalendarController'
        })
        .state('error', {
            url: '/404',
            templateUrl: '/app/components/shared/views/error.html'
        });
}

export default moduleName;