function InitialPage($http, $q) {
    'use strict';

    return {
        getInitialState
    };

    function getInitialState() {
        return $q(function(resolve, reject){
            $http({
                method: 'GET',
                url: '/api/users/current/claims'
            }).then((response) => {

                if (response.data.ManageUsers) {
                    resolve('users');
                }else if(response.data.ManageTenants) {
                    resolve('clinics');
                }else{
                    resolve('dashboard');
                }
            });
        });
    }
}

export default InitialPage;