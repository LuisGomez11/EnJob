import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/models/task';
import { NgForm } from '@angular/forms';
import swal from "sweetalert2";
import { Router } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-employee-kanban',
  templateUrl: './employee-kanban.component.html',
  styleUrls: ['./employee-kanban.component.css']
})
export class EmployeeKanbanComponent implements OnInit {

  task: Task = new Task();
  listTasks: Task[];
  currentState: Task = undefined;

  constructor(public app: AppComponent, private service: TaskService, private router: Router) { }

  ngOnInit() {
    this.app.employee();
    $('.config-perfil').click(function () {
      $('.content-configurations').toggleClass('config-active');
    });
    this.getTasks();
  }

  getTasks() {
    this.service.getTasks()
      .subscribe(data =>
        this.listTasks = data);
  }

  changeDrag(id: String) {
    if (this.currentState.stateTask !== id && this.currentState !== undefined) {
      this.currentState.stateTask = id;
      this.service.updateTask(this.currentState).subscribe(data => {
        console.log(data);
        this.getTasks();
      }, error => {
        console.log(error);
      });
      this.currentState = undefined;
    }
  }
  
  viewDetails(task: Task) {
    localStorage.removeItem('IdTask');
    localStorage.setItem('idTask', task.idTask.toString());
    this.router.navigate(['employee/task/details']);
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.service.selectedTask = new Task();
    }
  }

}
