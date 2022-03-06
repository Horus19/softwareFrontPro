import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroPublicacionComponent } from './registro-publicacion/registro-publicacion.component';


const routes: Routes = [{ path: '', component: RegistroPublicacionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GeneralRoutingModule { }
