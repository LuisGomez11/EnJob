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
import { NotificationService } from 'src/app/services/notification.service';

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
    private serviceEmp: EmployeeService, private auth: AuthAdmineService, private serviceNoti:NotificationService) { }

  company = ''; id = '';

  f = new Date();

  currenDate = this.f.getDate() + '/' + (this.f.getMonth()+1) + '/' + this.f.getFullYear();
  currentDH = this.f.getDate() + '/' + (this.f.getMonth() + 1) + '/' + this.f.getFullYear() + ' ' + this.f.getHours() + ':' + this.f.getMinutes();
  
  ngOnInit() {
    this.app.supervisor();
    this.getDepartments();
    this.getEmployees();
    this.company = this.auth.getUser().nameCompany;
    this.id = this.auth.getUser()._id;
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
    form.value.changeDate = this.currenDate;
    this.service.createTask(form.value).subscribe(data => {
      swal.fire({
        position: 'center',
        type: 'success',
        title: 'Correcto!',
        text: 'Tarea creada correctamente',
        showConfirmButton: false,
        timer: 1500
      });
      this.serviceNoti.selectedNotification.message = 'Te han asignado la tarea: '+data.title;
      this.serviceNoti.selectedNotification.owner = this.id;
      this.serviceNoti.selectedNotification.receiver = data.assigned;
      this.serviceNoti.selectedNotification.dateSubmit = this.currentDH;
      this.serviceNoti.createNotification(this.serviceNoti.selectedNotification).subscribe(res => {
        console.log(res);
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
