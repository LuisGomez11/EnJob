import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http'

import { AdmineModel } from '../../models/admine/admine-model'
import { data } from '../../configs/data.config'

@Injectable({
  providedIn: 'root',

})
export class AdmineServiceService {
  selectedAdmine: AdmineModel;
  AdmineModel: AdmineModel[];
  public data: string;

  constructor(private http: HttpClient) {
    this.selectedAdmine = new AdmineModel();
  }
  
  signup(admine: AdmineModel) {

    const model = JSON.stringify(user);
    const headers = new HttpHeaders().set('Content-Type', 'application/json');


    return this._http.post(`${this.url}/register`, model, { headers: headers })
  }
}
