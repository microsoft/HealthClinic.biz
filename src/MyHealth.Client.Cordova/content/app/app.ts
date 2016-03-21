/// <reference path='typings/angularjs/angular.d.ts'/>
/// <reference path='typings/angularjs/angular-route.d.ts'/>
/// <reference path='typings/cordova/cordova.d.ts'/>
/// <reference path='typings/cordova-ionic/cordova-ionic.d.ts'/>
/// <reference path='typings/ionic/ionic.d.ts'/>
/// <reference path='typings/cordova-plugin-code-push/codePush.d.ts'/>

module MyHealth.Client.Cordova {
    'use strict';
    export module Application {

        angular.module('app', ['ionic', 'app.shared', 'app.homeAppointments']);
        export var getModule: () => ng.IModule = () => {
            return angular.module('app');
        };

        var app = getModule();

        export function initialize() {
            app.run(($ionicPlatform: ionic.platform.IonicPlatformService, configService: Shared.ConfigService,
                updateService: Shared.UpdateService) => {
                $ionicPlatform.ready(onDeviceReady(configService, updateService));
            });
            app.config(config);
        }

        function config($stateProvider: any, $urlRouterProvider: any, $ionicConfigProvider: any) {
            $ionicConfigProvider.scrolling.jsScrolling(false);

            $stateProvider
                .state('app', {
                    url: '/app',
                    abstract: true,
                    templateUrl: 'templates/shared/views/menu.html',
                    controller: 'mainController'
                })
                .state('app.home', {
                    url: '/home',
                    views: {
                        'menuContent': {
                            templateUrl: 'templates/homeAppointments/views/homeAppointmentList.html',
                            controller: 'homeAppointmentListController'
                        }
                    }
                })
                .state('app.homeAppointment', {
                    url: '/homeappointment/:homeAppointmentId/:visited',
                    views: {
                        'menuContent': {
                            templateUrl: 'templates/homeAppointments/views/homeAppointmentDetail.html',
                            controller: 'homeAppointmentDetailController'
                        }
                    }
                })
                .state('app.visited', {
                    url: '/visited',
                    views: {
                        'menuContent': {
                            templateUrl: 'templates/homeAppointments/views/homeAppointmentVisitedList.html',
                            controller: 'homeAppointmentVisitedListController'
                        }
                    }
                })
                .state('app.settings', {
                    url: '/settings',
                    views: {
                        'menuContent': {
                            templateUrl: 'templates/shared/views/settings.html',
                            controller: 'settingsController'
                        }
                    }
                });

            // if none of the above states are matched, use this as the fallback
            $urlRouterProvider.otherwise('/app/home');
        }

        function onDeviceReady(configService: Shared.ConfigService, updateService: Shared.UpdateService) {
            return () => {
                // Service Initializers
                configService.init();
                updateService.init();

                // handle the Cordova pause and resume events
                document.addEventListener('pause', onPause, false);
                document.addEventListener('resume', onResume, false);

                if (window.cordova) {
                    if (window.cordova.plugins) {
                        if (window.cordova.plugins.Keyboard) {
                            if (window.cordova.plugins.Keyboard.hideKeyboardAccessoryBar) {
                                window.cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                            }
                            if (window.cordova.plugins.Keyboard.disableScroll) {
                                window.cordova.plugins.Keyboard.disableScroll(true);
                            }
                        }
                    }
                }

                if (navigator.splashscreen) {
                    navigator.splashscreen.hide();
                }

                if (window.StatusBar) {
                    window.StatusBar.styleDefault();
                    
                    if (cordova.platformId == 'android') {
                        window.StatusBar.backgroundColorByHexString("#004d48");
                    }
                }
            };
        }

        function onPause() {
            // TODO: This application has been suspended. Save application state here.
        }

        function onResume() {
            // TODO: This application has been reactivated. Restore application state here.
        }
    }

    Application.initialize();
}
