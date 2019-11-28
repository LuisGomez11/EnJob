import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { Router } from '@angular/router';
import { AuthAdmineService } from 'src/app/services/auth.service';
import { EmployeeService } from 'src/app/services/employee.service';
import { DepartmentService } from 'src/app/services/department.service';
import { AdmineServiceService } from 'src/app/services/admine.service';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/models/task';
import { Request } from 'src/app/models/request';
import { RequestService } from 'src/app/services/request.service';

declare var $: any;

@Component({
  selector: 'app-employee-personal-profile',
  templateUrl: './employee-personal-profile.component.html',
  styleUrls: ['./employee-personal-profile.component.css']
})
export class EmployeePersonalProfileComponent implements OnInit {

  nameDepartment = ''; nameCompany = '';
  listTasks: Task[];
  listRequests: Request[];

  constructor(public app: AppComponent, private router: Router, private auth: AuthAdmineService, private serviceEmplo: EmployeeService, private serviceDepa: DepartmentService, private serviceAdmine: AdmineServiceService, private serviceTask: TaskService, private serviceRequest: RequestService) { }

  ngOnInit() {
    this.app.employee();
    this.serviceEmplo.selectedEmployee = this.auth.getUser();
    this.serviceDepa.getDepartment(this.serviceEmplo.selectedEmployee.departament)
      .subscribe(res => {
        this.nameDepartment = res.name;
      });
    this.serviceAdmine.getAdmine(this.serviceEmplo.selectedEmployee.nameCompany)
      .subscribe((res: any) => {
        this.nameCompany = res.Adminee.nameCompany;
      });
    this.getTasks();
    this.getRequests();
  }

  getTasks() {
    this.serviceTask.getTasks()
      .subscribe(data =>
        this.listTasks = data);
  }

  getRequests() {
    this.serviceRequest.getRequests()
      .subscribe(data =>
        this.listRequests = data);
  }

  editProfile() {
    this.router.navigate(['employee/profile/edit']);
  }

}
