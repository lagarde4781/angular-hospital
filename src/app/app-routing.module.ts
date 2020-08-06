import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

// Modulos
import { PagesRoutingModule } from './pages/pages.routing';
import { AuthRoutingModule } from './auth/auth.routing';

import { NopagefoundComponent } from './nopagefound/nopagefound.component';

const ROUTES: Routes = [

  // path:'dashboard' PagesRoutingModule
  // path:'progress' PagesRoutingModule
  // path:'grafica1' PagesRoutingModule

  // path:'login' AuthRoutingModule
  // path:'registers' AuthRoutingModule

  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},

  {path: '**', component: NopagefoundComponent}

]

@NgModule({
  imports: [
    RouterModule.forRoot(ROUTES),
    PagesRoutingModule,
    AuthRoutingModule
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
