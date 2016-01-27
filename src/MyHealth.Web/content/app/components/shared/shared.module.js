var moduleName = 'myHealth.shared';

import LeftMenuDirective from './directives/leftMenu/leftMenuDirective';
import HeaderBarDirective from './directives/headerBar/headerBarDirective';
import HeaderController from './controllers/headerController';
import ToasterService from './services/toasterService';
import ModalService from './services/modalService';
import InitialPageService from './services/initialPageService';
import ExceptionHandler from './services/exceptionHandler';
import CamelCaseFilter from './filters/camelCaseFilter';

angular.module(moduleName, ['ui.bootstrap', 'toaster']).
    directive('leftMenu', LeftMenuDirective).
    directive('headerBar', HeaderBarDirective).
    controller('headerController', HeaderController).
    service('toasterService', ToasterService).
    service('modalService', ModalService).
    service('initialPageService', InitialPageService).
    factory('$exceptionHandler', ExceptionHandler).
    filter('camelCase', CamelCaseFilter);

export default moduleName;