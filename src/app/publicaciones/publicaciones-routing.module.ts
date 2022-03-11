import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicacionComponent } from './publicacion/publicacion.component';
import { PublicacionesComponent } from './publicaciones.component';

const routes: Routes = [
  { 
    path: '', component: PublicacionesComponent   
  },
  {
    path: 'publicacion/:id', component: PublicacionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicacionesRoutingModule { }
