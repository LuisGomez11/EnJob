import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { TaskService } from 'src/app/services/task.service';
import { AuthAdmineService } from 'src/app/services/auth-admine.service';
import { DepartmentService } from 'src/app/services/department.service';

declare var $: any;

@Component({
  selector: 'app-e-details-task',
  templateUrl: './e-details-task.component.html',
  styleUrls: ['./e-details-task.component.css']
})
export class EDetailsTaskComponent implements OnInit {

  constructor(public app: AppComponent, private service: TaskService, private router: Router, private auth: AuthAdmineService,
    private serviceDepartment: DepartmentService) { }

  assigned = ''; nameDepartment = '';

  ngOnInit() {
    this.app.employee();

    const idTask = localStorage.getItem('idTask');

    if (!idTask) {
      this.router.navigate(['employee/kanban']);
      return;
    }

    this.service.getTask(idTask)
      .subscribe(data => {
        this.service.selectedTask = data;
      });

    this.assigned = this.auth.getUser().name + ' ' + this.auth.getUser().lastName;
    this.serviceDepartment.getDepartment(this.auth.getUser().departament)
    .subscribe(res => {
      this.nameDepartment=res.name;
    });
  }

}
