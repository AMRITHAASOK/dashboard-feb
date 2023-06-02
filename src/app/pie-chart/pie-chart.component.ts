import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent {
  Highcharts = Highcharts
  chartOptions = {}

  constructor() {
    this.chartOptions= {
      chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: 'pie'
      },
      title: {
          text: 'Average Student Admissions 2023',
          align: 'center'
      },
      tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      accessibility: {
          point: {
              valueSuffix: '%'
          }
      },
      plotOptions: {
          pie: {
              allowPointSelect: true,
              cursor: 'pointer',
              dataLabels: {
                  enabled: true,
                  format: '<b>{point.name}</b>: {point.percentage:.1f} %'
              }
          }
      },
      series: [{
          name: 'Courses',
          colorByPoint: true,
          data: [{
              name: 'MEARN',
              y: 40.67,
              sliced: true,
              selected: true
          }, {
              name: 'PYTHON',
              y: 24.77
          },  {
              name: 'TESTING',
              y: 14.86
          }, {
              name: 'BIGDATA',
              y: 12.63
          }, {
              name: 'JAVA',
              y: 10.53
          },  {
              name: '.NET',
              y: 10.40
          }, {
              name: 'ML',
              y: 0.84
          }, {
              name: 'DL',
              y: 0.51
          }, {
              name: 'Other',
              y: 2.6
          }]
      }]
  }
    
  }
}
