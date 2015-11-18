module MyHealth.Clinics.Application {

    var app = getModule();


    export interface IClinic {
        Name: string;
        Adddres: string;
        City: string;
        WaitTimeAvg: number;
    }

    export class DataService {

        private $http: any;

        getClinics(): ng.IPromise<IClinic[]> {
            return this.$http.get('/clinics').then(response => {
                return response.data;
            });
        }

        constructor($http: any) {
            this.$http = $http;
        }

    }

    app.service('dataService', DataService);
}
