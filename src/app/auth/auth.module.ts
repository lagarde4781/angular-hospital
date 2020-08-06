import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegistrerComponent } from './registrer/registrer.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegistrerComponent,
  ],
  imports: [
    CommonModule
  ],
  exports:[
    LoginComponent,
    RegistrerComponent,
  ]
})
export class AuthModule { }
