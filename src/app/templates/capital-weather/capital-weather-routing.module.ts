import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CapitalWeatherComponent } from './capital-weather.component';

const routes: Routes = [
  {
    path: '',
    component: CapitalWeatherComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CapitalWeatherRoutingModule { }
