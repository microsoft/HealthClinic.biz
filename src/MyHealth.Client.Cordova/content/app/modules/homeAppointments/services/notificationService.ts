module MyHealth.Client.Cordova.Application.HomeAppointments {

    var app = getModule();

    export class NotificationService {

        $rootScope: any;
        dataService: Shared.DataService;

        sendNotification(notification: Notification) {
            this.dataService.sendNotification(notification.serialize());
        }

        constructor($rootScope: any, dataService: Shared.DataService) {
            this.$rootScope = $rootScope;
            this.dataService = dataService;
        }

    }

    app.service('notificationService', NotificationService);
}
