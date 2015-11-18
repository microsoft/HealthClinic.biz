module MyHealth.Client.Cordova.Application.Shared {

    export class Doctor {
        address: string;
        currentRoomNumber: number;
        description: string;
        doctorId: number;
        email: string;
        id: string;
        mobile: string;
        name: string;
        patientCount: number;
        phone: string;
        picture: string;
        speciality: string;
        synchronized: boolean;
        tenantId: number;

        deserialize(data: any) {
            this.address = data.address;
            this.currentRoomNumber = data.currentRoomNumber;
            this.description = data.description;
            this.doctorId = data.doctorId;
            this.email = data.email;
            this.id = data.id;
            this.mobile = data.mobile;
            this.name = data.name;
            this.patientCount = data.patientCount;
            this.phone = data.phone;
            this.picture = data.picture;
            this.speciality = data.speciality;
            this.synchronized = data.synchronized;
            this.tenantId = data.tenantId;
            return this;
        }
    }
}
