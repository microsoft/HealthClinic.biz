module MyHealth.Client.Cordova.Application.HomeAppointments {

    var app = getModule();

    class StaticBingMapDirective implements ng.IDirective {

        public restrict: string = 'E';
        public templateUrl: string = 'templates/homeAppointments/views/staticBingMap.html';
        public scope : any = {
            center: '=',
            zoom: '=',
            height: '='
        };
        public link: ng.IDirectiveLinkFn = (scope: any, element: ng.IAugmentedJQuery) => {
            scope.width = element.width();
            scope.bingApiKey = this.configService.BingMaps.API_KEY;
        };

        private configService: Shared.ConfigService;
        constructor(configService: Shared.ConfigService) {
            this.configService = configService;
        }

    };

    app.directive('staticBingMap', (configService: Shared.ConfigService) => new StaticBingMapDirective(configService));
}
