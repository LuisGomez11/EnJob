import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { AdmineModel } from '../../models/admine/admine-model';

@Injectable({
  providedIn: 'root'
})
export class AuthAdmineService {

  readonly AUTH_SERVER = 'http://localhost:3000/v1/api';
  authSubject = new BehaviorSubject(false);
  private token: string;
  private user: AdmineModel;

  constructor(private httpClient: HttpClient) { }

  login(user: AdmineModel): Observable<any> {
    return this.httpClient.post(`${this.AUTH_SERVER}/admine/login`, user);
  }
  public saveToken(accessToken: string): void {
    localStorage.setItem("ACCESS_TOKEN", accessToken);
    this.token = accessToken;
    console.log('Token guardado');
  }

  public saveAdmin(admin: AdmineModel): void {
    localStorage.setItem("USER", JSON.stringify(admin));
    this.user = admin;
  }

  // public getUser(): string {
  //   if (!this.user) {
  //     this.user = localStorage.getItem("USER");
  //   }
  //   return this.user;
  // }
}
