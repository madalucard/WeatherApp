import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  testViewData: any;
  tableData: any;

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
        console.log('Table Data:', data);
      },
      (error) => console.error('Error fetching weather data')
    );
  }
}
