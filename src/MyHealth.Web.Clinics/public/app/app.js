/// <reference path='../typings/angularjs/angular.d.ts'/>
/// <reference path='../typings/angularjs/angular-route.d.ts'/>
var MyHealth;
(function (MyHealth) {
    var Clinics;
    (function (Clinics) {
        'use strict';
        var Application;
        (function (Application) {
            angular.module('app', ['ui.router']);
            Application.getModule = function () {
                return angular.module('app');
            };
            var app = Application.getModule();
            function initialize() {
                app.config(config);
            }
            Application.initialize = initialize;
            function config($stateProvider, $urlRouterProvider) {
                var defaultUrl = '/';
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
        })(Application = Clinics.Application || (Clinics.Application = {}));
        Application.initialize();
    })(Clinics = MyHealth.Clinics || (MyHealth.Clinics = {}));
})(MyHealth || (MyHealth = {}));
//# sourceMappingURL=app.js.map