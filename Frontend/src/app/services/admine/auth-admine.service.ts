import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtResponseI } from '../../models/admine/jwt-response-i';
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

    AdmineUser = '';
    role = '';

    constructor(private httpClient: HttpClient) { }

    login(user: AdmineModel): Observable<any> {
        return this.httpClient.post(`${this.AUTH_SERVER}/admine/login`,
            user);
            
    }
    private saveToken(accessToken: string): void {
        localStorage.setItem("ACCESS_TOKEN", accessToken);
        this.token = accessToken;
    }

    private getToken(): string {
      if (!this.token) {
        this.token = localStorage.getItem("ACCESS_TOKEN");
      }
      return this.token;
    }
}
