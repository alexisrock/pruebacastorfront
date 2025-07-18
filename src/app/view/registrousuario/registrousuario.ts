import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Backendservice } from '../../service/backendservice';

@Component({
  selector: 'app-registrousuario',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterModule],
  templateUrl: './registrousuario.html',
  styleUrl: './registrousuario.scss'
})
export class Registrousuario {
  registerForm: FormGroup;
  showmessage: boolean = false 
  mesage:string = ""

  constructor(private readonly fb: FormBuilder, private readonly backend: Backendservice) {
    this.registerForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      this.backend.createuser(this.registerForm.value).subscribe({
        next: (response) => {
       this.showMessage(response.message)
       this.registerForm.reset();
        },
        error: (err) => {
          // Manejo de error (puedes mostrar un mensaje)
          console.error('Error en login', err);
        }
      });
    }
  }

  showMessage(mensaje: string) {
    
    this.showmessage = true
    this.mesage = mensaje;
    setTimeout(() => { this.mesage = "";  this.showmessage = false }, 6000)
  }
}
