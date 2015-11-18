module MyHealth.Client.Cordova.Application.HomeAppointments {
    export class Patient {
        address: string;
        age: number;
        bloodType: string;
        clinicId: string;
        dateOfBirth: Date;
        email: string;
        gender: string;
        height: number;
        id: string;
        name: string;
        patientId: number;
        phone: string;
        picture: string;
        tenantId: number;
        weight: number;

        deserialize(data : any) {
            this.address = data.address;
            this.age = data.age;
            this.bloodType = data.bloogType;
            this.clinicId = data.clinicId;
            this.dateOfBirth = new Date(data.dateOfBirth) || data.dateOfBirth;
            this.email = data.email;
            this.gender = data.gender;
            this.height = data.height;
            this.id = data.id;
            this.name = data.name;
            this.patientId = data.patientId;
            this.phone = data.phone;
            this.picture = data.picture;
            this.tenantId = data.tenantId;
            this.weight = data.weight;
            return this;
        }
    }
}
