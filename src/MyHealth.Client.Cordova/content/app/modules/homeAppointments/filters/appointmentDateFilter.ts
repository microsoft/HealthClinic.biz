module MyHealth.Client.Cordova.Application.HomeAppointments {

    var app = getModule();

    class AppointmentDateFilter {
        constructor() {
            var filter = () => {
                return (input: any) => {
                    if (input) {
                        var date = moment(input);
                        var diff = date.diff(moment(), 'days');
                        if (diff === 0) {
                            return 'Today';
                        } else {
                            return date.format('MMM D, YYYY');
                        }
                    } else {
                        return '';
                    }
                };
            };
            return filter();
        }
    }

    app.filter('appointmentDate', AppointmentDateFilter);
}
