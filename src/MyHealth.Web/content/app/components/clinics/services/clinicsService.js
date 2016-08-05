function ClinicsService($http) {
    'use strict';

    var clinics;

    return {
        getClinic,
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

    function getClinic(tenantId) {
        let url = `/api/tenants/${tenantId}`;
        return $http({
            method: 'GET',
            url: url
        });
    }

    function getList(pageSize, pageCount) {
        let handleSuccess = (response) => {
            clinics = response.data;
            return clinics;
        };
        var url = '/api/tenants/list';
        return $http({
            method: 'GET',
            url: url,
            params: {
                pageSize: pageSize,
                pageCount:pageCount
            }
        }).then(handleSuccess);
    }

    function add(tenant) {
        var url = '/api/tenants/';
        return $http({
            method: 'POST',
            url: url,
            data: {
                tenant: tenant,
                password: tenant.password || null
            }
        });
    }

    function update(tenant) {
        var url = '/api/tenants/';
        return $http({
            method: 'PUT',
            url: url,
            data: {
                tenant: tenant,
                password: tenant.password || null
            }
        });
    }

    function remove(tenantId) {
        let url = `/api/tenants/${tenantId}`;
        return $http({
            method: 'DELETE',
            url: url
        });
    }
}

export default ClinicsService;