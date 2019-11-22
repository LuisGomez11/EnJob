import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  readonly url='http://localhost:3000/v1/api';
  private token: string;
  private user: any;
  employees: Employee[];
  selectedEmployee: Employee;

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private httpClient: HttpClient) { }

  createEmployee(employee: Employee){
    return this.httpClient.post(`${this.url}/employee/create`, employee);
   }

  getEmployees(): Observable<Employee[]> {
    return this.httpClient.get(`${this.url}/employees`)
    .pipe(
      map(data => data as Employee[])
    );
  }

  getEmployee(id: string): Observable<Employee> {
    return this.httpClient.get<Employee>(`${this.url}/employee/${id}`, { headers: this.httpHeaders });
  }

  updateEmployee(employee: Employee): Observable<Employee>{
    return this.httpClient.put<Employee>(`${this.url}/employee/update/${employee._id}`, employee, { headers: this.httpHeaders });
  }

  login(user: Employee): Observable<any> {
    return this.httpClient.post(`${this.url}/employee/login`, user);
  }
  public saveToken(accessToken: string): void {
    localStorage.setItem("ACCESS_TOKEN", accessToken);
    this.token = accessToken;
    console.log('Token guardado');
  }

  public saveEmplo(emp: Employee): void {
    localStorage.setItem("USER", JSON.stringify(emp));
    this.user = emp;
  }

  public logOut(){
    localStorage.clear();
  }

  public getUser() {
    if (!this.user) {
      if(localStorage.getItem("USER") !==null){
        this.user = JSON.parse(localStorage.getItem("USER"));
        this.user =  this.user.Data;
      }
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
