var MyHealth;
(function (MyHealth) {
    var Clinics;
    (function (Clinics) {
        var Application;
        (function (Application) {
            var app = Application.getModule();
            var ClinicsListController = (function () {
                function ClinicsListController($scope, $rootScope, dataService) {
                    $rootScope.loading = true;
                    dataService.getClinics()
                        .then(function (clinics) {
                        $scope.clinics = clinics;
                        if (!$scope.clinics.length) {
                            $scope.noData = true;
                        }
                    })
                        .finally(function () {
                        $rootScope.loading = false;
                    });
                }
                return ClinicsListController;
            })();
            app.controller('clinicsListController', ClinicsListController);
        })(Application = Clinics.Application || (Clinics.Application = {}));
    })(Clinics = MyHealth.Clinics || (MyHealth.Clinics = {}));
})(MyHealth || (MyHealth = {}));
//# sourceMappingURL=clinicsListController.js.map