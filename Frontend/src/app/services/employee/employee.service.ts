import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

import { Employee } from '../../models/employee/employee';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  readonly url='http://localhost:3000/v1/api/admine/employee/create';
  authSubject = new BehaviorSubject(false);
  private token: string;

  constructor(private httpClient: HttpClient) { }

  createEmployee(employee: Employee){
    return this.httpClient.post(this.url, employee);
   }

  public saveToken(accessToken: string): void {
    localStorage.setItem("ACCESS_TOKEN", accessToken);
    this.token = accessToken;
  }
}
