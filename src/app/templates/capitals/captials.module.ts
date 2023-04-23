import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CaptialsRoutingModule } from './captials-routing.module';
import { MaterialModule } from 'src/app/shared/materail.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CaptialsRoutingModule,
    MaterialModule
  ]
})
export class CaptialsModule { }
