import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CaptialsRoutingModule } from './captials-routing.module';
import { MaterialModule } from 'src/app/shared/materail.module';
import { CapitalsComponent } from './capitals.component';


@NgModule({
  declarations: [
    CapitalsComponent
  ],
  imports: [
    CommonModule,
    CaptialsRoutingModule,
    MaterialModule
  ]
})
export class CaptialsModule { }
