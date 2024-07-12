import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-weather-chart',
  templateUrl: './weather-chart.component.html',
  styleUrl: './weather-chart.component.scss',
})
export class WeatherChartComponent {
  private _chartData: any[] = [];
  // @Input() chartData: any;
  @Input()
  set chartData(data: any) {
    this._chartData = data;
    this.setDataAndOptions(this._chartData);
  }

  get tableData(): any {
    return this._chartData;
  }

  public data: any;
  public selectedData: any;
  public options: any;
  public datetimesss: any = [];
  public temperaturesss: any = [];

  ngOnInit() {
    this.setDataAndOptions(this.chartData);
  }
  setDataAndOptions(chartData: any) {
    this._chartData.forEach((e) => {
      this.datetimesss.push(e.dateTime);
      this.temperaturesss.push(e.temperature);
    });
    this.data = {
      labels: this.datetimesss,
      datasets: [
        {
          label: 'Temperature Overtime',
          data: this.temperaturesss,
          fill: true,
          borderColor: 'red',
          tension: 0.4,
        },
      ],
    };

    this.options = {
      maintainAspectRatio: false,
      aspectRatio: 0.6,
      plugins: {
        legend: {
          labels: {
            color: 'black',
          },
        },
      },
      scales: {
        x: {
          ticks: {
            color: 'black',
          },
          grid: {
            color: 'lightgrey',
            drawBorder: false,
          },
        },
        y: {
          ticks: {
            color: 'black',
          },
          grid: {
            color: 'lightgrey',
            drawBorder: false,
          },
        },
      },
    };
  }
}
