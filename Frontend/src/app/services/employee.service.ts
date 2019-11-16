import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  readonly url='http://localhost:3000/v1/api';
  authSubject = new BehaviorSubject(false);
  private token: string;
  private user: any;
  employees: Employee[];
  constructor(private httpClient: HttpClient) { }

  createEmployee(employee: Employee){
    return this.httpClient.post(`${this.url}/admine/employee/create`, employee);
   }

  getEmployees(): Observable<Employee[]>{
    return this.httpClient.get(`${this.url}/admine/employees`).pipe(
      map(data => data as Employee[])
    );
  }

  login(user: Employee): Observable<any> {
    return this.httpClient.post(`${this.url}/employee/login`, user);
  }
  public saveToken(accessToken: string): void {
    localStorage.setItem("ACCESS_TOKEN", accessToken);
    this.token = accessToken;
    console.log('Token guardado');
  }

  public saveAdmin(emp: Employee): void {
    localStorage.setItem("USER", JSON.stringify(emp));
    this.user = emp;
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
