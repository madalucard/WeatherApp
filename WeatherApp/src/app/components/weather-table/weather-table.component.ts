import { Component, Input } from '@angular/core';

interface Column {
  field: string;
  header: string;
}

interface TableContent {
  dateTime: string;
  weatherState: string;
  temperature: string;
  surfacePresure: string;
  relativeHumidity: string;
}

@Component({
  selector: 'app-weather-table',
  templateUrl: './weather-table.component.html',
  styleUrl: './weather-table.component.scss',
})
export class WeatherTableComponent {
  @Input()
  set tableData(data: any) {
    this._tableData = data;
    this.sortAndMapData();
  }
  get tableData(): any {
    return this._tableData;
  }

  public cols!: Column[];
  private _tableData: any;
  public sortedData: TableContent[] = [];

  dates: string[] = [];
  weatherState: string[] = [];
  temperature: string[] = [];
  surfacePresure: string[] = [];
  relativeHumidity: string[] = [];

  ngOnInit() {
    this.cols = [
      { field: 'dateTime', header: 'DateTime' },
      { field: 'weatherState', header: 'Weather State' },
      { field: 'temperature', header: 'Temperature' },
      { field: 'surfacePresure', header: 'Surface Pressure' },
      { field: 'relativeHumidity', header: 'Relative Humidity' },
    ];
  }

  private sortAndMapData(): void {
    if (!this._tableData || !this._tableData.hourly) {
      this.sortedData = [];
      return;
    }

    this.dates = this.tableData.hourly.time;
    this.weatherState = this.tableData.hourly.cloud_cover;
    this.temperature = this.tableData.hourly.temperature_2m;
    this.surfacePresure = this.tableData.hourly.surface_pressure;
    this.relativeHumidity = this.tableData.hourly.relative_humidity_2m;
    // console.log('dates', this.dates);
    // console.log('weatherState', this.weatherState);
    // console.log('temperature', this.temperature);
    // console.log('surfacePresure', this.surfacePresure);
    // console.log('relativeHumidity', this.relativeHumidity);

    this.sortedData = this.dates.map((date, index) => ({
      dateTime: date,
      weatherState: this.weatherState[index],
      temperature: this.temperature[index],
      surfacePresure: this.surfacePresure[index],
      relativeHumidity: this.relativeHumidity[index],
    }));

    console.log('Sorted Data: ', this.sortedData);
  }
}
