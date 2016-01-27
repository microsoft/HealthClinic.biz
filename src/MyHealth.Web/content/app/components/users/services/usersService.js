function UsersService($http) {
    'use strict';

    var users;

    return {
        getUser,
        getList,
        add,
        update,
        remove
    };

    function getTenant() {
        return $http({
            method: 'GET',
            url: '/api/users/current/tenant'
        });
    }

    function getUser(username) {
        let url = `/api/users/${username}`;
        return $http({
            method: 'GET',
            url: url
        });
    }

    function getList(pageSize, pageCount) {
        let handleSuccess = (response) => {
            users = response.data;
            return users;
        };

        return getTenant().then(function(response) {
            var tenantId = response.data;
            var url = '/api/users';
            return $http({
                method: 'GET',
                url: url,
                params: {
                    pageSize: pageSize,
                    pageCount:pageCount
                },
                headers: {
                    TenantId: tenantId
                }
            }).then(handleSuccess);
        });
    }

    function add(user) {
        var url = '/api/users/';
        return $http({
            method: 'POST',
            url: url,
            data: {
                user: user,
                password: user.newPassword || null
            }
        });
    }

    function update(user) {
        var url = '/api/users/';
        return $http({
            method: 'PUT',
            url: url,
            data: {
                user: user,
                password: user.newPassword || null
            }
        });
    }

    function remove(username) {
        return getTenant().then(function(response) {
            var tenantId = response.data;
            let url = `/api/users/${username}`;
            return $http({
                method: 'DELETE',
                url: url,
                headers: {
                    TenantId: tenantId
                }
            });
        });
    }
}

export default UsersService;