var moduleName = 'myHealth';

import sharedModuleName from './components/shared/shared.module';
import dashboardModuleName from './components/dashboard/dashboard.module';
import doctorsModuleName from './components/doctors/doctors.module';
import patientsModuleName from './components/patients/patients.module';
import dailyReportModuleName from './components/dailyReport/dailyReport.module';

var app = angular.module(moduleName, ['ui.router', 'ngAnimate', sharedModuleName, dashboardModuleName, doctorsModuleName, patientsModuleName, dailyReportModuleName]);

app.config(config);

function config($stateProvider, $urlRouterProvider, $compileProvider) {

    const defaultUrl = '/';

    $compileProvider.debugInfoEnabled(false);

    $urlRouterProvider.when('', defaultUrl);

    $urlRouterProvider.otherwise('/404');

    $stateProvider
        .state('dashboard', {
            url: '/',
            templateUrl: '/app/components/dashboard/views/main.html',
            controller:'dashboardController'
        })
        .state('doctors', {
            url: '/doctors',
            templateUrl: '/app/components/doctors/views/main.html',
            controller:'doctorsController'
        })
        .state('doctor', {
            url: '/doctor?id',
            templateUrl: '/app/components/doctors/views/detail.html',
            controller:'detailController'
        })
        .state('patients', {
            url: '/patients',
            templateUrl: '/app/components/patients/views/main.html',
            controller:'patientsController'
        })
        .state('dailyReport', {
            url: '/dailyreport',
            templateUrl: '/app/components/dailyReport/views/main.html',
            controller: 'dailyReportController'
        })
        .state('error', {
            url: '/404',
            templateUrl: '/app/components/shared/views/error.html'
        });
}

export default moduleName;