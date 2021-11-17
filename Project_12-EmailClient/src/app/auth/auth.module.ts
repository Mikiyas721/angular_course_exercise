import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from "@angular/forms";

import { AuthRoutingModule } from './auth-routing.module';
import { SignInComponent } from './signin/sign-in.component';
import { SignUpComponent } from './signup/sign-up.component';
import {SharedModule} from "../shared/shared.module";
import { SignOutComponent } from './sign-out/sign-out.component';

@NgModule({
  declarations: [
    SignInComponent,
    SignUpComponent,
    SignOutComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class AuthModule { }
