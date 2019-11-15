import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AdmineModel } from '../models/admine-model';

@Injectable({
  providedIn: 'root',
})
export class AdmineServiceService {

  readonly url='http://localhost:3000/v1/api/admine/create';

  selectedAdmine: AdmineModel;
  AdmineModel: AdmineModel[];

  constructor(private http: HttpClient) {
    this.selectedAdmine = new AdmineModel();
  } 

  signup(admine: AdmineModel){
   return this.http.post(this.url, admine);
    // console.log(admine)
  }
}
