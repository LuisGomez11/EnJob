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
import { AuthAdmineService } from 'src/app/services/auth-admine.service';

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

  nameCompany = '';
  
  ngOnInit() {
    this.app.supervisor();
    this.getDepartments();
    this.getEmployees();
    this.nameCompany = this.auth.getUser().nameCompany;
  }

  getDepartments() {
    this.serviceDep.getDepartments()
      .subscribe(data =>
        this.departments = data);
  }

  getEmployees() {
    this.serviceEmp.getEmployees()
      .subscribe((data: any) => {
        console.log(this.listEmployees);
        console.log(data)
        this.listEmployees = data.users;
      });
  }

  createTask(form: NgForm) {
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
