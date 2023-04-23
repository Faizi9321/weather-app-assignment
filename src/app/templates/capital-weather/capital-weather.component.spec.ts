import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapitalWeatherComponent } from './capital-weather.component';

describe('CapitalWeatherComponent', () => {
  let component: CapitalWeatherComponent;
  let fixture: ComponentFixture<CapitalWeatherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CapitalWeatherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CapitalWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
