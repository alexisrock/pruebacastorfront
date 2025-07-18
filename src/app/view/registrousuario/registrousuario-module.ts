import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Registrousuario } from './registrousuario';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: Registrousuario }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    Registrousuario
  ]
})
export class RegistrousuarioModule { }
