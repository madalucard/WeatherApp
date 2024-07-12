import { WeatherStatePipe } from './weather-state.pipe';

describe('WeatherStatePipe', () => {
  it('create an instance', () => {
    const pipe = new WeatherStatePipe();
    expect(pipe).toBeTruthy();
  });
});
