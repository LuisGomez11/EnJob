import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { NgForm } from "@angular/forms";
import { TaskService } from "../../../services/task.service";
import { Task } from "../../../models/task";
import swal from "sweetalert2";
import { EmployeeService } from 'src/app/services/employee.service';

declare var $: any;

@Component({
  selector: 'app-supervisor-kanban',
  templateUrl: './supervisor-kanban.component.html',
  styleUrls: ['./supervisor-kanban.component.css']
})
export class SupervisorKanbanComponent implements OnInit {

  task: Task = new Task();
  listTasks: Task[];

  assigned = ''; newPoints = 0;

  constructor(public app: AppComponent, private service: TaskService, private serviceEmplo: EmployeeService) { }

  ngOnInit() {
    this.app.supervisor();
    this.getTasks();
  }

  getTasks() {
    this.service.getTasks()
      .subscribe(data =>
        this.listTasks = data);
  }

  approveTask(task: Task) {
    this.service.selectedTask = task;
    this.service.selectedTask.stateTask = 'Finalizada';

    this.service.updateTask(this.service.selectedTask)
      .subscribe(res => {
        console.log(res);
      });

    this.assigned = task.assigned;

    this.serviceEmplo.getEmployee(this.assigned)
      .subscribe((res: any) => {
        this.serviceEmplo.selectedEmployee = res.users;
        this.newPoints = parseInt(this.serviceEmplo.selectedEmployee.points) + parseInt(this.service.selectedTask.value);
        this.serviceEmplo.selectedEmployee.points = this.newPoints.toString();
        this.serviceEmplo.updateEmployee(this.serviceEmplo.selectedEmployee)
          .subscribe((res: any) => {
            console.log(res);
          }, error => {
            console.log(error);
          });
      });
  }

  cancelTask(task: Task) {
    this.service.selectedTask = task;
    this.service.selectedTask.stateTask = 'Pendiente';

    this.service.updateTask(this.service.selectedTask)
      .subscribe(res => {
        console.log(res);
      });
  }

  async deleteTask(task: Task) {

    let result = await swal.fire({
      title: 'Confirmacion',
      text: `¿Seguro que desea eliminar la tarea de: ${task.title}?`,
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085D6',
      cancelButtonColor: 'd33',
      confirmButtonText: 'Si, eliminar!',
      cancelButtonText: 'Cancelar'
    })

    if (result.value) {
      this.service.deleteTask(task.idTask).subscribe(data => {
        this.listTasks = this.listTasks.filter(s => s !== task);
      });
      swal.fire('Eliminado!', 'Se ha eliminado la tarea.', 'success');
    }

  }


}
