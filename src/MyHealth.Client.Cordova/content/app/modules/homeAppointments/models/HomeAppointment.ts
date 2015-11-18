module MyHealth.Client.Cordova.Application.HomeAppointments {
    export class HomeAppointment {
        address: string;
        appointmentId: number;
        dateTime: Date;
        description: string;
        doctorId: number;
        id: string;
        isUrgent: boolean;
        latitude: number;
        longitude: number;
        geolocation: Object = {latitude: 0, longitude: 0};
        patientId: number;
        speciality: number;
        tenantId: number;
        visited: boolean;

        deserialize(data : any) {
            this.address = data.address;
            this.appointmentId = data.appointmentId;
            this.dateTime = data.dateTime;
            this.description = data.description;
            this.doctorId = data.doctorId;
            this.id = data.id;
            this.isUrgent = data.isUrgent;
            this.latitude = data.latitude;
            this.longitude = data.longitude;
            this.geolocation = { latitude: this.latitude, longitude: this.longitude };
            this.patientId = data.patientId;
            this.speciality = data.speciality;
            this.tenantId = data.tenantId;
            this.visited = data.visited;
            return this;
        }

        serialize() {
            return {
                address: this.address,
                appointmentId: this.appointmentId,
                dateTime: this.dateTime,
                description: this.description,
                doctorId: this.doctorId,
                id: this.id,
                isUrgent: this.isUrgent,
                latitude: this.latitude,
                longitude: this.longitude,
                patientId: this.patientId,
                speciality: this.speciality,
                tenantId: this.tenantId,
                visited: this.visited
            };
        }
    }
}
