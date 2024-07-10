import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'https://api.open-meteo.com/v1/forecast';
  private londonGps = {
    latitude: 49.3777,
    longitude: -18.8675,
  };

  constructor(private http: HttpClient) {}

  testGetWeather(
    latitude: number = this.londonGps.latitude,
    longitude: number = this.londonGps.longitude
  ): Observable<any> {
    const params = new HttpParams()
      .set('latitude', latitude.toString())
      .set('longitude', longitude.toString())
      .set('hourly', 'temperature_2m')
      .set('daily', 'temperature_2m_max,temperature_2m_min')
      .set('timezone', 'auto');

    return this.http.get(this.apiUrl, { params });
  }

  getTableData(
    latitude: number = this.londonGps.latitude,
    longitude: number = this.londonGps.longitude
  ) {
    const params = new HttpParams()
      .set('latitude', latitude.toString())
      .set('longitude', longitude.toString())
      .set('timezone', 'auto');

    return this.http.get(this.apiUrl, {});
  }
}
