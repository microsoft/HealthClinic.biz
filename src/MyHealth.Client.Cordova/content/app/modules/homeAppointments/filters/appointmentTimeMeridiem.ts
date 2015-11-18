module MyHealth.Client.Cordova.Application.HomeAppointments {

    var app = getModule();

    class AppointmentTimeFilterMeridiem {
        constructor() {
            var filter = () => {
                return (input: any) => {
                    if (input) {
                        var time = moment(input);
                        var meridiem = time.format('a');
                        return meridiem;
                    } else {
                        return '';
                    }
                };
            };
            return filter();
        }
    }

    app.filter('appointmentTimeMeridiem', AppointmentTimeFilterMeridiem);
}
