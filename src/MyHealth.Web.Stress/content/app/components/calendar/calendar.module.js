var moduleName = 'myHealth.calendar';

import DailyGraphDirective from './directives/dailyGraph';
import MonthlyCalendarDaysDirective from './directives/monthlyCalendarDays';
import StressfulBtnDirective from './directives/stressfulBtn';
import MonthlyCalendarController from './controllers/monthlyCalendarController';
import DailyCalendarController from './controllers/dailyCalendarController';
import CalendarService from './services/calendarService';


angular.module(moduleName, []).
    directive('stressfulBtn', StressfulBtnDirective).
    directive('dailyGraph', DailyGraphDirective).
    directive('monthlyCalendarDays', MonthlyCalendarDaysDirective).
    controller('monthlyCalendarController', MonthlyCalendarController).
    controller('dailyCalendarController', DailyCalendarController).
    service('calendarService', CalendarService);


export default moduleName;