import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { DateformatPipe } from '../../pipelines/dateformat.pipe';

interface TableContent {
  dateTime: string;
  weatherState: string;
  temperature: string;
  surfacePresure: string;
  relativeHumidity: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  public xxx: any;
  public tableData: any;
  public testViewData: any;
  public sortedData: TableContent[] = [];
  public dateFormatPipe = new DateformatPipe();

  dates: string[] = [];
  weatherState: string[] = [];
  temperature: string[] = [];
  surfacePresure: string[] = [];
  relativeHumidity: string[] = [];

  // defualt london
  private latitude = 49.3777;
  private longitude = -18.8675;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    // this.testGetWeather();
    this.getTableData();
  }

  testGetWeather(): void {
    this.apiService.testGetWeather(this.latitude, this.longitude).subscribe(
      (data) => {
        this.testViewData = data;
        console.log(data);
      },
      (error) => console.error('Error fetching weather data')
    );
  }

  getTableData(): void {
    this.apiService.getTableData().subscribe(
      (data) => {
        this.tableData = data;
        console.log('Table Data:', this.tableData);

        this.sortAndMapData();
      },
      (error) => console.error('Error fetching weather data')
    );
  }

  public sortAndMapData(): void {
    if (!this.tableData || !this.tableData.hourly) {
      this.sortedData = [];
      return;
    }

    this.dates = this.tableData.hourly.time;
    this.weatherState = this.tableData.hourly.cloud_cover;
    this.temperature = this.tableData.hourly.temperature_2m;
    this.surfacePresure = this.tableData.hourly.surface_pressure;
    this.relativeHumidity = this.tableData.hourly.relative_humidity_2m;

    this.sortedData = this.dates.map((date, index) => ({
      dateTime: this.dateFormatPipe.transform(date),
      weatherState: this.weatherState[index],
      temperature: this.temperature[index],
      surfacePresure: this.surfacePresure[index],
      relativeHumidity: this.relativeHumidity[index],
    }));

    console.log('Sorted Data: ', this.sortedData);
  }
}
