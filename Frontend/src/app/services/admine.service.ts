import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AdmineModel } from '../models/admine-model';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root',
})
export class AdmineServiceService {

  readonly url='http://localhost:3000/v1/api';
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  selectedAdmine: AdmineModel;
  AdmineModel: AdmineModel[];
  private nameCompany: any;

  constructor(private http: HttpClient) {
    this.selectedAdmine = new AdmineModel();
  } 

  signup(admine: AdmineModel){
   return this.http.post(`${this.url}/admine/create`, admine);
  }

  getAdmines(): Observable<AdmineModel[]> {
    return this.http.get(`${this.url}/admines`)
    .pipe(
      map(data => data as AdmineModel[])
    );
  }

  getAdmine(id: string){
    return this.http.get<AdmineModel>(`${this.url}/admine/${id}`);
  } 

  updateAdmine(admine: AdmineModel): Observable<AdmineModel>{
    return this.http.put<AdmineModel>(`${this.url}/admine/update/${admine._id}`, admine, { headers: this.httpHeaders });
  }

  updatePhoto(admine: AdmineModel, image: File): Observable<AdmineModel>{
    // const data = new FormData();
    // data.append('image', image);
    return this.http.put<AdmineModel>(`${this.url}/photo/upload/${admine._id}`, admine);
  }

}
