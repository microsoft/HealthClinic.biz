const STATE = new WeakMap();

class MonthlyCalendarDays {

    constructor($state) {
        this.restrict = 'A';
        STATE.set(this, $state);
    }

    link($scope) {

        const className = 'calendar-event-day';
        const datetimeFormat = 'YYYY-MM-DD';
        const $calendar = $('.stress-calendar');

        var setEventBehaviour = (events) => {
            events.forEach((event) => {
                var day = moment(event.start);
                $calendar.find('.fc-bg').find(`[data-date="${day.format(datetimeFormat)}"]`)
                    .addClass(event.ownClassName)
                    .click(() => {
                        STATE.get(MonthlyCalendarDays.instance).go('calendar.daily', { year: day.year(), month: day.month() + 1, day: day.date() });
                    });

                $calendar.find('.fc-content-skeleton').find(`[data-date="${day.format(datetimeFormat)}"]`)
                    .addClass(className);
            });
        };

        $scope.$watch('eventsRendered', function(newVal, oldVal) {
            if (newVal && newVal !== oldVal) {
                setEventBehaviour(newVal);
            }
        }, true);
    }

    static directiveFactory($state) {
        MonthlyCalendarDays.instance = new MonthlyCalendarDays($state);
        return MonthlyCalendarDays.instance;
    }
}

MonthlyCalendarDays.directiveFactory.$inject = ['$state'];

export default MonthlyCalendarDays.directiveFactory;