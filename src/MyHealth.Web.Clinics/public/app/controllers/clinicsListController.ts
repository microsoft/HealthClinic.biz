module MyHealth.Clinics.Application {

    var app = getModule();

    class ClinicsListController {
        constructor($scope: any, $rootScope: any, dataService: DataService) {
            $rootScope.loading = true;
            dataService.getClinics()
                .then((clinics: IClinic[]) => {
                    $scope.clinics = clinics;
                    if (!$scope.clinics.length) {
                        $scope.noData = true;
                    }
                })
                .finally(() => {
                   $rootScope.loading = false;
                });
        }
    }

    app.controller('clinicsListController', ClinicsListController);
}
