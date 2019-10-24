import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Task } from 'src/app/models/task/task';
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  selectedTask: Task;
  tasks: Task[];

  readonly url='http://localhost:8090/app/task';
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor( private http: HttpClient ) {
    this.selectedTask = new Task();
  }

  getTasks(): Observable<Task[]>{
    return this.http.get(this.url).pipe(
      map(data => data as Task[])
    );
  }

  getTask(id: String): Observable<Task>{
    return this.http.get<Task>(`${this.url}/${id}`);
  }

  createTask(task: Task): Observable<Task>{
    return this.http.post<Task>(this.url, task, { headers: this.httpHeaders });
  }

  updateTask(task: Task): Observable<Task>{
    return this.http.put<Task>(this.url, task, { headers: this.httpHeaders });
  }

  deleteTask(id: String): Observable<Task>{
    return this.http.delete<Task>(`${this.url}/${id}`, { headers: this.httpHeaders });
  }

}
