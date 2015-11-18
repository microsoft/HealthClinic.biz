module MyHealth.Client.Cordova.Application.HomeAppointments {
    export class Notification {
        patientId: Number;
        message: String;

        constructor(patientId: Number, message: String) {
            this.patientId = patientId;
            this.message = message;
        }

        serialize() {
            return {
                patientId: this.patientId.toString(),
                message: this.message
            };
        }
    }
}
