import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Login } from './login';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: Login }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    Login
  ]
})
export class LoginModule { }
