var MyHealth;
(function (MyHealth) {
    var Clinics;
    (function (Clinics) {
        var Application;
        (function (Application) {
            var app = Application.getModule();
            var DataService = (function () {
                function DataService($http) {
                    this.$http = $http;
                }
                DataService.prototype.getClinics = function () {
                    return this.$http.get('/clinics').then(function (response) {
                        return response.data;
                    });
                };
                return DataService;
            })();
            Application.DataService = DataService;
            app.service('dataService', DataService);
        })(Application = Clinics.Application || (Clinics.Application = {}));
    })(Clinics = MyHealth.Clinics || (MyHealth.Clinics = {}));
})(MyHealth || (MyHealth = {}));
//# sourceMappingURL=dataService.js.map