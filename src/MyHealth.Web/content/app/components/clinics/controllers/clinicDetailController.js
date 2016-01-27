class ClinicDetailController {
    constructor($scope, $rootScope, $stateParams, $state, clinicsService, toasterService, modalService) {

        var tenantId = $stateParams.id;
        $scope.editMode = tenantId !== undefined;

        $scope.clinic = {};

        if ($scope.editMode) {
            $rootScope.loading = true;
            clinicsService.getClinic(tenantId)
                .then((response) => {
                    $scope.clinic = response.data;
                })
                .catch((error) => {
                    toasterService.showServerError(error);
                })
                .finally(() => {
                    $rootScope.loading = false;
                });
        }

        $scope.navigateBack = () => {
            $state.transitionTo('clinics');
        };

        $scope.removeClinic = () => {
            modalService.showConfirmModal({
                messages: {
                    title: 'Remove clinic',
                    body: 'Are you sure you want to remove the clinic?',
                    ok: 'Yes, remove',
                    cancel: 'Cancel'
                }
            })
           .then(() => {
               $rootScope.loading = true;
               clinicsService.remove(tenantId)
                   .then((response) => {
                       if (response.status === 200) {
                           $scope.navigateBack();
                       } else {
                           toasterService.showServerError();
                       }
                   })
                   .catch((error) => {
                       toasterService.showServerError(error);
                   })
                   .finally(() => {
                       $rootScope.loading = false;
                   });
           });
        };

        $scope.save = () => {
            if (!$scope.editMode) {
                $rootScope.loading = true;
                $rootScope.loadingInfo = `Generating example data.\r\nThis could take a while, please wait.`;
                clinicsService.add($scope.clinic)
                    .then((response) => {
                        if (response.status === 200 && response.data.status) {
                            $scope.navigateBack();
                        } else {
                            toasterService.showServerError(response.data.message);
                        }
                    })
                    .catch((error) => {
                        toasterService.showServerError(error);
                    })
                    .finally(() => {
                        $rootScope.loading = false;
                        $rootScope.loadingInfo = null;
                    });
            } else {
                $rootScope.loading = true;
                clinicsService.update($scope.clinic)
                    .then((response) => {
                        if (response.status === 200 && response.data.status) {
                            $scope.navigateBack();
                        } else {
                            toasterService.showServerError(response.data.message);
                        }
                    })
                    .catch((error) => {
                        toasterService.showServerError(error);
                    })
                    .finally(() => {
                        $rootScope.loading = false;
                    });
            }
        };
    }
}

export default ClinicDetailController;