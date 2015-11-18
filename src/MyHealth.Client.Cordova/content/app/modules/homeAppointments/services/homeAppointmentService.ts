module MyHealth.Client.Cordova.Application.HomeAppointments {

    var app = getModule();

    export class HomeAppointmentService {

        private $rootScope: any;
        private dataService: any;
        constructor($rootScope: any, dataService: Shared.DataService) {
            this.$rootScope = $rootScope;
            this.dataService = dataService;
        }

        private homeAppointments: HomeAppointment[] = new Array<HomeAppointment>();
        private patients: Patient[] = new Array<Patient>();
        private homeAppointmentById: any = [];
        private patientById: any = [];

        private digestHomeAppointmentData(data: Array<any>) {
            data.forEach((homeAppointmentData) => {
                if (this.homeAppointmentById[homeAppointmentData.appointmentId]) {
                    this.homeAppointmentById[homeAppointmentData.appointmentId].deserialize(homeAppointmentData);
                } else {
                    var homeAppointment = new HomeAppointment().deserialize(homeAppointmentData);
                    this.homeAppointmentById[homeAppointment.appointmentId] = homeAppointment;
                    this.homeAppointments.push(homeAppointment);
                }
                if (homeAppointmentData.patient) {
                    this.digestPatientData([homeAppointmentData.patient]);
                    var appoID = homeAppointmentData.appointmentId;
                    var patID = homeAppointmentData.patient.patientId;
                    this.homeAppointmentById[appoID].patient = this.patientById[patID];
                }
            });
        }

        private digestPatientData(data: Array<any>) {
            data.forEach((patientData) => {
                if (this.patientById[patientData.patientId]) {
                    this.patientById[patientData.patientId].deserialize(patientData);
                } else {
                    var patient = new Patient().deserialize(patientData);
                    this.patientById[patient.patientId] = patient;
                    this.patients.push(patient);
                }
            });
        }

        public get(id: any = null) {
            if (id) {
                if (!this.homeAppointmentById[id]) {
                    this.homeAppointmentById[id] = new HomeAppointment();
                }
                return this.homeAppointmentById[id];
            } else {
                return this.homeAppointments;
            }
        }

        public update() {
            this.dataService.getHomeAppointments().then((result: any) => {
                this.digestHomeAppointmentData(result);
                this.$rootScope.$broadcast('homeAppointmentUpdated');
            });
        }

        public updateAppointment(appointment: any) {
            this.dataService.updateAppointment(appointment.serialize()).then((result: any) => {
                this.$rootScope.$broadcast('homeAppointmentUpdated');
            });
        }

    }

    app.service('homeAppointmentService', HomeAppointmentService);
}
