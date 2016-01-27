class UsersController {
    constructor($scope, $rootScope, $state, usersService, toasterService, modalService) {

        const pageSize = 4;
        var pageCount = 0;

        $scope.users = [];

        $scope.getList = () => {
            $rootScope.loading = true;
            usersService.getList(pageSize, pageCount)
                .then((users) => {
                    if (users.length < pageSize) {
                        $scope.noMoreData = true;
                    }
                    users.forEach((user) => {
                        $scope.users.push(user);
                    });
                    pageCount ++;
                    $scope.refreshSelectedItems();

                    if (!$scope.users.length) {
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

        $scope.nagivateToDetail = (username) => {
            username ? $state.transitionTo('user', { username: username }) : $state.transitionTo('user');
        };

        $scope.refreshSelectedItems = (all) => {
            if (all) {
                $scope.users.forEach((user) => {
                    user.selected = $scope.everySelected;
                });
            }

            $scope.anySelected = $scope.users.some((user) => {
                return user.selected;
            });

            $scope.everySelected = $scope.users.every((user) => {
                return user.selected;
            });
        };

        $scope.remove = (user) => {
            var severalUsers = user === undefined;

            modalService.showConfirmModal({
                messages: {
                    title: `Remove user${severalUsers?'s':''}`,
                    body: `Are you sure you want to remove the selected user${severalUsers?'s':''}?`,
                    ok: 'Yes, remove',
                    cancel: 'Cancel'
                }
            })
            .then(() => {
                var usernameList;
                if (user) {
                    usernameList = [user.UserName];
                } else {
                    usernameList = $scope.users
                        .map((userItem) => {
                            if (userItem.selected) {
                                return userItem.UserName;
                            }
                            return null;
                        });
                }

                usernameList.forEach((username) => {
                    usersService.remove(username)
                        .then((response) => {
                            if (response.status === 200) {
                                $scope.users.forEach((userItem) => {
                                    if (username === userItem.UserName) {
                                        let index = $scope.users.indexOf(userItem);
                                        $scope.users.splice(index, 1);
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

export default UsersController;