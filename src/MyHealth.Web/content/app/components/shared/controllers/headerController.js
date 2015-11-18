const STATE = new WeakMap();

class HeaderController {
    constructor($state, $rootScope, $http, $timeout) {
        var vm = this;
        STATE.set(this, $state);

        $timeout(() => {
            this.title = $state.current.name;
            vm.viewName = $state.current.name;
        }, 10);

        $rootScope.$on('$stateChangeStart',
            (e, toState, toParams, fromState, fromParams) => {
                this.title = toState.name;
                vm.viewName = toState.name;
                $rootScope.menuOpen = false;
            });

        $http({
            method: 'GET',
            url: '/api/users/current/user'
        }).then((response) => {
            vm.userName = response.data;
        });

    }
}

HeaderController.$inject = ['$state', '$rootScope', '$http', '$timeout'];
export default HeaderController;