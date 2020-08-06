import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


import { LoginComponent } from './login/login.component';
import { RegistrerComponent } from './registrer/registrer.component';

const ROUTES: Routes = [
    
  {path: 'login', component: LoginComponent},
  {path: 'registers', component: RegistrerComponent},

];

@NgModule({
    imports: [RouterModule.forChild(ROUTES)],
    exports: [RouterModule]
})
export class AuthRoutingModule {}
