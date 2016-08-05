class DetailController {
    constructor($scope, $rootScope, $stateParams, $state, doctorsService, toasterService, modalService) {

        var doctorId = $stateParams.id;
        $scope.editMode = doctorId !== undefined;
        var tenantId;

        $scope.doctor = {
            CreatedAt: new Date()
        };

        if ($scope.editMode) {
            $rootScope.loading = true;
            doctorsService.getDoctor(doctorId)
                .then((response) => {
                    $scope.doctor = response.data;
                    $scope.doctor.Picture = `data:image/png;base64,${$scope.doctor.Picture}`;
                })
                .catch((error) => {
                    toasterService.showServerError(error);
                })
                .finally(() => {
                    $rootScope.loading = false;
                });
        } else {
            $rootScope.loading = true;
            doctorsService.getTenant()
                .then(function(response) {
                    tenantId = response.data;
                })
                .catch((error) => {
                    toasterService.showServerError(error);
                })
                .finally(() => {
                    $rootScope.loading = false;
                });
        }

        $scope.navigateBack = () => {
            $state.transitionTo('doctors');
        };

        $scope.nagivateToPatientList = () => {
            $state.transitionTo('patients');
        };

        $scope.removeDoctor = () => {
            modalService.showConfirmModal({
                messages: {
                    title: 'Remove doctor',
                    body: 'Are you sure you want to remove the doctor?',
                    ok: 'Yes, remove',
                    cancel: 'Cancel'
                }
            })
           .then(() => {
               $rootScope.loading = true;
               doctorsService.remove(doctorId)
                   .then((response) => {
                       if (response.status === 200) {
                           $state.transitionTo('doctors');
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
            if ($scope.doctor.picture) {
                $scope.doctor.picture = $scope.doctor.picture.split(',')[1];
            }

            if (!$scope.editMode) {
                $scope.doctor.tenantId = tenantId;
                $rootScope.loading = true;
                doctorsService.add($scope.doctor)
                    .then((response) => {
                        if (response.status === 200) {
                            $scope.navigateBack();
                        }
                    })
                    .catch((error) => {
                        toasterService.showServerError(error);
                    })
                    .finally(() => {
                        $rootScope.loading = false;
                    });
            } else {
                $rootScope.loading = true;
                doctorsService.update($scope.doctor)
                    .then((response) => {
                        if (response.status === 200) {
                            $scope.navigateBack();
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

export default DetailController;