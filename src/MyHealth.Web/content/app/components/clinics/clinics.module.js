var moduleName = 'myHealth.clinics';

import ClinicsController from './controllers/clinicsController';
import ClinicDetailController from './controllers/clinicDetailController';
import ClinicsService from './services/clinicsService';

angular.module(moduleName, []).
    controller('clinicsController', ClinicsController).
    controller('clinicDetailController', ClinicDetailController).
    service('clinicsService', ClinicsService);

export default moduleName;