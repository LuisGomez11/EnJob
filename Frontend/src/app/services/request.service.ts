import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Request } from '../models/request';
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  selectedRequest: Request;
  requests: Request[];

  readonly url='http://localhost:8090/app/request';
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor( private http: HttpClient ) {
    this.selectedRequest = new Request();
  }

  getRequests(): Observable<Request[]>{
    return this.http.get(this.url).pipe(
      map(data => data as Request[])
    );
  }

  getRequest(id: string): Observable<Request>{
    return this.http.get<Request>(`${this.url}/${id}`);
  }

  createRequest(request: Request): Observable<Request>{
    return this.http.post<Request>(this.url, request, { headers: this.httpHeaders });
  }

  updateRequest(request: Request): Observable<Request>{
    return this.http.put<Request>(this.url, request, { headers: this.httpHeaders });
  }

  deleteRequest(id: string): Observable<Request>{
    return this.http.delete<Request>(`${this.url}/${id}`, { headers: this.httpHeaders });
  }

}
