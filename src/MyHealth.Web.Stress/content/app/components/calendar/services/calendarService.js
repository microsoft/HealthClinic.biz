function CalendarService($http, $window) {
    'use strict';

    const user = $window.MY_HEALTH.config.userEmail;

    return {
        getMonthInformation,
        getDayInformation
    };

    function getMonthInformation(year, month) {
        return $http({
            method: 'GET',
            url: `/api/calendars/user/${user}/year/${year}/month/${month}`
        });
    }

    function getDayInformation(year, month, day) {
        return $http({
            method: 'GET',
            url: `/api/calendars/user/${user}/year/${year}/month/${month}/day/${day}`
        });
    }
}

export default CalendarService;