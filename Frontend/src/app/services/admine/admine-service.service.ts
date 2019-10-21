import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AdmineModel } from '../../models/admine/admine-model';

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

  signup(admine: AdmineModel): Observable<AdmineModel> {

    return this.http.post<AdmineModel>(`${this.url}/signup`, admine, { headers: this.httpHeaders });

  }
}
