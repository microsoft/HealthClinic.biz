var moduleName = 'myHealth.patients';

import PatientsController from './controllers/patientsController';
import PatientsService from './services/patientsService';

angular.module(moduleName, []).
    controller('patientsController', PatientsController).
    service('patientsService', PatientsService);

export default moduleName;