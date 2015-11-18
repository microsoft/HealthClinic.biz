var moduleName = 'myHealth.dashboard';

import DashboardController from './controllers/dashboardController';
import DashboardService from './services/dashboardService';
import MHChart from './directives/MHChartDirective';

angular.module(moduleName, []).
    directive('chart', MHChart).
    controller('dashboardController', DashboardController).
    service('dashboardService', DashboardService);

export default moduleName;