import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ErrorPageComponent } from './shared/error-page/error-page.component';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule )
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomeModule )
  },
  {
    path: '404',
    component: ErrorPageComponent
  },
  { path: 'general', loadChildren: () => import('./general/general.module').then(m => m.GeneralModule) },
  {
    path: '**',
    redirectTo: 'home'
  },
]


@NgModule({
  imports: [
    RouterModule.forRoot( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
