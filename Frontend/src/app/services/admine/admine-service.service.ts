import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';

import { AdmineModel } from '../../models/admine/admine-model';

@Injectable({
  providedIn: 'root',
})
export class AdmineServiceService {
  selectedAdmine: AdmineModel;
  AdmineModel: AdmineModel[];

  constructor(private http: HttpClient) {
    this.selectedAdmine = new AdmineModel();
  }

  signup(admine: AdmineModel) {

    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.post(`http://localhost:3000/v1/api/admine/signup`, admine, { headers: headers })
  }
}
