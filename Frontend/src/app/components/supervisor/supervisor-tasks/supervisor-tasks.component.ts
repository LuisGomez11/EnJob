import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { NgForm } from "@angular/forms";
import { TaskService } from "../../../services/task.service";
import { Task } from "../../../models/task";
import { Department } from "../../../models/department";
import swal from "sweetalert2";
import { DepartmentService } from 'src/app/services/department.service';
import { EmployeeService } from 'src/app/services/employee.service';
import { Employee } from 'src/app/models/employee';
import { AuthAdmineService } from 'src/app/services/auth.service';

declare var $: any;
var f = new Date();

@Component({
  selector: 'app-supervisor-tasks',
  templateUrl: './supervisor-tasks.component.html',
  styleUrls: ['./supervisor-tasks.component.css']
})
export class SupervisorTasksComponent implements OnInit {

  task: Task = new Task();
  listEmployees: Employee[] = [];
  departments: Department[];

  constructor(public app: AppComponent, private service: TaskService, private serviceDep: DepartmentService,
    private serviceEmp: EmployeeService, private auth: AuthAdmineService) { }

  company = '';

  f = new Date();
  
  ngOnInit() {
    this.app.supervisor();
    this.getDepartments();
    this.getEmployees();
    this.company = this.auth.getUser().nameCompany;
    this.service.selectedTask = new Task();
  }

  getDepartments() {
    this.serviceDep.getDepartments()
      .subscribe(data =>
        this.departments = data);
  }

  getEmployees() {
    this.serviceEmp.getEmployees()
      .subscribe((data: any) => {
        this.listEmployees = data.users;
      });
  }

  createTask(form: NgForm) {
    form.value.stateTask = 'Pendiente';
    form.value.changeDate = this.f.getDate() + '/' + (this.f.getMonth()+1) + '/' + this.f.getFullYear();
    this.service.createTask(form.value).subscribe(data => {
      swal.fire({
        position: 'center',
        type: 'success',
        title: 'Correcto!',
        text: 'Tarea creada correctamente',
        showConfirmButton: false,
        timer: 1500
      });
      this.resetForm(form);
    }, error => {
      console.log(error);
    });
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.service.selectedTask = new Task();
    }
  }

}
