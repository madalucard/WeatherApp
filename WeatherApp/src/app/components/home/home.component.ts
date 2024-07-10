import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  weatherData: any;

  // defualt london
  private latitude = 49.3777;
  private longitude = -18.8675;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.testGetWeather();
  }

  testGetWeather(): void {
    this.apiService.testGetWeather(this.latitude, this.longitude).subscribe(
      (data) => {
        this.weatherData = data;
        console.log(data);
      },
      (error) => console.error('Error fetching weather data')
    );
  }
}
