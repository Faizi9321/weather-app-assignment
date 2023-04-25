import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CapitalWeatherRoutingModule } from './capital-weather-routing.module';
import { CapitalWeatherComponent } from './capital-weather.component';
import { MaterialModule } from 'src/app/shared/materail.module';
import { NgChartsModule } from 'ng2-charts';



@NgModule({
  declarations: [
    CapitalWeatherComponent
  ],
  imports: [
    CommonModule,
    CapitalWeatherRoutingModule,
    MaterialModule,
    NgChartsModule
  ]
})
export class CapitalWeatherModule { }
