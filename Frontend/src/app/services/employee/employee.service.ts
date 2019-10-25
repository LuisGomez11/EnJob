import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtResponseI } from '../../models/admine/jwt-response-i';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { Employee } from '../../models/employee/employee';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  readonly AUTH_SERVER = 'http://localhost:3000/v1/api';
  authSubject = new BehaviorSubject(false);
  private token: string;

  roleE = '';
  constructor(private httpClient: HttpClient) { }

  login(employee: Employee): Observable<JwtResponseI> {
    return this.httpClient.post<JwtResponseI>(`${this.AUTH_SERVER}/employee/create`,
      employee).pipe(tap(
        (res: JwtResponseI) => {
          if (res) {
            // guardar token
            this.saveToken(res.dataUser.accessToken);
            this.roleE = res.dataUser.role;
          }
        })
      );

  }
  private saveToken(accessToken: string): void {
    localStorage.setItem("ACCESS_TOKEN", accessToken);
    this.token = accessToken;
  }
}
