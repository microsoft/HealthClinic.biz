
/// <reference path='../typings/angularjs/angular.d.ts'/>
/// <reference path='../typings/angularjs/angular-route.d.ts'/>

module MyHealth.Clinics {
    'use strict';

    export module Application {

        angular.module('app', ['ui.router']);

        export var getModule: () => ng.IModule = () => {
            return angular.module('app');
        };

        var app = getModule();

        export function initialize() {
            app.config(config);
        }

        function config($stateProvider: any, $urlRouterProvider: any) {

            const defaultUrl = '/';

            $urlRouterProvider.when('', defaultUrl);

            $urlRouterProvider.otherwise('/404');

            $stateProvider
                .state('app', {
                    url: defaultUrl,
                    templateUrl: 'app/views/clinicsList.html',
                    controller: 'clinicsListController'
                })
                .state('error', {
                    url: '/404',
                    templateUrl: '/app/views/error.html'
                });
        }
    }

    Application.initialize();
}
