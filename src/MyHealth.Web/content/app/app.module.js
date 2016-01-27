var moduleName = 'myHealth';

import sharedModuleName from './components/shared/shared.module';
import dashboardModuleName from './components/dashboard/dashboard.module';
import doctorsModuleName from './components/doctors/doctors.module';
import patientsModuleName from './components/patients/patients.module';
import dailyReportModuleName from './components/dailyReport/dailyReport.module';
import usersModuleName from './components/users/users.module';
import clinicsModuleName from './components/clinics/clinics.module';

var app = angular.module(moduleName, ['ui.router', 'ngAnimate', sharedModuleName, dashboardModuleName, doctorsModuleName, patientsModuleName, dailyReportModuleName, usersModuleName, clinicsModuleName]);

app.run(run);
app.config(config);

function run($state, initialPageService) {
    initialPageService.getInitialState().then(function(initialState){
        $state.go(initialState, {}, {location: "replace"}); 
    });
}

function config($stateProvider, $urlRouterProvider, $compileProvider) {

    const defaultUrl = '/';

    $compileProvider.debugInfoEnabled(false);

    $urlRouterProvider.when('', defaultUrl);

    $urlRouterProvider.otherwise('/404');

    $stateProvider
        .state('default', {
            url: '/',
            template: ''
        })
        .state('dashboard', {
            url: '/dashboard',
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
            controller:'doctorDetailController'
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
        .state('users', {
            url: '/users',
            templateUrl: '/app/components/users/views/main.html',
            controller: 'usersController'
        })
        .state('user', {
            url: '/user?username',
            templateUrl: '/app/components/users/views/detail.html',
            controller:'userDetailController'
        })
        .state('clinics', {
            url: '/clinics',
            templateUrl: '/app/components/clinics/views/main.html',
            controller: 'clinicsController'
        })
        .state('clinic', {
            url: '/clinic?id',
            templateUrl: '/app/components/clinics/views/detail.html',
            controller: 'clinicDetailController'
        })
        .state('error', {
            url: '/404',
            templateUrl: '/app/components/shared/views/error.html'
        });
}

export default moduleName;