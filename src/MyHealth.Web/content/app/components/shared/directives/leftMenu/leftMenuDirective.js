class LeftMenu {
    constructor() {
        this.restrict = 'E';
        this.templateUrl = '/app/components/shared/directives/leftMenu/leftMenuTemplate.html';
        this.controller = 'headerController';
        this.controllerAs = 'vm';
    }

    static directiveFactory() {
        LeftMenu.instance = new LeftMenu();
        return LeftMenu.instance;
    }
}

export default LeftMenu.directiveFactory;