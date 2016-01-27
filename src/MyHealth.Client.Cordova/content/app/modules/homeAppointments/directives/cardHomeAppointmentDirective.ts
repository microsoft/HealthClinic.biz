module MyHealth.Client.Cordova.Application.HomeAppointments {

    var app = getModule();

    class CardHomeAppointmentDirective implements ng.IDirective {

        public restrict: string = 'E';
        public templateUrl: string = 'templates/homeAppointments/views/cardHomeAppointment.html';
        public scope = {
            homeAppointment: '=ngModel',
            $first: '=first',
            detail: '='
        };
        public link: ng.IDirectiveLinkFn = (scope: any) => {

            scope.messageOptions = [
                'Sorry, I\'m late',
                'I\'ll be there in 5 minutes!',
                'Can\'t go today... I\'ll call you later, sorry!'
            ];

            scope.markAsVisited = () => {
                scope.homeAppointment.visited = !scope.homeAppointment.visited;
            };

            scope.sendNotification = () => {
                this.notificationService.sendNotification(scope.notification);
            };

            scope.openNotificationPopup = () => {
                scope.notification =
                    new Notification(this.configService.General.DEFAULT_TENANT_ID, scope.homeAppointment.patientId, 'choose');

                scope.notificationPopup = this.$ionicPopup.show({
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
                                } else {
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

        private $ionicPopup: ionic.popup.IonicPopupService;
        private notificationService: NotificationService;
        private configService: Shared.ConfigService;
        constructor($ionicPopup: ionic.popup.IonicPopupService, notificationService: NotificationService,
            configService: Shared.ConfigService) {
            this.$ionicPopup = $ionicPopup;
            this.notificationService = notificationService;
            this.configService = configService;
        }
    }

    app.directive('cardHomeAppointment',
        ($ionicPopup: ionic.popup.IonicPopupService, notificationService: NotificationService, configService: Shared.ConfigService) =>
            new CardHomeAppointmentDirective($ionicPopup, notificationService, configService));
}
