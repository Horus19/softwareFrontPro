import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarComponent } from './editar/editar.component';
import { PublicacionesComponent } from './publicaciones/publicaciones.component';
import { RegistroPublicacionComponent } from './registro-publicacion/registro-publicacion.component';


const routes: Routes = [
  { 
    path: '', component: PublicacionesComponent 
  },
  { 
    path: 'crear', component: RegistroPublicacionComponent 
  },
  { 
    path: 'editar/:id', component: EditarComponent 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GeneralRoutingModule { }
