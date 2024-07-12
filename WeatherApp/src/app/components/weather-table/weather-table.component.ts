import { Component, Input } from '@angular/core';

interface Column {
  field: string;
  header: string;
}

@Component({
  selector: 'app-weather-table',
  templateUrl: './weather-table.component.html',
  styleUrl: './weather-table.component.scss',
})
export class WeatherTableComponent {
  @Input() tableData: any;

  public cols!: Column[];
  public colsss: string[] = [];

  ngOnInit() {
    this.cols = [
      { field: 'dateTime', header: 'DateTime' },
      { field: 'weatherState', header: 'Weather State' },
      { field: 'temperature', header: 'Temperature' },
      { field: 'surfacePresure', header: 'Surface Pressure' },
      { field: 'relativeHumidity', header: 'Relative Humidity' },
    ];
    this.colsss = [
      'DateTime',
      'Weather State',
      'Temperature',
      'Surface Pressure',
      'Relative Humidity',
    ];
  }
}
