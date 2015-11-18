class DailyGraphDirective {

    constructor() {
        this.restrict = 'A';
        this.scope = {
            dailyData: '='
        };
    }

    link($scope, element) {

        var heartList = [],
            glucoseList = [],
            stressList = [],
            labelList = [],
            data = {},
            chart = {};

        var mapInformation = (values) => {
            if (!values.length) {
                return;
            }
            var compare = (a, b) => {
                if (a.Time < b.Time) {
                    return -1;
                }
                if (a.Time > b.Time) {
                    return 1;
                }
                return 0;
            };

            values.sort(compare);

            values.forEach((item) => {
                heartList.push(item.Heart);
                glucoseList.push(item.Glucose);
                stressList.push(item.Stress);
                labelList.push(moment(item.Time).format('h:mm a'));
            });
        };

        var prepareDataChart = () => {
            data = {
                labels: labelList,
                datasets: [
                    {
                        label: 'Stress',
                        fillColor: 'rgba(255, 23, 112, 0)',
                        strokeColor: '#ff1770',
                        pointColor: '#FFF',
                        pointStrokeColor: '#ff1770',
                        pointHighlightFill: '#fff',
                        pointHighlightStroke:  '#ff1770',
                        data: stressList
                    },
                    {
                        label: 'Glucose',
                        fillColor:  'rgba(0, 216, 204, 0)',
                        strokeColor: '#00d8cc',
                        pointColor: '#FFF',
                        pointStrokeColor: '#00d8cc',
                        pointHighlightFill: '#fff',
                        pointHighlightStroke: '#00d8cc',
                        data: glucoseList
                    },
                    {
                        label: 'Heart',
                        fillColor:  'rgba(191, 191, 191, 0)',
                        strokeColor: '#bfbfbf',
                        pointColor: '#FFF',
                        pointStrokeColor: '#bfbfbf',
                        pointHighlightFill: '#fff',
                        pointHighlightStroke: '#bfbfbf',
                        data: heartList
                    }
                ]
            };
        };

        var options = {
            scaleShowGridLines : true,
            scaleGridLineColor : 'rgba(0,0,0,.05)',
            scaleGridLineWidth : 1,
            scaleShowHorizontalLines: true,
            scaleShowVerticalLines: false,
            bezierCurve : false,
            bezierCurveTension : 0,
            pointDot : true,
            pointDotRadius : 5,
            pointDotStrokeWidth : 2,
            pointHitDetectionRadius : 40,
            datasetStroke : true,
            datasetStrokeWidth : 2,
            datasetFill : true,
            multiTooltipTemplate: '<%= datasetLabel %>  <%= value %>',
            showTooltips: true,
            responsive: true,
            customTooltips:  function customTooltips(tooltip) {

                var tooltipEl = $('#chart-customtooltip');

                if (!tooltipEl[0]) {
                    $('body').append('<div id="chart-customtooltip" class="shadowed tooltip"></div>');
                    tooltipEl = $('#chartjs-customtooltip');
                }

                if (!tooltip) {
                    tooltipEl.css({
                        opacity: 0
                    });
                    return;
                }

                tooltipEl.addClass(tooltip.yAlign);

                if (tooltip.text) {
                    tooltipEl.html(tooltip.text);
                } else {
                    let innerHtml = '';
                    for (let i = 0; i < tooltip.labels.length; i++) {
                        let valuesArr = tooltip.labels[i].split(' ');
                        innerHtml += [
                            '<div class="tooltip-section">',
                            `   <span class="tooltip-key">${valuesArr[0]}</span>`,
                            `   <span class="tooltip-value ${valuesArr[0].toLowerCase()}">${valuesArr[2]}</span>`,
                            '</div>'
                        ].join('');
                    }
                    tooltipEl.html(innerHtml);
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

                tooltipEl.css({
                    opacity: 1,
                    left: offset.left + tooltip.x + 'px',
                    top: offset.top + top + 'px',
                    fontFamily: 'Roboto',
                    backgroundColor: 'rgba(255,255,255,1)'
                });

            }
        };

        var ctx = element.get(0).getContext('2d');

        $scope.$watch('dailyData', (newVal, oldVal) => {
            if (newVal && newVal !== oldVal) {
                mapInformation(newVal);
                prepareDataChart();
                chart = new Chart(ctx).Line(data, options);
                let xLabels = chart.scale.xLabels;
                xLabels.forEach((label, i) => {
                    xLabels[i] = '';
                });
            }
        });
    }

    static directiveFactory() {
        DailyGraphDirective.instance = new DailyGraphDirective();
        return DailyGraphDirective.instance;
    }
}

export default DailyGraphDirective.directiveFactory;