import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Subscription } from '../models/subscription';
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {

  selectedSubscription: Subscription;
  subscriptions: Subscription[];

  readonly url='http://localhost:8090/app/subscription';
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor( private http: HttpClient ) {
    this.selectedSubscription = new Subscription();
  }

  getSubscriptions(): Observable<Subscription[]>{
    return this.http.get(this.url).pipe(
      map(data => data as Subscription[])
    );
  }

  getSubscription(id: String): Observable<Subscription>{
    return this.http.get<Subscription>(`${this.url}/${id}`);
  }

  createSubscription(subscription: Subscription): Observable<Subscription>{
    return this.http.post<Subscription>(this.url, subscription, { headers: this.httpHeaders });
  }

  updateSubscription(subscription: Subscription): Observable<Subscription>{
    return this.http.put<Subscription>(this.url, subscription, { headers: this.httpHeaders });
  }

  deleteSubscription(id: String): Observable<Subscription>{
    return this.http.delete<Subscription>(`${this.url}/${id}`, { headers: this.httpHeaders });
  }
}
