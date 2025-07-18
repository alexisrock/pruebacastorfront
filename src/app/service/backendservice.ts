import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginRequest, LoginResponse } from '../model/loginrequest';
import { BaseResponse, UserRequest } from '../model/userrequest';
import { ArtistaRequest, ArtistaResponse } from '../model/artistarequest';

@Injectable({
  providedIn: 'root'
})
export class Backendservice {
  baseUrl: string = 'http://127.0.0.1:8000'; // Puedes modificar esta URL base

  constructor(private readonly  http: HttpClient) {}

  loginUser(request: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.baseUrl}/user/login`, request);
  }

  createuser(request: UserRequest): Observable<BaseResponse> {
    return this.http.post<BaseResponse>(`${this.baseUrl}/user/create`, request);
  }

  consultarartista(request: ArtistaRequest): Observable<ArtistaResponse> {
    return this.http.post<ArtistaResponse>(`${this.baseUrl}/artista/consultar`, request);
  }


}
