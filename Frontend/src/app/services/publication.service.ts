import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Publication } from 'src/app/models/publication';
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class PublicationService {

  selectedPublication: Publication;
  publications: Publication[];

  readonly url='http://localhost:8090/app/publication';
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor( private http: HttpClient ) {
    this.selectedPublication = new Publication();
  }

  getPublications(): Observable<Publication[]>{
    return this.http.get(this.url).pipe(
      map(data => data as Publication[])
    );
  }

  getPublication(id: string): Observable<Publication>{
    return this.http.get<Publication>(`${this.url}/${id}`);
  }

  createPublication(publication: Publication): Observable<Publication>{
    return this.http.post<Publication>(this.url, publication, { headers: this.httpHeaders });
  }

  updatePublication(publication: Publication): Observable<Publication>{
    return this.http.put<Publication>(this.url, publication, { headers: this.httpHeaders });
  }

  deletePublication(id: string): Observable<Publication>{
    return this.http.delete<Publication>(`${this.url}/${id}`, { headers: this.httpHeaders });
  }
}
