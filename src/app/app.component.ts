import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ChartDataset, ChartOptions, ChartType, LegendItem, Plugin } from 'chart.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private router: Router) { }

  public chartType: ChartType = 'bar';

  public datasets: ChartDataset[] = [
    { data: [4, 2, 3], label: 'Approved', type: 'line' },
    { data: [5, 3, 4], label: 'Accepted' },
    { data: [4, 2, 3], label: 'Open' },
  ];

  public labels: string[] = ['P', 'R', 'B'];

  public plugins: Plugin[] = [
    {
      id: 'lineOnBars',
      afterDatasetDraw(chart, args, options) {
        const barDataSets = chart.data.datasets.filter(e => e.type != 'line')
        const lineDataSet = chart.data.datasets.find(e => e.type == 'line')

        const lastBarIndex = barDataSets.length
        const lineIndex = chart.data.datasets.findIndex(e => e.type == 'line')

        const positions = chart.getDatasetMeta(lastBarIndex).data.map(e => ({x: e.x, y: e.y}))
        const lineData = chart.getDatasetMeta(lineIndex).data

        lineData.forEach((dataPoint, index) => {
          const reference = positions[index]
          dataPoint.x = reference.x
          dataPoint.y = reference.y
        })
      },
    }
  ]

  public options: ChartOptions = {
    responsive: false,    
    plugins: {
      legend: {
        labels: {
          usePointStyle: true,
          generateLabels(chart) {
            return chart.data.datasets.map((data, index) => {
              const legend: LegendItem = {
                text: data.label || 'Não informado',
                datasetIndex: index,
                fillStyle: data.backgroundColor?.toString(),
                pointStyle: 'circle',
                strokeStyle: 'transparent'
              }
              return legend
            })
          },
        }
      }
    }
  };
  public lineChartLegend = true;
}
