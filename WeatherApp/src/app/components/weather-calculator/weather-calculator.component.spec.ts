import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherCalculatorComponent } from './weather-calculator.component';

describe('WeatherCalculatorComponent', () => {
  let component: WeatherCalculatorComponent;
  let fixture: ComponentFixture<WeatherCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WeatherCalculatorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WeatherCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
