import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Department } from 'src/app/models/department';
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  selectedDepartment: Department;
  departments: Department[];

  readonly url='http://localhost:8090/app/department';
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor( private http: HttpClient ) {
    this.selectedDepartment = new Department();
  }

  getDepartments(): Observable<Department[]>{
    return this.http.get(this.url).pipe(
      map(data => data as Department[])
    );
  }

  getDepartment(id: String): Observable<Department>{
    return this.http.get<Department>(`${this.url}/${id}`);
  }

  createDepartment(department: Department): Observable<Department>{
    return this.http.post<Department>(this.url, department, { headers: this.httpHeaders });
  }

  updateDepartment(department: Department): Observable<Department>{
    return this.http.put<Department>(this.url, department, { headers: this.httpHeaders });
  }

  deleteDepartment(id: String): Observable<Department>{
    return this.http.delete<Department>(`${this.url}/${id}`, { headers: this.httpHeaders });
  }

}
