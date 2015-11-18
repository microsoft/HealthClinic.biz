/// <reference path='typings/angularjs/angular.d.ts'/>
/// <reference path='typings/angularjs/angular-route.d.ts'/>
/// <reference path='typings/cordova/cordova.d.ts'/>
/// <reference path='typings/cordova-ionic/cordova-ionic.d.ts'/>
/// <reference path='typings/ionic/ionic.d.ts'/>
/// <reference path='typings/cordova-plugin-code-push/codePush.d.ts'/>
/// <reference path='typings/cordova-plugin-ms-appinsights/Appinsights.d.ts'/>
var MyHealth;
(function (MyHealth) {
    var Client;
    (function (Client) {
        var Cordova;
        (function (Cordova) {
            'use strict';
            var Application;
            (function (Application) {
                angular.module('app', ['ionic', 'app.shared', 'app.homeAppointments']);
                Application.getModule = function () {
                    return angular.module('app');
                };
                var app = Application.getModule();
                function initialize() {
                    app.run(function ($ionicPlatform, configService, updateService) {
                        $ionicPlatform.ready(onDeviceReady(configService, updateService));
                    });
                    app.config(config);
                }
                Application.initialize = initialize;
                function config($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
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
                        url: '/homeappointment/:homeAppointmentId',
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
                    $urlRouterProvider.otherwise('/app/home');
                }
                function onDeviceReady(configService, updateService) {
                    return function () {
                        configService.init();
                        updateService.init();
                        document.addEventListener('pause', onPause, false);
                        document.addEventListener('resume', onResume, false);
                        if (window.appInsights) {
                            appInsights.config.instrumentationKey = configService.AppInsights.INSTRUMENTATION_KEY;
                            appInsights.trackPageView();
                            var eventData = { Timestamp: new Date() };
                            appInsights.trackEvent('deviceready', eventData);
                        }
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
                        }
                    };
                }
                function onPause() {
                }
                function onResume() {
                }
            })(Application = Cordova.Application || (Cordova.Application = {}));
            Application.initialize();
        })(Cordova = Client.Cordova || (Client.Cordova = {}));
    })(Client = MyHealth.Client || (MyHealth.Client = {}));
})(MyHealth || (MyHealth = {}));
var MyHealth;
(function (MyHealth) {
    var Client;
    (function (Client) {
        var Cordova;
        (function (Cordova) {
            var Application;
            (function (Application) {
                var HomeAppointments;
                (function (HomeAppointments) {
                    angular.module('app.homeAppointments', []);
                    HomeAppointments.getModule = function () {
                        return angular.module('app.homeAppointments');
                    };
                })(HomeAppointments = Application.HomeAppointments || (Application.HomeAppointments = {}));
            })(Application = Cordova.Application || (Cordova.Application = {}));
        })(Cordova = Client.Cordova || (Client.Cordova = {}));
    })(Client = MyHealth.Client || (MyHealth.Client = {}));
})(MyHealth || (MyHealth = {}));
var MyHealth;
(function (MyHealth) {
    var Client;
    (function (Client) {
        var Cordova;
        (function (Cordova) {
            var Application;
            (function (Application) {
                var Shared;
                (function (Shared) {
                    angular.module('app.shared', []);
                    Shared.getModule = function () {
                        return angular.module('app.shared');
                    };
                })(Shared = Application.Shared || (Application.Shared = {}));
            })(Application = Cordova.Application || (Cordova.Application = {}));
        })(Cordova = Client.Cordova || (Client.Cordova = {}));
    })(Client = MyHealth.Client || (MyHealth.Client = {}));
})(MyHealth || (MyHealth = {}));
var MyHealth;
(function (MyHealth) {
    var Client;
    (function (Client) {
        var Cordova;
        (function (Cordova) {
            var Application;
            (function (Application) {
                var HomeAppointments;
                (function (HomeAppointments) {
                    var app = HomeAppointments.getModule();
                    var HomeAppointmentDetailController = (function () {
                        function HomeAppointmentDetailController($scope, homeAppointmentService, $rootScope, $stateParams) {
                            $scope.$on('$ionicView.enter', function () {
                                homeAppointmentService.update();
                            });
                            $scope.homeAppointment = homeAppointmentService.get($stateParams.homeAppointmentId);
                            $scope.$on('homeAppointmentUpdated', function () {
                                $scope.$apply();
                            });
                            $scope.$watch('homeAppointment', function (newVal, oldVal) {
                                if (newVal && oldVal && newVal !== oldVal) {
                                    homeAppointmentService.updateAppointment($scope.homeAppointment);
                                }
                            }, true);
                        }
                        return HomeAppointmentDetailController;
                    })();
                    app.controller('homeAppointmentDetailController', HomeAppointmentDetailController);
                })(HomeAppointments = Application.HomeAppointments || (Application.HomeAppointments = {}));
            })(Application = Cordova.Application || (Cordova.Application = {}));
        })(Cordova = Client.Cordova || (Client.Cordova = {}));
    })(Client = MyHealth.Client || (MyHealth.Client = {}));
})(MyHealth || (MyHealth = {}));
var MyHealth;
(function (MyHealth) {
    var Client;
    (function (Client) {
        var Cordova;
        (function (Cordova) {
            var Application;
            (function (Application) {
                var HomeAppointments;
                (function (HomeAppointments) {
                    var app = HomeAppointments.getModule();
                    var HomeAppointmentListController = (function () {
                        function HomeAppointmentListController($scope, homeAppointmentService, $rootScope, $state) {
                            $scope.$on('$ionicView.enter', function () {
                                homeAppointmentService.update();
                            });
                            $scope.homeAppointments = homeAppointmentService.get();
                            $scope.$on('homeAppointmentUpdated', function () {
                                $scope.$apply();
                            });
                            $scope.navigate = function (homeAppointment) {
                                $state.go('app.homeAppointment', { homeAppointmentId: homeAppointment.appointmentId });
                            };
                            var today = moment({ hour: 0 });
                            $scope.homeAppointmentsFilter = function (homeAppointment) {
                                var diff = today.diff(moment(homeAppointment.dateTime), 'hours');
                                return diff <= 0 && !homeAppointment.visited;
                            };
                        }
                        return HomeAppointmentListController;
                    })();
                    app.controller('homeAppointmentListController', HomeAppointmentListController);
                })(HomeAppointments = Application.HomeAppointments || (Application.HomeAppointments = {}));
            })(Application = Cordova.Application || (Cordova.Application = {}));
        })(Cordova = Client.Cordova || (Client.Cordova = {}));
    })(Client = MyHealth.Client || (MyHealth.Client = {}));
})(MyHealth || (MyHealth = {}));
var MyHealth;
(function (MyHealth) {
    var Client;
    (function (Client) {
        var Cordova;
        (function (Cordova) {
            var Application;
            (function (Application) {
                var HomeAppointments;
                (function (HomeAppointments) {
                    var app = HomeAppointments.getModule();
                    var HomeAppointmentVisitedListController = (function () {
                        function HomeAppointmentVisitedListController($scope, homeAppointmentService, $rootScope, $state) {
                            $scope.$on('$ionicView.enter', function () {
                                homeAppointmentService.update();
                            });
                            $scope.homeAppointments = homeAppointmentService.get();
                            $scope.$on('homeAppointmentUpdated', function () {
                                $scope.$apply();
                            });
                            $scope.navigate = function (homeAppointment) {
                                $state.go('app.homeAppointment', { homeAppointmentId: homeAppointment.appointmentId });
                            };
                        }
                        return HomeAppointmentVisitedListController;
                    })();
                    app.controller('homeAppointmentVisitedListController', HomeAppointmentVisitedListController);
                })(HomeAppointments = Application.HomeAppointments || (Application.HomeAppointments = {}));
            })(Application = Cordova.Application || (Cordova.Application = {}));
        })(Cordova = Client.Cordova || (Client.Cordova = {}));
    })(Client = MyHealth.Client || (MyHealth.Client = {}));
})(MyHealth || (MyHealth = {}));
var MyHealth;
(function (MyHealth) {
    var Client;
    (function (Client) {
        var Cordova;
        (function (Cordova) {
            var Application;
            (function (Application) {
                var HomeAppointments;
                (function (HomeAppointments) {
                    var app = HomeAppointments.getModule();
                    var CardHomeAppointmentDirective = (function () {
                        function CardHomeAppointmentDirective($ionicPopup, notificationService) {
                            var _this = this;
                            this.restrict = 'E';
                            this.templateUrl = 'templates/homeAppointments/views/cardHomeAppointment.html';
                            this.scope = {
                                homeAppointment: '=ngModel',
                                $first: '=first',
                                detail: '='
                            };
                            this.link = function (scope) {
                                scope.messageOptions = [
                                    'Sorry, I\'m late',
                                    'I\'ll be there in 5 minutes!',
                                    'Can\'t go today... I\'ll call you later, sorry!'
                                ];
                                scope.markAsVisited = function () {
                                    scope.homeAppointment.visited = !scope.homeAppointment.visited;
                                };
                                scope.sendNotification = function () {
                                    _this.notificationService.sendNotification(scope.notification);
                                };
                                scope.openNotificationPopup = function () {
                                    scope.notification = new HomeAppointments.Notification(scope.homeAppointment.patientId, 'choose');
                                    scope.notificationPopup = _this.$ionicPopup.show({
                                        templateUrl: 'templates/homeAppointments/views/cardHomeAppointmentNotificationPopup.html',
                                        cssClass: 'popup-container-home-appointment-notification',
                                        scope: scope,
                                        buttons: [
                                            { text: 'Cancel', type: 'button-stable' },
                                            {
                                                text: 'Send',
                                                type: 'button-calm',
                                                onTap: function (e) {
                                                    if (scope.notification.message === 'choose') {
                                                        e.preventDefault();
                                                    }
                                                    else {
                                                        scope.sendNotification();
                                                    }
                                                }
                                            }
                                        ]
                                    });
                                };
                                scope.closeNotificationPopup = function () {
                                    scope.notificationPopup.hide();
                                };
                            };
                            this.$ionicPopup = $ionicPopup;
                            this.notificationService = notificationService;
                        }
                        return CardHomeAppointmentDirective;
                    })();
                    app.directive('cardHomeAppointment', function ($ionicPopup, notificationService) {
                        return new CardHomeAppointmentDirective($ionicPopup, notificationService);
                    });
                })(HomeAppointments = Application.HomeAppointments || (Application.HomeAppointments = {}));
            })(Application = Cordova.Application || (Cordova.Application = {}));
        })(Cordova = Client.Cordova || (Client.Cordova = {}));
    })(Client = MyHealth.Client || (MyHealth.Client = {}));
})(MyHealth || (MyHealth = {}));
var MyHealth;
(function (MyHealth) {
    var Client;
    (function (Client) {
        var Cordova;
        (function (Cordova) {
            var Application;
            (function (Application) {
                var HomeAppointments;
                (function (HomeAppointments) {
                    var app = HomeAppointments.getModule();
                    var StaticBingMapDirective = (function () {
                        function StaticBingMapDirective(configService) {
                            var _this = this;
                            this.restrict = 'E';
                            this.templateUrl = 'templates/homeAppointments/views/staticBingMap.html';
                            this.scope = {
                                center: '=',
                                zoom: '=',
                                height: '='
                            };
                            this.link = function (scope, element) {
                                scope.width = element.width();
                                scope.bingApiKey = _this.configService.BingMaps.API_KEY;
                            };
                            this.configService = configService;
                        }
                        return StaticBingMapDirective;
                    })();
                    ;
                    app.directive('staticBingMap', function (configService) { return new StaticBingMapDirective(configService); });
                })(HomeAppointments = Application.HomeAppointments || (Application.HomeAppointments = {}));
            })(Application = Cordova.Application || (Cordova.Application = {}));
        })(Cordova = Client.Cordova || (Client.Cordova = {}));
    })(Client = MyHealth.Client || (MyHealth.Client = {}));
})(MyHealth || (MyHealth = {}));
var MyHealth;
(function (MyHealth) {
    var Client;
    (function (Client) {
        var Cordova;
        (function (Cordova) {
            var Application;
            (function (Application) {
                var HomeAppointments;
                (function (HomeAppointments) {
                    var app = HomeAppointments.getModule();
                    var AppointmentAddressFilter = (function () {
                        function AppointmentAddressFilter() {
                            var filter = function () {
                                return function (input) {
                                    if (typeof (input) === 'string') {
                                        var commaPosition = input.indexOf(',');
                                        if (commaPosition >= 0) {
                                            return input.substr(0, commaPosition).trim() + '<br>' + input.substr(commaPosition + 1).trim();
                                        }
                                        else {
                                            return input;
                                        }
                                    }
                                    else {
                                        return input;
                                    }
                                };
                            };
                            return filter();
                        }
                        return AppointmentAddressFilter;
                    })();
                    app.filter('appointmentAddress', AppointmentAddressFilter);
                })(HomeAppointments = Application.HomeAppointments || (Application.HomeAppointments = {}));
            })(Application = Cordova.Application || (Cordova.Application = {}));
        })(Cordova = Client.Cordova || (Client.Cordova = {}));
    })(Client = MyHealth.Client || (MyHealth.Client = {}));
})(MyHealth || (MyHealth = {}));
var MyHealth;
(function (MyHealth) {
    var Client;
    (function (Client) {
        var Cordova;
        (function (Cordova) {
            var Application;
            (function (Application) {
                var HomeAppointments;
                (function (HomeAppointments) {
                    var app = HomeAppointments.getModule();
                    var AppointmentDateFilter = (function () {
                        function AppointmentDateFilter() {
                            var filter = function () {
                                return function (input) {
                                    if (input) {
                                        var date = moment(input);
                                        var diff = date.diff(moment(), 'days');
                                        if (diff === 0) {
                                            return 'Today';
                                        }
                                        else {
                                            return date.format('MMM D, YYYY');
                                        }
                                    }
                                    else {
                                        return '';
                                    }
                                };
                            };
                            return filter();
                        }
                        return AppointmentDateFilter;
                    })();
                    app.filter('appointmentDate', AppointmentDateFilter);
                })(HomeAppointments = Application.HomeAppointments || (Application.HomeAppointments = {}));
            })(Application = Cordova.Application || (Cordova.Application = {}));
        })(Cordova = Client.Cordova || (Client.Cordova = {}));
    })(Client = MyHealth.Client || (MyHealth.Client = {}));
})(MyHealth || (MyHealth = {}));
var MyHealth;
(function (MyHealth) {
    var Client;
    (function (Client) {
        var Cordova;
        (function (Cordova) {
            var Application;
            (function (Application) {
                var HomeAppointments;
                (function (HomeAppointments) {
                    var app = HomeAppointments.getModule();
                    var AppointmentTimeFilter = (function () {
                        function AppointmentTimeFilter() {
                            var filter = function () {
                                return function (input) {
                                    if (input) {
                                        var time = moment(input);
                                        return time.format('h:mm');
                                    }
                                    else {
                                        return '';
                                    }
                                };
                            };
                            return filter();
                        }
                        return AppointmentTimeFilter;
                    })();
                    app.filter('appointmentTime', AppointmentTimeFilter);
                })(HomeAppointments = Application.HomeAppointments || (Application.HomeAppointments = {}));
            })(Application = Cordova.Application || (Cordova.Application = {}));
        })(Cordova = Client.Cordova || (Client.Cordova = {}));
    })(Client = MyHealth.Client || (MyHealth.Client = {}));
})(MyHealth || (MyHealth = {}));
var MyHealth;
(function (MyHealth) {
    var Client;
    (function (Client) {
        var Cordova;
        (function (Cordova) {
            var Application;
            (function (Application) {
                var HomeAppointments;
                (function (HomeAppointments) {
                    var app = HomeAppointments.getModule();
                    var AppointmentTimeFilterMeridiem = (function () {
                        function AppointmentTimeFilterMeridiem() {
                            var filter = function () {
                                return function (input) {
                                    if (input) {
                                        var time = moment(input);
                                        var meridiem = time.format('a');
                                        return meridiem;
                                    }
                                    else {
                                        return '';
                                    }
                                };
                            };
                            return filter();
                        }
                        return AppointmentTimeFilterMeridiem;
                    })();
                    app.filter('appointmentTimeMeridiem', AppointmentTimeFilterMeridiem);
                })(HomeAppointments = Application.HomeAppointments || (Application.HomeAppointments = {}));
            })(Application = Cordova.Application || (Cordova.Application = {}));
        })(Cordova = Client.Cordova || (Client.Cordova = {}));
    })(Client = MyHealth.Client || (MyHealth.Client = {}));
})(MyHealth || (MyHealth = {}));
var MyHealth;
(function (MyHealth) {
    var Client;
    (function (Client) {
        var Cordova;
        (function (Cordova) {
            var Application;
            (function (Application) {
                var HomeAppointments;
                (function (HomeAppointments) {
                    var HomeAppointment = (function () {
                        function HomeAppointment() {
                            this.geolocation = { latitude: 0, longitude: 0 };
                        }
                        HomeAppointment.prototype.deserialize = function (data) {
                            this.address = data.address;
                            this.appointmentId = data.appointmentId;
                            this.dateTime = data.dateTime;
                            this.description = data.description;
                            this.doctorId = data.doctorId;
                            this.id = data.id;
                            this.isUrgent = data.isUrgent;
                            this.latitude = data.latitude;
                            this.longitude = data.longitude;
                            this.geolocation = { latitude: this.latitude, longitude: this.longitude };
                            this.patientId = data.patientId;
                            this.speciality = data.speciality;
                            this.tenantId = data.tenantId;
                            this.visited = data.visited;
                            return this;
                        };
                        HomeAppointment.prototype.serialize = function () {
                            return {
                                address: this.address,
                                appointmentId: this.appointmentId,
                                dateTime: this.dateTime,
                                description: this.description,
                                doctorId: this.doctorId,
                                id: this.id,
                                isUrgent: this.isUrgent,
                                latitude: this.latitude,
                                longitude: this.longitude,
                                patientId: this.patientId,
                                speciality: this.speciality,
                                tenantId: this.tenantId,
                                visited: this.visited
                            };
                        };
                        return HomeAppointment;
                    })();
                    HomeAppointments.HomeAppointment = HomeAppointment;
                })(HomeAppointments = Application.HomeAppointments || (Application.HomeAppointments = {}));
            })(Application = Cordova.Application || (Cordova.Application = {}));
        })(Cordova = Client.Cordova || (Client.Cordova = {}));
    })(Client = MyHealth.Client || (MyHealth.Client = {}));
})(MyHealth || (MyHealth = {}));
var MyHealth;
(function (MyHealth) {
    var Client;
    (function (Client) {
        var Cordova;
        (function (Cordova) {
            var Application;
            (function (Application) {
                var HomeAppointments;
                (function (HomeAppointments) {
                    var Notification = (function () {
                        function Notification(patientId, message) {
                            this.patientId = patientId;
                            this.message = message;
                        }
                        Notification.prototype.serialize = function () {
                            return {
                                patientId: this.patientId.toString(),
                                message: this.message
                            };
                        };
                        return Notification;
                    })();
                    HomeAppointments.Notification = Notification;
                })(HomeAppointments = Application.HomeAppointments || (Application.HomeAppointments = {}));
            })(Application = Cordova.Application || (Cordova.Application = {}));
        })(Cordova = Client.Cordova || (Client.Cordova = {}));
    })(Client = MyHealth.Client || (MyHealth.Client = {}));
})(MyHealth || (MyHealth = {}));
var MyHealth;
(function (MyHealth) {
    var Client;
    (function (Client) {
        var Cordova;
        (function (Cordova) {
            var Application;
            (function (Application) {
                var HomeAppointments;
                (function (HomeAppointments) {
                    var Patient = (function () {
                        function Patient() {
                        }
                        Patient.prototype.deserialize = function (data) {
                            this.address = data.address;
                            this.age = data.age;
                            this.bloodType = data.bloogType;
                            this.clinicId = data.clinicId;
                            this.dateOfBirth = new Date(data.dateOfBirth) || data.dateOfBirth;
                            this.email = data.email;
                            this.gender = data.gender;
                            this.height = data.height;
                            this.id = data.id;
                            this.name = data.name;
                            this.patientId = data.patientId;
                            this.phone = data.phone;
                            this.picture = data.picture;
                            this.tenantId = data.tenantId;
                            this.weight = data.weight;
                            return this;
                        };
                        return Patient;
                    })();
                    HomeAppointments.Patient = Patient;
                })(HomeAppointments = Application.HomeAppointments || (Application.HomeAppointments = {}));
            })(Application = Cordova.Application || (Cordova.Application = {}));
        })(Cordova = Client.Cordova || (Client.Cordova = {}));
    })(Client = MyHealth.Client || (MyHealth.Client = {}));
})(MyHealth || (MyHealth = {}));
var MyHealth;
(function (MyHealth) {
    var Client;
    (function (Client) {
        var Cordova;
        (function (Cordova) {
            var Application;
            (function (Application) {
                var HomeAppointments;
                (function (HomeAppointments) {
                    var app = HomeAppointments.getModule();
                    var HomeAppointmentService = (function () {
                        function HomeAppointmentService($rootScope, dataService) {
                            this.homeAppointments = new Array();
                            this.patients = new Array();
                            this.homeAppointmentById = [];
                            this.patientById = [];
                            this.$rootScope = $rootScope;
                            this.dataService = dataService;
                        }
                        HomeAppointmentService.prototype.digestHomeAppointmentData = function (data) {
                            var _this = this;
                            data.forEach(function (homeAppointmentData) {
                                if (_this.homeAppointmentById[homeAppointmentData.appointmentId]) {
                                    _this.homeAppointmentById[homeAppointmentData.appointmentId].deserialize(homeAppointmentData);
                                }
                                else {
                                    var homeAppointment = new HomeAppointments.HomeAppointment().deserialize(homeAppointmentData);
                                    _this.homeAppointmentById[homeAppointment.appointmentId] = homeAppointment;
                                    _this.homeAppointments.push(homeAppointment);
                                }
                                if (homeAppointmentData.patient) {
                                    _this.digestPatientData([homeAppointmentData.patient]);
                                    var appoID = homeAppointmentData.appointmentId;
                                    var patID = homeAppointmentData.patient.patientId;
                                    _this.homeAppointmentById[appoID].patient = _this.patientById[patID];
                                }
                            });
                        };
                        HomeAppointmentService.prototype.digestPatientData = function (data) {
                            var _this = this;
                            data.forEach(function (patientData) {
                                if (_this.patientById[patientData.patientId]) {
                                    _this.patientById[patientData.patientId].deserialize(patientData);
                                }
                                else {
                                    var patient = new HomeAppointments.Patient().deserialize(patientData);
                                    _this.patientById[patient.patientId] = patient;
                                    _this.patients.push(patient);
                                }
                            });
                        };
                        HomeAppointmentService.prototype.get = function (id) {
                            if (id === void 0) { id = null; }
                            if (id) {
                                if (!this.homeAppointmentById[id]) {
                                    this.homeAppointmentById[id] = new HomeAppointments.HomeAppointment();
                                }
                                return this.homeAppointmentById[id];
                            }
                            else {
                                return this.homeAppointments;
                            }
                        };
                        HomeAppointmentService.prototype.update = function () {
                            var _this = this;
                            this.dataService.getHomeAppointments().then(function (result) {
                                _this.digestHomeAppointmentData(result);
                                _this.$rootScope.$broadcast('homeAppointmentUpdated');
                            });
                        };
                        HomeAppointmentService.prototype.updateAppointment = function (appointment) {
                            var _this = this;
                            this.dataService.updateAppointment(appointment.serialize()).then(function (result) {
                                _this.$rootScope.$broadcast('homeAppointmentUpdated');
                            });
                        };
                        return HomeAppointmentService;
                    })();
                    HomeAppointments.HomeAppointmentService = HomeAppointmentService;
                    app.service('homeAppointmentService', HomeAppointmentService);
                })(HomeAppointments = Application.HomeAppointments || (Application.HomeAppointments = {}));
            })(Application = Cordova.Application || (Cordova.Application = {}));
        })(Cordova = Client.Cordova || (Client.Cordova = {}));
    })(Client = MyHealth.Client || (MyHealth.Client = {}));
})(MyHealth || (MyHealth = {}));
var MyHealth;
(function (MyHealth) {
    var Client;
    (function (Client) {
        var Cordova;
        (function (Cordova) {
            var Application;
            (function (Application) {
                var HomeAppointments;
                (function (HomeAppointments) {
                    var app = HomeAppointments.getModule();
                    var NotificationService = (function () {
                        function NotificationService($rootScope, dataService) {
                            this.$rootScope = $rootScope;
                            this.dataService = dataService;
                        }
                        NotificationService.prototype.sendNotification = function (notification) {
                            this.dataService.sendNotification(notification.serialize());
                        };
                        return NotificationService;
                    })();
                    HomeAppointments.NotificationService = NotificationService;
                    app.service('notificationService', NotificationService);
                })(HomeAppointments = Application.HomeAppointments || (Application.HomeAppointments = {}));
            })(Application = Cordova.Application || (Cordova.Application = {}));
        })(Cordova = Client.Cordova || (Client.Cordova = {}));
    })(Client = MyHealth.Client || (MyHealth.Client = {}));
})(MyHealth || (MyHealth = {}));
var MyHealth;
(function (MyHealth) {
    var Client;
    (function (Client) {
        var Cordova;
        (function (Cordova) {
            var Application;
            (function (Application) {
                var Shared;
                (function (Shared) {
                    var app = Shared.getModule();
                    var MainController = (function () {
                        function MainController($scope, $rootScope, $ionicHistory, dataService, updateService) {
                            $scope.activeDoctor = dataService.activeDoctor;
                            $scope.$on('activeDoctorUpdated', function () {
                                $scope.$apply();
                            });
                            $scope.checkForUpdates = {
                                action: function () {
                                    updateService.checkForUpdate();
                                },
                                message: 'Check for updates',
                                working: false
                            };
                            $scope.$on('updateStatusChanged', function (ev, data) {
                                switch (data.status) {
                                    case 'checking_for_updates':
                                        $scope.checkForUpdates.message = 'Checking for updates...';
                                        $scope.checkForUpdates.working = true;
                                        break;
                                    case 'downloading_update':
                                        $scope.checkForUpdates.message = 'Downloading update...';
                                        $scope.checkForUpdates.working = true;
                                        break;
                                    case 'installing_update':
                                        $scope.checkForUpdates.message = 'Installing update...';
                                        $scope.checkForUpdates.working = true;
                                        break;
                                    default:
                                        $scope.checkForUpdates.message = 'Check for updates';
                                        $scope.checkForUpdates.working = false;
                                }
                                if ($scope.$root.$$phase !== '$apply' && $scope.$root.$$phase !== '$digest') {
                                    $scope.$apply();
                                }
                            });
                            $scope.menuList = [
                                { icon: 'home', value: 'Home', stateName: 'app.home' },
                                { icon: 'calendar', value: 'Visited', stateName: 'app.visited' },
                                { icon: 'settings', value: 'Settings', stateName: 'app.settings' }
                            ];
                            $scope.currentStateName = $ionicHistory.currentStateName();
                            $rootScope.$on('$stateChangeSuccess', function (event, toState) {
                                $scope.currentStateName = toState.name;
                            });
                        }
                        return MainController;
                    })();
                    app.controller('mainController', MainController);
                })(Shared = Application.Shared || (Application.Shared = {}));
            })(Application = Cordova.Application || (Cordova.Application = {}));
        })(Cordova = Client.Cordova || (Client.Cordova = {}));
    })(Client = MyHealth.Client || (MyHealth.Client = {}));
})(MyHealth || (MyHealth = {}));
var MyHealth;
(function (MyHealth) {
    var Client;
    (function (Client) {
        var Cordova;
        (function (Cordova) {
            var Application;
            (function (Application) {
                var Shared;
                (function (Shared) {
                    var app = Shared.getModule();
                    var SettingsController = (function () {
                        function SettingsController($scope, configService) {
                            $scope.Settings = configService;
                            $scope.$watchCollection('Settings.Update', function () {
                                configService.save();
                            });
                        }
                        return SettingsController;
                    })();
                    app.controller('settingsController', SettingsController);
                })(Shared = Application.Shared || (Application.Shared = {}));
            })(Application = Cordova.Application || (Cordova.Application = {}));
        })(Cordova = Client.Cordova || (Client.Cordova = {}));
    })(Client = MyHealth.Client || (MyHealth.Client = {}));
})(MyHealth || (MyHealth = {}));
var MyHealth;
(function (MyHealth) {
    var Client;
    (function (Client) {
        var Cordova;
        (function (Cordova) {
            var Application;
            (function (Application) {
                var Shared;
                (function (Shared) {
                    var app = Shared.getModule();
                    var CapitalizeFilter = (function () {
                        function CapitalizeFilter() {
                            var filter = function () {
                                return function (input) {
                                    return (!!input) ? input.replace(/([^\W_]+[^\s-]*) */g, function (txt) {
                                        return (txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
                                    }) : '';
                                };
                            };
                            return filter();
                        }
                        return CapitalizeFilter;
                    })();
                    app.filter('capitalize', CapitalizeFilter);
                })(Shared = Application.Shared || (Application.Shared = {}));
            })(Application = Cordova.Application || (Cordova.Application = {}));
        })(Cordova = Client.Cordova || (Client.Cordova = {}));
    })(Client = MyHealth.Client || (MyHealth.Client = {}));
})(MyHealth || (MyHealth = {}));
var MyHealth;
(function (MyHealth) {
    var Client;
    (function (Client) {
        var Cordova;
        (function (Cordova) {
            var Application;
            (function (Application) {
                var Shared;
                (function (Shared) {
                    var Doctor = (function () {
                        function Doctor() {
                        }
                        Doctor.prototype.deserialize = function (data) {
                            this.address = data.address;
                            this.currentRoomNumber = data.currentRoomNumber;
                            this.description = data.description;
                            this.doctorId = data.doctorId;
                            this.email = data.email;
                            this.id = data.id;
                            this.mobile = data.mobile;
                            this.name = data.name;
                            this.patientCount = data.patientCount;
                            this.phone = data.phone;
                            this.picture = data.picture;
                            this.speciality = data.speciality;
                            this.synchronized = data.synchronized;
                            this.tenantId = data.tenantId;
                            return this;
                        };
                        return Doctor;
                    })();
                    Shared.Doctor = Doctor;
                })(Shared = Application.Shared || (Application.Shared = {}));
            })(Application = Cordova.Application || (Cordova.Application = {}));
        })(Cordova = Client.Cordova || (Client.Cordova = {}));
    })(Client = MyHealth.Client || (MyHealth.Client = {}));
})(MyHealth || (MyHealth = {}));
var MyHealth;
(function (MyHealth) {
    var Client;
    (function (Client) {
        var Cordova;
        (function (Cordova) {
            var Application;
            (function (Application) {
                var Shared;
                (function (Shared) {
                    var app = Shared.getModule();
                    var ConfigService = (function () {
                        function ConfigService() {
                            this.Azure = {
                                API_URL: 'https://YOUR_MOBILEAPP.azurewebsites.net',
                                API_ALT_URL: 'https://YOUR_GATEWAY.azurewebsites.net'
                            };
                            this.General = {
                                DEFAULT_DOCTOR_GUID: 'D0ACA653-2AB1-4160-87FC-21E72FD2ED44',
                                REQUIRE_LOGIN: false
                            };
                            this.AppInsights = {
                                INSTRUMENTATION_KEY: 'YOUR_KEY'
                            };
                            this.BingMaps = {
                                API_KEY: 'YOUR_KEY'
                            };
                            this.Update = {
                                AUTO: false
                            };
                        }
                        ConfigService.prototype.getFromLocalStorage = function () {
                            var ConfigUpdateAUTOStored = localStorage.getItem('Config_Update_AUTO');
                            if (ConfigUpdateAUTOStored) {
                                this.Update.AUTO = localStorage.getItem('Config_Update_AUTO') === 'true';
                            }
                        };
                        ConfigService.prototype.save = function () {
                            localStorage.setItem('Config_Update_AUTO', this.Update.AUTO.toString());
                        };
                        ConfigService.prototype.init = function () {
                            this.getFromLocalStorage();
                        };
                        return ConfigService;
                    })();
                    Shared.ConfigService = ConfigService;
                    app.service('configService', ConfigService);
                })(Shared = Application.Shared || (Application.Shared = {}));
            })(Application = Cordova.Application || (Cordova.Application = {}));
        })(Cordova = Client.Cordova || (Client.Cordova = {}));
    })(Client = MyHealth.Client || (MyHealth.Client = {}));
})(MyHealth || (MyHealth = {}));
var MyHealth;
(function (MyHealth) {
    var Client;
    (function (Client) {
        var Cordova;
        (function (Cordova) {
            var Application;
            (function (Application) {
                var Shared;
                (function (Shared) {
                    var app = Shared.getModule();
                    var DataService = (function () {
                        function DataService($rootScope, configService, $ionicPlatform) {
                            this.activeDoctor = new Shared.Doctor();
                            this.$rootScope = $rootScope;
                            this.configService = configService;
                            this.$ionicPlatform = $ionicPlatform;
                        }
                        DataService.prototype.getClient = function () {
                            if (!this.client) {
                                this.client = new WindowsAzure.MobileServiceClient(this.configService.Azure.API_URL, this.configService.Azure.API_ALT_URL, '').withFilter(function (request, next, callback) {
                                    if (request.url.indexOf('/tables/homeappointment') >= 0 && request.url.indexOf('$expand') === -1) {
                                        request.url = request.url + ((request.url.indexOf('?') === -1) ? '?' : '&');
                                        request.url = request.url + '$expand=patient';
                                    }
                                    next(request, callback);
                                });
                            }
                            return this.client;
                        };
                        DataService.prototype.login = function () {
                            var _this = this;
                            return new Promise(function (resolve, reject) {
                                if (_this.configService.General.REQUIRE_LOGIN) {
                                    _this.$ionicPlatform.ready(function () {
                                        _this.getClient().login('aad').then(function (loginResult) {
                                            resolve();
                                        });
                                    });
                                }
                                else {
                                    resolve();
                                }
                            });
                        };
                        DataService.prototype.getActiveDoctor = function () {
                            var _this = this;
                            return new Promise(function (resolve, reject) {
                                if (!_this.activeDoctor.id) {
                                    _this.login().then(function () {
                                        var doctorsTable = _this.getClient().getTable('doctor');
                                        doctorsTable.where({ id: _this.configService.General.DEFAULT_DOCTOR_GUID }).read().done(function (result) {
                                            _this.activeDoctor.deserialize(result[0]);
                                            _this.$rootScope.$broadcast('activeDoctorUpdated');
                                            resolve(_this.activeDoctor);
                                        }, function (error) {
                                            console.log(error);
                                        });
                                    });
                                }
                                else {
                                    resolve(_this.activeDoctor);
                                }
                            });
                        };
                        DataService.prototype.getHomeAppointments = function () {
                            var _this = this;
                            return new Promise(function (resolve, reject) {
                                _this.getActiveDoctor().then(function (doctor) {
                                    var homeAppointmentsTable = _this.getClient().getTable('homeappointment');
                                    homeAppointmentsTable.take(10)
                                        .orderBy('dateTime')
                                        .where({ doctorId: doctor.doctorId, tenantId: 1 })
                                        .read()
                                        .done(function (result) {
                                        resolve(result);
                                    }, function (error) {
                                        console.log(error);
                                    });
                                });
                            });
                        };
                        DataService.prototype.updateAppointment = function (appointment) {
                            var _this = this;
                            return new Promise(function (resolve, reject) {
                                var homeAppointmentsTable = _this.getClient().getTable('homeappointment');
                                homeAppointmentsTable.update(appointment).done(function (result) {
                                    resolve(result);
                                }, function (err) {
                                    console.log("Error: " + err);
                                });
                            });
                        };
                        DataService.prototype.sendNotification = function (data) {
                            var _this = this;
                            var notification = data;
                            this.getActiveDoctor().then(function (doctor) {
                                notification.doctorId = doctor.doctorId.toString();
                                _this.getClient().invokeApi('NotifyDelay', {
                                    body: notification,
                                    method: 'post'
                                }).done(function (results) {
                                }, function (error) {
                                    console.error(error);
                                });
                            });
                        };
                        return DataService;
                    })();
                    Shared.DataService = DataService;
                    app.service('dataService', DataService);
                })(Shared = Application.Shared || (Application.Shared = {}));
            })(Application = Cordova.Application || (Cordova.Application = {}));
        })(Cordova = Client.Cordova || (Client.Cordova = {}));
    })(Client = MyHealth.Client || (MyHealth.Client = {}));
})(MyHealth || (MyHealth = {}));
var MyHealth;
(function (MyHealth) {
    var Client;
    (function (Client) {
        var Cordova;
        (function (Cordova) {
            var Application;
            (function (Application) {
                var Shared;
                (function (Shared) {
                    var app = Shared.getModule();
                    var UpdateService = (function () {
                        function UpdateService($rootScope, configService) {
                            this.$rootScope = $rootScope;
                            this.configService = configService;
                        }
                        UpdateService.prototype.pluginIsAvailable = function () {
                            if (device.platform === 'windows') {
                                return false;
                            }
                            if (window.codePush) {
                                return true;
                            }
                            else {
                                console.warn('CodePush plugin is not available');
                                return false;
                            }
                        };
                        UpdateService.prototype.alert = function (title, message, callback) {
                            if (callback === void 0) { callback = function () { }; }
                            navigator.notification.alert(message, callback, title, 'Ok');
                        };
                        UpdateService.prototype.confirm = function (title, message, callback) {
                            navigator.notification.confirm(message, function (i) { callback(i === 1 ? true : false); }, title, ['Yes', 'No']);
                        };
                        UpdateService.prototype.applyUpdate = function (remotePackage) {
                            var _this = this;
                            this.$rootScope.$broadcast('updateStatusChanged', { status: 'downloading_update' });
                            remotePackage.download(function (localPackage) {
                                _this.$rootScope.$broadcast('updateStatusChanged', { status: 'installing_update' });
                                localPackage.apply(function () {
                                }, function (err) {
                                    _this.$rootScope.$broadcast('updateStatusChanged', { status: 'done' });
                                    _this.alert('Update Error', 'There was an error while installing the update');
                                });
                            }, function (err) {
                                _this.$rootScope.$broadcast('updateStatusChanged', { status: 'done' });
                                _this.alert('Update Error', 'There was an error while downloading the update');
                            });
                        };
                        UpdateService.prototype.checkForUpdate = function (silent) {
                            var _this = this;
                            if (silent === void 0) { silent = false; }
                            if (!this.pluginIsAvailable()) {
                                return;
                            }
                            this.$rootScope.$broadcast('updateStatusChanged', { status: 'checking_for_updates' });
                            window.codePush.checkForUpdate(function (remotePackage) {
                                if (!remotePackage) {
                                    _this.$rootScope.$broadcast('updateStatusChanged', { status: 'done' });
                                    if (!silent) {
                                        _this.alert('No updates', 'There isn\'t any update available');
                                    }
                                }
                                else {
                                    _this.confirm('Update Available', 'There\'s a new version available, Would you like to install it?', function (result) {
                                        if (result) {
                                            _this.applyUpdate(remotePackage);
                                        }
                                        else {
                                            _this.$rootScope.$broadcast('updateStatusChanged', { status: 'done' });
                                        }
                                    });
                                }
                            }, function (error) {
                                _this.$rootScope.$broadcast('updateStatusChanged', { status: 'done' });
                                _this.alert('Update Error', 'There was an error while checking for updates');
                            });
                        };
                        UpdateService.prototype.init = function () {
                            if (this.configService.Update.AUTO) {
                                this.checkForUpdate(true);
                            }
                        };
                        return UpdateService;
                    })();
                    Shared.UpdateService = UpdateService;
                    app.service('updateService', UpdateService);
                })(Shared = Application.Shared || (Application.Shared = {}));
            })(Application = Cordova.Application || (Cordova.Application = {}));
        })(Cordova = Client.Cordova || (Client.Cordova = {}));
    })(Client = MyHealth.Client || (MyHealth.Client = {}));
})(MyHealth || (MyHealth = {}));

//# sourceMappingURL=app.js.map
