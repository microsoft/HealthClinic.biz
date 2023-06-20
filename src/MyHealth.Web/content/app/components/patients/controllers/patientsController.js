class PatientsController {
    constructor($scope, $rootScope, patientsService, toasterService, modalService) {

        const pageSize = 4;
        var pageCount = 0;

        $scope.patients = [];

        $scope.getList = () => {
            $rootScope.loading = true;
            patientsService.getList(pageSize, pageCount)
                .then((patients) => {
                    if (patients.length < pageSize) {
                        $scope.noMoreData = true;
                    }
                    patients.forEach((patient) => {
                        $scope.patients.push(patient);
                    });
                    pageCount ++;
                    $scope.refreshSelectedItems();

                    if (!$scope.patients.length) {
                        $scope.noData = true;
                    }
                })
                .catch((error) => {
                    toasterService.showServerError(error);
                })
                .finally(() => {
                    $rootScope.loading = false;
                });
        };

        $scope.refreshSelectedItems = (all) => {
            if (all) {
                $scope.patients.forEach((patient) => {
                    patient.selected = $scope.everySelected;
                });
            }

            $scope.anySelected = $scope.patients.some((patient) => {
                return patient.selected;
            });

            $scope.everySelected = $scope.patients.every((patient) => {
                return patient.selected;
            });
        };

        $scope.remove = (patient) => {
            var severalPatients = patient === undefined;

            modalService.showConfirmModal({
                messages: {
                    title: `Remove patient${severalPatients?'s':''}`,
                    body: `Are you sure you want to remove the selected patient${severalPatients?'s':''}?`,
                    ok: 'Yes, remove',
                    cancel: 'Cancel'
                }
            })
            .then(() => {
                var patientIdList;
                if (patient) {
                    patientIdList = [patient.patientId];
                } else {
                    patientIdList = $scope.patients
                        .map((patientItem) => {
                            if (patientItem.selected) {
                                return patientItem.patientId;
                            }
                            return null;
                        });
                }

                patientIdList.forEach((patientId) => {
                    patientsService.remove(patientId)
                        .then((response) => {
                            if (response.status === 200) {
                                $scope.patients.forEach((patientItem) => {
                                    if (patientId === patientItem.patientId) {
                                        let index = $scope.patients.indexOf(patientItem);
                                        $scope.patients.splice(index, 1);
                                    }
                                });
                            }
                        })
                        .catch((error) => {
                            toasterService.showServerError(error);
                        });
                });

                $scope.refreshSelectedItems();
            });
        };

        $scope.getList();
    }

}

export default PatientsController;