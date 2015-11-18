function DoctorsService($http) {
    'use strict';

    var doctors;

    return {
        getTenant,
        getDoctor,
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

    function getDoctor(doctorId) {
        return getTenant().then((response) => {
            var tenantId = response.data;
            let url = `/api/doctors/${doctorId}`;
            return $http({
                method: 'GET',
                url: url,
                headers: {
                    TenantId: tenantId
                }
            });
        });
    }

    function getList(pageSize, pageCount) {
        let handleSuccess = (response) => {
            doctors = response.data;
            return doctors;
        };

        return getTenant().then((response) => {
            var tenantId = response.data;
            var url = '/api/doctors';
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

    function add(doctor) {
        return getTenant().then(function(response) {
            var tenantId = response.data;
            var url = '/api/doctors/';
            return $http({
                method: 'POST',
                url: url,
                data: doctor,
                headers: {
                    TenantId: tenantId
                }
            });
        });
    }

    function update(doctor) {
        return getTenant().then(function(response) {
            var tenantId = response.data;
            var url = '/api/doctors/';
            return $http({
                method: 'PUT',
                url: url,
                data: doctor,
                headers: {
                    TenantId: tenantId
                }
            });
        });
    }

    function remove(doctorId) {
        return getTenant().then(function(response) {
            var tenantId = response.data;
            var url = '/api/doctors/' + doctorId;
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

export default DoctorsService;