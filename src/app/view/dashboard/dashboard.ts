import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ArtistaResponse } from '../../model/artistarequest';
import { Backendservice } from '../../service/backendservice';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class Dashboard {
  artistForm: FormGroup;
  artistData: ArtistaResponse | undefined;
  loading = new BehaviorSubject<boolean>(false);

  constructor(private readonly fb: FormBuilder, private readonly backend: Backendservice) {
    this.artistForm = this.fb.group({
      artistaname: ['', [Validators.required]]
    });
  }

  onSearch() {
    if (this.artistForm.valid) {
      this.loading.next(true);
      this.backend.consultarartista(this.artistForm.value).subscribe({
        next: (response) => {
          this.loading.next(false);
          this.artistData = response;
        },
        error: (err) => {
          this.loading.next(false);
          // Manejo de error (puedes mostrar un mensaje)
          console.error('Error en login', err);
        }
      });
    }
  }
}
