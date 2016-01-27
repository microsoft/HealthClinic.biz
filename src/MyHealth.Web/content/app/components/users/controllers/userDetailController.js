class UserDetailController {
    constructor($scope, $rootScope, $stateParams, $state, usersService, toasterService, modalService) {

        var username = $stateParams.username;
        $scope.editMode = username !== undefined;

        $scope.user = {};

        if ($scope.editMode) {
            $rootScope.loading = true;
            usersService.getUser(username)
                .then((response) => {
                    $scope.user = response.data;
                    $scope.user.Picture = `data:image/png;base64,${$scope.user.Picture}`;
                })
                .catch((error) => {
                    toasterService.showServerError(error);
                })
                .finally(() => {
                    $rootScope.loading = false;
                });
        }

        $scope.navigateBack = () => {
            $state.transitionTo('users');
        };

        $scope.removeUser = () => {
            modalService.showConfirmModal({
                messages: {
                    title: 'Remove user',
                    body: 'Are you sure you want to remove the user?',
                    ok: 'Yes, remove',
                    cancel: 'Cancel'
                }
            })
           .then(() => {
               $rootScope.loading = true;
               usersService.remove(username)
                   .then((response) => {
                       if (response.status === 200 && response.data.status) {
                           $state.transitionTo('users');
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
            if ($scope.user.Picture) {
                $scope.user.Picture = $scope.user.Picture.split(',')[1];
            }

            if (!$scope.editMode) {
                $rootScope.loading = true;
                usersService.add($scope.user)
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
            } else {
                $rootScope.loading = true;
                usersService.update($scope.user)
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

export default UserDetailController;