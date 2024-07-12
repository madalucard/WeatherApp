import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'weatherState',
})
export class WeatherStatePipe implements PipeTransform {
  transform(value: number | string): string {
    let numValue;
    if (typeof value === 'string') {
      numValue = parseInt(value);
    } else {
      numValue = value;
    }

    if (numValue < 0 || numValue > 100) {
      throw new Error('Weather state value must be between 0 and 100');
    }

    if (numValue <= 20) {
      return 'Clear Sky'; // 0-20
    } else if (numValue <= 40) {
      return 'Partly Cloudy'; // 21-40
    } else if (numValue <= 60) {
      return 'Cloudy'; // 41-60
    } else if (numValue <= 80) {
      return 'Overcast'; // 61-80
    } else {
      return 'Stormy'; // 81-100
    }
  }
}
