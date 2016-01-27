module MyHealth.Client.Cordova.Application.HomeAppointments {
    export class Notification {
        tenantId: Number;
        patientId: Number;
        message: String;

        constructor(tenantId: Number, patientId: Number, message: String) {
            this.patientId = patientId;
            this.message = message;
            this.tenantId = tenantId;
        }

        serialize() {
            return {
                tenantId: this.tenantId.toString(),
                patientId: this.patientId.toString(),
                message: this.message
            };
        }
    }
}
