const FILTER = new WeakMap();

class MHChart {
    constructor($filter) {
        this.restrict = 'A';
        this.scope = {
            'chartdata' : '=',
            'kind': '@'
        };
        FILTER.set(this, $filter);
    }

    link (scope, element) {
        const numberFilter = FILTER.get(MHChart.instance)('number');

        var options = {
            scaleShowGridLines : true,
            scaleGridLineColor : 'rgba(0,0,0,.05)',
            scaleGridLineWidth : 1,
            scaleShowHorizontalLines: true,
            scaleShowVerticalLines: false,
            scaleLabel: function (valuePayload) {
                return numberFilter(valuePayload.value);
            },
            bezierCurve : true,
            bezierCurveTension : 0.4,
            pointDot : false,
            pointDotRadius : 3,
            pointDotStrokeWidth : 1,
            pointHitDetectionRadius : 20,
            datasetStroke : true,
            datasetStrokeWidth : 2,
            datasetFill : true,
            legendTemplate : '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].strokeColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>',
            tooltipFontColor: '#7c7c81',
            maintainAspectRatio: true,
            responsive: true,
            animation: true,
            animationEasing: 'easeOutQuint',
            customTooltips:  function customTooltips(tooltip) {

                var $tooltip = $('#chart-customtooltip');

                if (!$tooltip[0]) {
                    $('body').append('<div id="chart-customtooltip" class="chart-customtooltip"></div>');
                    $tooltip = $('#chartjs-customtooltip');
                }

                if (!tooltip) {
                    $tooltip.css({
                        opacity: 0
                    });
                    return;
                }

                $tooltip.removeClass('above below no-transform');
                if (tooltip.yAlign) {
                    $tooltip.addClass(tooltip.yAlign);
                } else {
                    $tooltip.addClass('no-transform');
                }

                if (tooltip.text) {
                    $tooltip.html(tooltip.text);
                } else {
                    let innerHtml = `<div class="title">${tooltip.title}</div>`;
                    for (let i = 0; i < tooltip.labels.length; i++) {
                        innerHtml += [
                            '<div class="section">',
                            `   <span class="key" style="background-color:${tooltip.legendColors[i].fill}"></span>`,
                            `   <span class="value">$${numberFilter(tooltip.labels[i])}</span>`,
                            '</div>'
                        ].join('');
                    }
                    $tooltip.html(innerHtml);
                }

                var top = 0;
                if (tooltip.yAlign) {
                    if (tooltip.yAlign === 'above') {
                        top = tooltip.y - tooltip.caretHeight - tooltip.caretPadding;
                    } else {
                        top = tooltip.y + tooltip.caretHeight + tooltip.caretPadding;
                    }
                }

                var offset = $(tooltip.chart.canvas).offset();

                $tooltip.css({
                    opacity: 1,
                    width: tooltip.width ? tooltip.width + 'px' : 'auto',
                    left: offset.left + tooltip.x + 'px',
                    top: offset.top + top + 'px',
                    fontFamily: tooltip.fontFamily,
                    fontSize: tooltip.fontSize,
                    fontStyle: tooltip.fontStyle,
                    backgroundColor: 'rgb(255, 255, 255)',
                    boxShadow: '0 2px 6px 0 rgba(0, 0, 0, .8)'
                });
            }
        };

        var ctx = element.get(0).getContext('2d');

        scope.$watch('chartdata', function(newValue, oldValue) {

            if (newValue && !oldValue) {
                if (scope.kind === 'line') {
                    ctx.canvas.height = 80;
                    scope.incomeExpensesChart = new Chart(ctx).Line(scope.chartdata, options);
                    var legend = scope.incomeExpensesChart.generateLegend();
                    document.getElementById('legendIncomeExpenses').innerHTML = legend;
                }

                if (scope.kind === 'bar') {
                    ctx.canvas.height = 80;
                    scope.patientsChart = new Chart(ctx).Bar(scope.chartdata, options);
                }
            }

            if (newValue && oldValue) {
                if (scope.kind === 'line') {
                    scope.chartdata.datasets[0].data.forEach((elem, index) => {
                        scope.incomeExpensesChart.datasets[0].points[index].value = elem;
                    });

                    scope.chartdata.datasets[1].data.forEach((elem, index) => {
                        scope.incomeExpensesChart.datasets[1].points[index].value = elem;
                    });

                    scope.incomeExpensesChart.update();
                }

                if (scope.kind === 'bar') {
                    scope.chartdata.datasets[0].data.forEach((elem, index) => {
                        scope.patientsChart.datasets[0].bars[index].value = elem;
                    });
                    scope.patientsChart.update();
                }
            }
        });

        Chart.defaults.global.responsive = true;
    }

    static directiveFactory($filter) {
        MHChart.instance = new MHChart($filter);
        return MHChart.instance;
    }
}

MHChart.directiveFactory.$inject = ['$filter'];

export default MHChart.directiveFactory;