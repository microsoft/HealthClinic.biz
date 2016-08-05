class DashboardController {
    constructor($scope, $rootScope, dashboardService, toasterService) {

        const year = new Date().getFullYear();

        $scope.incomesExpensesYear = year;
        $scope.patientsYear = year;
        $scope.currentYear = year;

        $scope.addYearIncomesExpenses = () => {
            if ($scope.currentYear > $scope.incomesExpensesYear) {
                $scope.incomesExpensesYear += 1;
            }
        };

        $scope.reduceYearIncomesExpenses = () => {
            $scope.incomesExpensesYear -= 1;
        };

        $scope.addYearPatients = () => {
            if ($scope.currentYear > $scope.patientsYear) {
                $scope.patientsYear += 1;
            }
        };

        $scope.reduceYearPatients = () => {
            $scope.patientsYear -= 1;
        };

        $scope.correctYear = () => {
            if ($scope.currentYear < $scope.patientsYear) {
                $scope.patientsYear = $scope.currentYear;
            }
            if ($scope.currentYear < $scope.incomesExpensesYear) {
                $scope.incomesExpensesYear = $scope.currentYear;
            }
        };

        var createChartDataIncomesExpenses = (expenses, incomes) => {
            $scope.chartDataIncomesExpenses = {
                scaleLabel: function (valuePayload) {
                    return Number(valuePayload.value).toFixed.replace('.', ',') + '$';
                },
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                datasets: [
                    {
                        label: 'INCOMES',
                        fillColor:  'rgba(0,216,204,0.2)',
                        strokeColor: 'rgba(0,216,204,1)',
                        pointColor: 'rgba(0,216,204,1)',
                        pointStrokeColor: 'rgba(0,216,204,1)',
                        pointHighlightFill: 'rgba(0,216,204,1)',
                        pointHighlightStroke:  '#fff',
                        data: incomes
                    },
                    {
                        label: 'EXPENSES',
                        fillColor:  'rgba(255,23,112,0.2)',
                        strokeColor: 'rgba(255,23,112,1)',
                        pointColor: 'rgba(255,23,112,1)',
                        pointStrokeColor: 'rgba(255,23,112,1)',
                        pointHighlightFill: 'rgba(255,23,112,1)',
                        pointHighlightStroke:  '#fff',
                        data: expenses
                    }
                ]
            };
        };
        var createChartDataPatients = function (patients) {
            $scope.chartDataPatients = {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                datasets: [
                    {
                        label: 'PATIENTS',
                        fillColor:  'rgba(0,216,204,1)',
                        strokeColor: 'rgba(0,216,204,1)',
                        pointColor: 'rgba(0,216,204,1)',
                        pointStrokeColor: 'rgba(0,216,204,1)',
                        pointHighlightFill: 'rgba(0,216,204,1)',
                        pointHighlightStroke:  '#fff',
                        data: patients
                    }
                ]
            };
        };

        $rootScope.loading = true;
        dashboardService.getSummary()
            .then((summary) => {
                $scope.summary = summary;
            })
            .catch((error) => {
                toasterService.showServerError(error);
            })
            .finally(() => {
                $rootScope.loading = false;
            });


        $scope.$watch('incomesExpensesYear', (newValue, oldValue) => {
            if (newValue || oldValue) {
                var expenses = new Array(12);
                expenses.fill(0, 0, 13);
                var incomes = new Array(12);
                incomes.fill(0, 0, 13);

                dashboardService.getExpenses($scope.incomesExpensesYear)
                    .then((allExpenses) => {
                        allExpenses.forEach((elem, index) => {
                            expenses[index] = elem.expenses;
                            incomes[index] = elem.incomes;
                        });

                        createChartDataIncomesExpenses(expenses, incomes);
                    })
                    .catch((error) => {
                        toasterService.showServerError(error);
                    });
            }
        });

        $scope.$watch('patientsYear', (newValue, oldValue) => {
            if (newValue || oldValue) {
                var patients = new Array(12);
                patients.fill(0, 0, 13);

                dashboardService.getPatients($scope.patientsYear)
                    .then((allPatients) => {
                        allPatients.forEach((elem, index) => {
                            patients[index] = elem.patientsCount;
                        });

                        createChartDataPatients(patients);
                    })
                    .catch((error) => {
                        toasterService.showServerError(error);
                    });
            }
        });
    }
}

export default DashboardController;