import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ResetPassComponent } from './reset-pass/reset-pass.component';

const routes: Routes = [
  {path:'' , component:SignupComponent},
  {path:'login' , component:LoginComponent , title:'Login'},
  {path:'signup' , component:SignupComponent , title:'signup'},
  {path:'resetpass' , component:ResetPassComponent , title:'reset password'},
  {path:'**' , component:LoginComponent , title:'Login'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterRoutingModule { }
