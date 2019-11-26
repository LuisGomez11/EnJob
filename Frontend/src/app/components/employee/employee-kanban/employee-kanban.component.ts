import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/models/task';
import { NgForm } from '@angular/forms';
import swal from "sweetalert2";
import { Router } from '@angular/router';
import { AuthAdmineService } from 'src/app/services/auth.service';
import { DepartmentService } from 'src/app/services/department.service';
import { EmployeeService } from 'src/app/services/employee.service';

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
  nameEmployee = ''; nameDepartment = '';

  constructor(public app: AppComponent, private service: TaskService, private serviceEmplo: EmployeeService, private serviceDep: DepartmentService, private auth: AuthAdmineService) { }

    _id = '';
  ngOnInit() {
    this.app.employee();
    this._id = this.auth.getUser()._id;
    this.getTasks();
  }

  getTasks() {
    this.service.getTasks()
      .subscribe(data =>
        this.listTasks = data);
  }

  changeDrag(id: string) {
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
    this.service.selectedTask = task;

    this.serviceEmplo.getEmployee(this.service.selectedTask.assigned).subscribe((res: any) => {
      this.nameEmployee = res.users.name + ' ' + res.users.lastName;
    });

    this.serviceDep.getDepartment(this.service.selectedTask.department).subscribe(res => {
      this.nameDepartment = res.name;
    });

  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.service.selectedTask = new Task();
    }
  }

}
