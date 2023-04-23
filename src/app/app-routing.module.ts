import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'capitals', pathMatch: 'full'},
  {
    path: 'capitals',
    loadChildren: () => import('./templates/capitals/captials.module').then(m => m.CaptialsModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
