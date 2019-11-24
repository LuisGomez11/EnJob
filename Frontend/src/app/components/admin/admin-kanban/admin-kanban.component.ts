import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { Task } from 'src/app/models/task';
import { TaskService } from 'src/app/services/task.service';

declare var $ : any;

@Component({
  selector: 'app-admin-kanban',
  templateUrl: './admin-kanban.component.html',
  styleUrls: ['./admin-kanban.component.css']
})
export class AdminKanbanComponent implements OnInit {

  listTasks: Task[];

  assigned = ''; newPoints = 0;

  constructor(public app: AppComponent, private service: TaskService) { }

  ngOnInit() {
    this.app.admin();
    this.getTasks();
  }

  getTasks() {
    this.service.getTasks()
      .subscribe(data =>
        this.listTasks = data);
  }

}
