module MyHealth.Client.Cordova.Application.HomeAppointments {

    var app = getModule();

    class AppointmentTimeFilter {
        constructor() {
            var filter = () => {
                return (input: any) => {
                    if (input) {
                        var time = moment(input);
                        return time.format('h:mm');
                    } else {
                        return '';
                    }
                };
            };
            return filter();
        }
    }

    app.filter('appointmentTime', AppointmentTimeFilter);
}
