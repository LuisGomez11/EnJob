import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Notification } from '../models/notification';
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  selectedNotification: Notification;
  notifications: Notification[];

  readonly url='http://localhost:8090/app/notification';
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor( private http: HttpClient ) {
    this.selectedNotification = new Notification();
  }

  getNotifications(): Observable<Notification[]>{
    return this.http.get(this.url).pipe(
      map(data => data as Notification[])
    );
  }

  getNotification(id: string): Observable<Notification>{
    return this.http.get<Notification>(`${this.url}/${id}`);
  }

  createNotification(notification: Notification): Observable<Notification>{
    return this.http.post<Notification>(this.url, notification, { headers: this.httpHeaders });
  }

  updateNotification(notification: Notification): Observable<Notification>{
    return this.http.put<Notification>(this.url, notification, { headers: this.httpHeaders });
  }

  deleteNotification(id: string): Observable<Notification>{
    return this.http.delete<Notification>(`${this.url}/${id}`, { headers: this.httpHeaders });
  }
}
