import { Component } from '@angular/core';

@Component({
  selector: 'app-weather-calculator',
  templateUrl: './weather-calculator.component.html',
  styleUrl: './weather-calculator.component.scss',
})
export class WeatherCalculatorComponent {
  tempInput: number = 26.8;
  humidityInput: number = 0;
  isCelsius: boolean = true;
  result: number = 0;
  checked: boolean = false;

  ngOnInit() {
    this.isCelsius = true;
  }

  calculateHeatIndex() {
    const T = this.convertTemperature(this.isCelsius, this.tempInput);
    const RH = this.humidityInput;
    const c1 = -42.379,
      c2 = 2.04901523,
      c3 = 10.14333127,
      c4 = -0.22475541;
    const c5 = -0.00683783,
      c6 = -0.05481717,
      c7 = 0.00122874,
      c8 = 0.00085282,
      c9 = -0.00000199;

    const heatIndexF =
      c1 +
      c2 * T +
      c3 * RH +
      c4 * T * RH +
      c5 * T * T +
      c6 * RH * RH +
      c7 * T * T * RH +
      c8 * T * RH * RH +
      c9 * T * T * RH * RH;

    const heatIndexC = this.convertTemperature(false, heatIndexF);

    return (this.result = heatIndexC);
  }

  convertTemperature(isCelsius: boolean, temperature: number): number {
    if (isCelsius) {
      return (temperature * 9) / 5 + 32; // Convert to Fahrenheit
    } else {
      return ((temperature - 32) * 5) / 9; // Convert to Celsius
    }
  }
}
