class HeaderBar {
    constructor() {
        this.restrict = 'E';
        this.templateUrl = '/app/components/shared/directives/headerBar/headerBarTemplate.html';
        this.controller = 'headerController';
        this.controllerAs = 'vm';
    }

    link(scope) {
        $(document).bind('click', (event) => {
            if (!scope.menuOpen) {
                event.stopPropagation();
            } else {
                scope.$apply(() => {
                    scope.menuOpen = false;
                });
            }
        });

        $('.header-hamburguer, #sidebar-container').bind('click', (event) => {
            event.stopPropagation();
        });
    }

    static directiveFactory() {
        HeaderBar.instance = new HeaderBar();
        return HeaderBar.instance;
    }
}

export default HeaderBar.directiveFactory;