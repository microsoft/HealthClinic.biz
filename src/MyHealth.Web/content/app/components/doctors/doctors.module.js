var moduleName = 'myHealth.doctors';

import DoctorsController from './controllers/doctorsController';
import DetailController from './controllers/detailController';
import DoctorsService from './services/doctorsService';
import FileBase64 from './directives/fileDirective';

angular.module(moduleName, []).
    controller('doctorsController', DoctorsController).
    controller('detailController', DetailController).
    service('doctorsService', DoctorsService).
    directive('fileBase64', FileBase64);

export default moduleName;