import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Bonification } from 'src/app/models/bonification';
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class BonificationService {

  selectedBonification: Bonification;
  bonifications: Bonification[];

  readonly url='http://localhost:8090/app/bonification';
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor( private http: HttpClient ) {
    this.selectedBonification = new Bonification();
    this.selectedBonification.company = 'Condor Labs';
  }

  getBonifications(): Observable<Bonification[]>{
    return this.http.get(this.url).pipe(
      map(data => data as Bonification[])
    );
  }

  getBonification(id: String): Observable<Bonification>{
    return this.http.get<Bonification>(`${this.url}/${id}`);
  }

  createBonification(bonification: Bonification): Observable<Bonification>{
    return this.http.post<Bonification>(this.url, bonification, { headers: this.httpHeaders });
  }

  updateBonification(bonification: Bonification): Observable<Bonification>{
    return this.http.put<Bonification>(this.url, bonification, { headers: this.httpHeaders });
  }

  deleteBonification(id: String): Observable<Bonification>{
    return this.http.delete<Bonification>(`${this.url}/${id}`, { headers: this.httpHeaders });
  }

}
