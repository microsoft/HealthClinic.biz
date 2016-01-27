var moduleName = 'myHealth.doctors';

import DoctorsController from './controllers/doctorsController';
import DoctorDetailController from './controllers/doctorDetailController';
import DoctorsService from './services/doctorsService';
import FileBase64 from './directives/fileDirective';

angular.module(moduleName, []).
    controller('doctorsController', DoctorsController).
    controller('doctorDetailController', DoctorDetailController).
    service('doctorsService', DoctorsService).
    directive('fileBase64', FileBase64);

export default moduleName;