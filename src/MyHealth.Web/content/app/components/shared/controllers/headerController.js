const STATE = new WeakMap();

class HeaderController {
    constructor($state, $rootScope, $http, $timeout) {
        var vm = this;
        STATE.set(this, $state);

        var stateChangeCalled = false;

        $timeout(() => {
            if(stateChangeCalled){return;}
            this.title = $state.current.name !== 'default' ? $state.current.name : '';
            vm.viewName = $state.current.name;
        }, 100);

        $rootScope.$on('$stateChangeStart',
            (e, toState, toParams, fromState, fromParams) => {
                stateChangeCalled = true;
                this.title = toState.name !== 'default' ? toState.name : '';
                vm.viewName = toState.name;
                $rootScope.menuOpen = false;
            });

        $http({
            method: 'GET',
            url: '/api/users/current/user'
        }).then((response) => {
            vm.userName = response.data;
        });

        $http({
            method: 'GET',
            url: '/api/users/current/claims'
        }).then((response) => {
            vm.canManageUsers = response.data.ManageUsers || false;
            vm.canManageTenants = response.data.ManageTenants || false;
        });
    }
}

HeaderController.$inject = ['$state', '$rootScope', '$http', '$timeout'];
export default HeaderController;