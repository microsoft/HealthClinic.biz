class DoctorsController {
    constructor($scope, $rootScope, $state, doctorsService, toasterService, modalService) {
        const pageSize = 4;
        var pageCount = 0;
        $scope.doctors = [];

        $scope.getList = () => {
            $rootScope.loading = true;
            doctorsService.getList(pageSize, pageCount)
                .then((doctors) => {
                    if (doctors.length < pageSize) {
                        $scope.noMoreData = true;
                    }
                    doctors.forEach((doctor) => {
                        $scope.doctors.push(doctor);
                    });
                    pageCount ++;
                    $scope.refreshSelectedItems();

                    if (!$scope.doctors.length) {
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

        $scope.nagivateToDetail = (doctorId) => {
            doctorId ? $state.transitionTo('doctor', { id: doctorId }) : $state.transitionTo('doctor');
        };

        $scope.refreshSelectedItems = (all) => {
            if (all) {
                $scope.doctors.forEach((doctor) => {
                    doctor.selected = $scope.everySelected;
                });
            }

            $scope.anySelected = $scope.doctors.some((doctor) => {
                return doctor.selected;
            });

            $scope.everySelected = $scope.doctors.every((doctor) => {
                return doctor.selected;
            });
        };

        $scope.remove = (doctor) => {
            var severalDoctors = doctor === undefined;

            modalService.showConfirmModal({
                messages: {
                    title: `Remove doctor${severalDoctors?'s':''}`,
                    body: `Are you sure you want to remove the selected doctor${severalDoctors?'s':''}?`,
                    ok: 'Yes, remove',
                    cancel: 'Cancel'
                }
            })
            .then(() => {
                var doctorIdList;
                if (doctor) {
                    doctorIdList = [doctor.doctorId];
                } else {
                    doctorIdList = $scope.doctors
                        .map((doctorItem) => {
                            if (doctorItem.selected) {
                                return doctorItem.doctorId;
                            }
                            return null;
                        });
                }

                doctorIdList.forEach((doctorId) => {
                    doctorsService.remove(doctorId)
                      .then((response) => {
                          if (response.status === 200) {
                              $scope.doctors.forEach((doctorItem) => {
                                  if (doctorId === doctorItem.doctorId) {
                                      let index = $scope.doctors.indexOf(doctorItem);
                                      $scope.doctors.splice(index, 1);
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


export default DoctorsController;