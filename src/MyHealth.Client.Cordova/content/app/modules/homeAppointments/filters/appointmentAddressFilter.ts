module MyHealth.Client.Cordova.Application.HomeAppointments {

    var app = getModule();

    class AppointmentAddressFilter {
        constructor() {
            var filter = () => {
                return (input: any) => {
                    if (typeof (input) === 'string') {
                        var commaPosition = input.indexOf(',');
                        if (commaPosition >= 0) {
                            return input.substr(0, commaPosition).trim() + '<br>' + input.substr(commaPosition + 1).trim();
                        } else {
                            return input;
                        }
                    } else {
                        return input;
                    }
                };
            };
            return filter();
        }
    }

    app.filter('appointmentAddress', AppointmentAddressFilter);
}
