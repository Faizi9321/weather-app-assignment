import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'capitals', pathMatch: 'full'},
  {
    path: 'capitals',
    loadChildren: () => import('./templates/capitals/captials.module').then(m => m.CaptialsModule)
  },
  {
    path: 'capital-weather',
    loadChildren: () => import('./templates/capital-weather/capital-weather.module').then(m => m.CapitalWeatherModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
