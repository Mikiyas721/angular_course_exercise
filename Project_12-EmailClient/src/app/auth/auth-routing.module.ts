import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SignUpComponent} from "./signup/sign-up.component";
import {SignInComponent} from "./signin/sign-in.component";
import {SignOutComponent} from "./sign-out/sign-out.component";

const routes: Routes = [
  {path:'', component:SignInComponent},
  {path:'signUp', component:SignUpComponent},
  {path:'signOut', component:SignOutComponent},
  {path:'signIn', component:SignInComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }

