import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { Task } from 'src/app/models/task';
import { TaskService } from 'src/app/services/task.service';
import { EmployeeService } from 'src/app/services/employee.service';
import { DepartmentService } from 'src/app/services/department.service';

declare var $ : any;

@Component({
  selector: 'app-admin-kanban',
  templateUrl: './admin-kanban.component.html',
  styleUrls: ['./admin-kanban.component.css']
})
export class AdminKanbanComponent implements OnInit {

  listTasks: Task[];

  nameEmployee = ''; nameDepartment = '';

  constructor(public app: AppComponent, private service: TaskService, private serviceEmplo: EmployeeService, private serviceDep: DepartmentService) { }

  ngOnInit() {
    this.app.admin();
    this.getTasks();
  }

  getTasks() {
    this.service.getTasks()
      .subscribe(data =>
        this.listTasks = data);
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

}
