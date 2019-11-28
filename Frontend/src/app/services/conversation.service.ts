import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConversationService {

    readonly SERVER = 'http://localhost:3000/v1/api/conversation/';

  constructor(private Http: HttpClient) { }

  getConversations( _id: string): Observable<Array<any>> {
    return this.Http.get<Array<any>>(this.SERVER, { headers: this.Headers(_id) });
  }

  getConversationOne( Id: String, _id: string): Observable<any> {
    return this.Http.get<any>(this.SERVER + Id, { headers: this.Headers(_id) });
  }

  createConversation( Conversation: any, _id: string): Observable<any> {
    return this.Http.post<any>(this.SERVER, Conversation, { headers: this.Headers(_id) });
  }

  createMessage( Message: any, Id: String, _id: string): Observable<any> {
    return this.Http.put<any>(this.SERVER + Id, Message, { headers: this.Headers(_id) });
  }

  Headers(_id: string): any {
    return {
      'Content-Type': 'application/json',
      'Accept-Type': 'application/json',
      '_id': _id
    };
  }
}