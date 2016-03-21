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
        private visitedHomeAppointments: HomeAppointment[] = new Array<HomeAppointment>();
        private patients: Patient[] = new Array<Patient>();
        private homeAppointmentById: any = [];
        private visitedHomeAppointmentById: any = [];
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

        private digestVisitedHomeAppointmentData(data: Array<any>) {
            data.forEach((homeAppointmentData) => {
                if (this.visitedHomeAppointmentById[homeAppointmentData.appointmentId]) {
                    this.visitedHomeAppointmentById[homeAppointmentData.appointmentId].deserialize(homeAppointmentData);
                } else {
                    var visitedHomeAppointment = new HomeAppointment().deserialize(homeAppointmentData);
                    this.visitedHomeAppointmentById[visitedHomeAppointment.appointmentId] = visitedHomeAppointment;
                    this.visitedHomeAppointments.push(visitedHomeAppointment);
                }
                if (homeAppointmentData.patient) {
                    this.digestPatientData([homeAppointmentData.patient]);
                    var appoID = homeAppointmentData.appointmentId;
                    var patID = homeAppointmentData.patient.patientId;
                    this.visitedHomeAppointmentById[appoID].patient = this.patientById[patID];
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

        public getDetails(id: any, visited: boolean) {
            if (visited) {
                return this.getVisited(id);
            }
            else {
                return this.get(id);
            }
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

        public getVisited(id: any = null) {
            if (id) {
                if (!this.visitedHomeAppointmentById[id]) {
                    this.visitedHomeAppointmentById[id] = new HomeAppointment();
                }
                return this.visitedHomeAppointmentById[id];
            } else {
                return this.visitedHomeAppointments;
            }
        }

        public update(visited: boolean) {
            if (visited) {
                this.dataService.getHomeAppointments(true).then((result: any) => {
                    this.digestVisitedHomeAppointmentData(result);
                    this.$rootScope.$broadcast('homeAppointmentUpdated');
                });
            }
            else {
                this.dataService.getHomeAppointments(false).then((result: any) => {
                    this.digestHomeAppointmentData(result);
                    this.$rootScope.$broadcast('homeAppointmentUpdated');
                });
            }
        }

        public updateAppointment(appointment: any) {
            this.dataService.updateAppointment(appointment.serialize()).then((result: any) => {
                this.$rootScope.$broadcast('homeAppointmentUpdated');
            });
        }

    }

    app.service('homeAppointmentService', HomeAppointmentService);
}
