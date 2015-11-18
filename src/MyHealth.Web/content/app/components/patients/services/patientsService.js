function PatientsService($http) {
    'use strict';

    var patients;

    return {
        getList,
        remove
    };

    function getTenant() {
        return $http({
            method: 'GET',
            url: '/api/users/current/tenant'
        });
    }

    function getList(pageSize, pageCount) {
        let handleSuccess = (response) => {
            patients = response.data;
            return patients;
        };

        return getTenant().then(function(response) {
            var tenantId = response.data;
            var url = '/api/patients';
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

    function remove(patientId) {
        return getTenant().then(function(response) {
            var tenantId = response.data;
            let url = `/api/patients/${patientId}`;
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

export default PatientsService;