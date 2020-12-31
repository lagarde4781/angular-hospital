import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { LoginComponent } from './login/login.component';
import { RegistrerComponent } from './registrer/registrer.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegistrerComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports:[
    LoginComponent,
    RegistrerComponent,
  ]
})
export class AuthModule { }
