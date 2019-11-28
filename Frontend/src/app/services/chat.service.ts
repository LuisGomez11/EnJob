import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private SocketService: Socket) { }

  JoinRooms(Rooms: Array<any>) {
    Rooms.forEach(item => {
      this.SocketService.emit('Room:Join', item._id);
    });
  }

  Connect() {
    this.SocketService.connect();
  }

  Emit(Event: string, data: any = {}) {
    this.SocketService.emit(Event, data);
  }

  Listener(Event: string): Observable<any> {
    return this.SocketService.fromEvent(Event);
  }

}