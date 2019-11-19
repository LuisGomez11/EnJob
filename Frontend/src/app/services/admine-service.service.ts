import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AdmineModel } from '../models/admine-model';

@Injectable({
  providedIn: 'root',
})
export class AdmineServiceService {

  readonly url='http://localhost:3000/v1/api/admine';
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  selectedAdmine: AdmineModel;
  AdmineModel: AdmineModel[];

  constructor(private http: HttpClient) {
    this.selectedAdmine = new AdmineModel();
  } 

  signup(admine: AdmineModel){
   return this.http.post(`${this.url}/create`, admine);
    // console.log(admine)
  }

  getAdmine(id: String){
    return this.http.get<AdmineModel>(`${this.url}/${id}`);
  }

  updateAdmine(admine: AdmineModel): Observable<AdmineModel>{
    return this.http.put<AdmineModel>(`${this.url}/update/${admine._id}`, admine, { headers: this.httpHeaders });
  }

}
