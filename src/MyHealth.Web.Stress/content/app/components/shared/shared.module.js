var moduleName = 'myHealth.shared';

import ToasterService from './services/toasterService';

angular.module(moduleName, []).
    service('toasterService', ToasterService);


export default moduleName;