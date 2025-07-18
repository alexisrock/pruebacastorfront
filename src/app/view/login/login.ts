import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Backendservice } from '../../service/backendservice';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {
  loginForm: FormGroup;

  constructor(private readonly fb: FormBuilder, private readonly backend: Backendservice, private readonly router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.backend.loginUser(this.loginForm.value).subscribe({
        next: (response) => {
          if (response.token === true) {
            this.router.navigate(['/dashboard']);
          }
        },
        error: (err) => {
          // Manejo de error (puedes mostrar un mensaje)
          console.error('Error en login', err);
        }
      });
    }
  }
}
