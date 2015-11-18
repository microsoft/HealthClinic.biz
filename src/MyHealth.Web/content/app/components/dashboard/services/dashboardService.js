function DashboardService($http) {
    'use strict';

    return {
        getSummary,
        getExpenses,
        getPatients
    };

    function getSummary() {
        let handleSuccess = (response) => {
            var summary = response.data;
            return summary;
        };

        var tenantId = '';

        return $http({
            method: 'GET',
            url: '/api/users/current/tenant'
        }).then(function(response) {
            tenantId = response.data;
            var url = '/api/reports/clinicsummary';
            return $http({
                method: 'GET',
                url: url,
                headers: {
                    TenantId: tenantId
                }
            }).then(handleSuccess);
        });
    }

    function getExpenses(year) {
        let handleSuccess = (response) => {
            var expenses = response.data;
            return expenses;
        };

        var tenantId = '';

        return $http({
            method: 'GET',
            url: '/api/users/current/tenant'
        }).then(function(response) {
            tenantId = response.data;
            var url = '/api/reports/expenses/' + year;
            return $http({
                method: 'GET',
                url: url,
                headers: {
                    TenantId: tenantId
                }
            }).then(handleSuccess);
        });
    }

    function getPatients(year) {
        let handleSuccess = (response) => {
            var patients = response.data;
            return patients;
        };

        var tenantId = '';

        return $http({
            method: 'GET',
            url: '/api/users/current/tenant'
        }).then(function(response) {
            tenantId = response.data;
            var url = '/api/reports/patients/' + year;
            return $http({
                method: 'GET',
                url: url,
                headers: {
                    TenantId: tenantId
                }
            }).then(handleSuccess);
        });
    }
}

export default DashboardService;