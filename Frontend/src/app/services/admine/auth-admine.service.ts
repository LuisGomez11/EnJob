import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

import { AdmineModel } from '../../models/admine/admine-model';

@Injectable({
  providedIn: 'root'
})
export class AuthAdmineService {

  readonly AUTH_SERVER = 'http://localhost:3000/v1/api';
  authSubject = new BehaviorSubject(false);
  private token: string;
  private user: any;

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

  public logOut(){
    localStorage.clear();
  }

  public getUser(): any {
    if (!this.user) {
      this.user = JSON.parse(localStorage.getItem("USER"));
      this.user =  this.user.userName;
    }
    return this.user;
  }

  isAuthenticated(): boolean {
    const authToken = localStorage.getItem('ACCESS_TOKEN');
    if (authToken != null){
      return true;
    }
    return false;
  }
}
