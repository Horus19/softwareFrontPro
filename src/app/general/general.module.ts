import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeneralRoutingModule } from './general-routing.module';
import { RegistroPublicacionComponent } from './registro-publicacion/registro-publicacion.component';


@NgModule({
  declarations: [
    RegistroPublicacionComponent
  ],
  imports: [
    CommonModule,
    GeneralRoutingModule
  ]
})
export class GeneralModule { }
