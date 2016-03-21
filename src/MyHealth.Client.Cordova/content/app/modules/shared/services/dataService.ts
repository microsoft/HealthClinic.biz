module MyHealth.Client.Cordova.Application.Shared {

    var app = getModule();

    export class DataService {

        private client: any;
        public activeDoctor: Doctor = new Doctor();

        private $rootScope: any;
        private configService: ConfigService;
        private $ionicPlatform: ionic.platform.IonicPlatformService;

        public getClient() {
            if (!this.client) {
                this.client = new WindowsAzure.MobileServiceClient(this.configService.Azure.API_URL, '').withFilter((request, next, callback) => {
                    if (request.url.indexOf('/tables/homeappointment') >= 0 && request.url.indexOf('$expand') === -1) {
                        request.url = request.url + ((request.url.indexOf('?') === -1) ? '?' : '&');
                        request.url = request.url + '$expand=patient';
                    }
                    next(request, callback);
                });
            }
            return this.client;
        }

        public login() {
            return new Promise<any>((resolve, reject) => {
                if (this.configService.General.REQUIRE_LOGIN) {
                    this.$ionicPlatform.ready(() => {
                        this.getClient().login('aad').then((loginResult: any) => {
                            resolve();
                        });
                    });
                } else {
                    resolve();
                }
            });
        }

        public getActiveDoctor() {
            return new Promise<Doctor>((resolve, reject) => {
                if (!this.activeDoctor.id) {
                    if (this.configService.General.REQUIRE_LOGIN) {
                        this.getLoggedDoctor().then((doctor: any) => {
                            resolve(doctor);
                        });
                        
                    } else {
                        this.getDefaultDoctor().then((doctor: any) => {
                            resolve(doctor);
                        });
                    }

                } else {
                    resolve(this.activeDoctor);
                }
            });
        }

        public getLoggedDoctor() {
            return new Promise<Doctor>((resolve, reject) => {
                this.login().then(() => {

                    var tenantId = this.configService.General.DEFAULT_TENANT_ID;

                    this.getClient().invokeApi('LoggedUser', {
                        method: 'get',
                        parameters: { tenantId: tenantId }
                    }).done((response) => {
                        this.activeDoctor.deserialize(response.result);
                        this.configService.General.DEFAULT_DOCTOR_GUID = this.activeDoctor.id;
                        this.$rootScope.$broadcast('activeDoctorUpdated');
                        resolve(this.activeDoctor);
                    }, (error) => {
                        console.error(error);
                    });
                });
            });
        }

        public getDefaultDoctor() {
            return new Promise<Doctor>((resolve, reject) => {
                if (!this.activeDoctor.id) {
                    this.login().then(() => {
                        var doctorsTable = this.getClient().getTable('doctor');
                        var doctorId = this.configService.General.DEFAULT_DOCTOR_GUID;
                        var tenantId = this.configService.General.DEFAULT_TENANT_ID;
                        doctorsTable.where(
                            {
                                id: doctorId,
                                tenantId: tenantId
                            })
                            .read().done((result: any) => {
                                if (result.length > 0) {
                                    this.activeDoctor.deserialize(result[0]);
                                    this.$rootScope.$broadcast('activeDoctorUpdated');
                                } else {
                                    console.error('Couldn\'t find the doctor with GUID: ' + doctorId + ' and Tenant ID: ' + tenantId);
                                }
                                resolve(this.activeDoctor);
                            }, (error: any) => {
                                console.log(error);
                            });
                    });
                } else {
                    resolve(this.activeDoctor);
                }
            });
        }

        public getHomeAppointments(visited: boolean) {
            return new Promise<any>((resolve, reject) => {
                this.getActiveDoctor().then((doctor: any) => {
                    var homeAppointmentsTable = this.getClient().getTable('homeappointment');
                    homeAppointmentsTable.take(10)
                        .orderBy('dateTime')
                        .where(
                        {
                            doctorId: doctor.doctorId,
                            tenantId: this.configService.General.DEFAULT_TENANT_ID,
                            visited: visited
                        })
                        .read()
                        .done((result: any) => {
                            resolve(result);
                        }, (error: any) => {
                            console.log(error);
                        });
                });
            });
        }

        updateAppointment(appointment: any) {
            return new Promise<any>((resolve, reject) => {
                var homeAppointmentsTable = this.getClient().getTable('homeappointment');
                homeAppointmentsTable.update(appointment).done((result: any) => {
                    resolve(result);
                }, (err: any) => {
                    console.log(`Error: ${err}`);
                });
            });
        }

        sendNotification(data: any) {
            var notification = data;
            this.getActiveDoctor().then((doctor: any) => {
                notification.doctorId = doctor.doctorId.toString();
                this.getClient().invokeApi('NotifyDelay', {
                    body: notification,
                    method: 'post'
                }).done((results) => {
                    // console.log(results);
                }, (error) => {
                    console.error(error);
                });
            });
        }

        constructor($rootScope: any, configService: ConfigService, $ionicPlatform: ionic.platform.IonicPlatformService) {
            this.$rootScope = $rootScope;
            this.configService = configService;
            this.configService.init();
            this.$ionicPlatform = $ionicPlatform;
        }

    }

    app.service('dataService', DataService);
}
