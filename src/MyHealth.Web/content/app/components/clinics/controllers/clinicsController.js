class ClinicsController {
    constructor($scope, $rootScope, $state, clinicsService, toasterService, modalService) {

        const pageSize = 4;
        var pageCount = 0;

        $scope.clinics = [];

        $scope.getList = () => {
            $rootScope.loading = true;
            clinicsService.getList(pageSize, pageCount)
                .then((clinics) => {
                    if (clinics.length < pageSize) {
                        $scope.noMoreData = true;
                    }
                    clinics.forEach((clinic) => {
                        $scope.clinics.push(clinic);
                    });
                    pageCount ++;
                    $scope.refreshSelectedItems();

                    if (!$scope.clinics.length) {
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

        $scope.nagivateToDetail = (tenantId) => {
            tenantId ? $state.transitionTo('clinic', { id: tenantId }) : $state.transitionTo('clinic');
        };

        $scope.refreshSelectedItems = (all) => {
            if (all) {
                $scope.clinics.forEach((clinic) => {
                    clinic.selected = $scope.everySelected;
                });
            }

            $scope.anySelected = $scope.clinics.some((clinic) => {
                return clinic.selected;
            });

            $scope.everySelected = $scope.clinics.every((clinic) => {
                return clinic.selected;
            });
        };

        $scope.remove = (clinic) => {
            var severalClinics = clinic === undefined;

            modalService.showConfirmModal({
                messages: {
                    title: `Remove clinic${severalClinics?'s':''}`,
                    body: `Are you sure you want to remove the selected clinic${severalClinics?'s':''}?`,
                    ok: 'Yes, remove',
                    cancel: 'Cancel'
                }
            })
            .then(() => {
                var tenantIdList;
                if (clinic) {
                    tenantIdList = [clinic.tenantId];
                } else {
                    tenantIdList = $scope.clinics
                        .map((clinicItem) => {
                            if (clinicItem.selected) {
                                return clinicItem.tenantId;
                            }
                            return null;
                        });
                }

                $rootScope.loading = true;
                $rootScope.loadingInfo = `Removing the clinic${severalClinics?'s':''} and all the related data.\r\nThis could take a while, please wait.`;

                tenantIdList.forEach((tenantId) => {
                    clinicsService.remove(tenantId)
                        .then((response) => {
                            if (response.status === 200) {
                                $scope.clinics.forEach((clinicItem) => {
                                    if (tenantId === clinicItem.tenantId) {
                                        let index = $scope.clinics.indexOf(clinicItem);
                                        $scope.clinics.splice(index, 1);
                                    }
                                });
                            }
                        })
                        .catch((error) => {
                            toasterService.showServerError(error);
                        })
                        .finally(() => {
                            $rootScope.loading = false;
                            $rootScope.loadingInfo = null;
                        });
                });

                $scope.refreshSelectedItems();
            });
        };

        $scope.getList();
    }

}

export default ClinicsController;