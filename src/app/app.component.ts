import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ChartConfiguration, LegendItem, PointStyle } from 'chart.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private router: Router) {}

  lineChartData: ChartConfiguration<'line'>['data'] = {
    datasets: [
      {
        data: [1,2,3,4,5,6,7,8,9,10],
        label: 'Informação Primária',
        backgroundColor: 'red'
      }
    ],
    labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
  }
  
  public lineChartOptions: ChartConfiguration<'line'>['options'] = {
    responsive: false,
    datasets: {
      line: {
        pointBackgroundColor: 'transparent',
        pointBorderColor: 'transparent'
      }
    },
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
