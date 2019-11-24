import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { Task } from 'src/app/models/task';
import  swal  from "sweetalert2";
import { TaskService } from 'src/app/services/task.service';
import { EmployeeService } from 'src/app/services/employee.service';
import { Employee } from 'src/app/models/employee';
import { Router } from '@angular/router';

@Component({
  selector: 'app-supervisor-list-tasks',
  templateUrl: './supervisor-list-tasks.component.html',
  styleUrls: ['./supervisor-list-tasks.component.css']
})
export class SupervisorListTasksComponent implements OnInit {

  task: Task = new Task();
  listTasks: Task[];

  constructor(public app: AppComponent, private service: TaskService, private router: Router) { }

  ngOnInit() {
    this.app.supervisor();
    this.getTasks();
  }

  getTasks(){
    this.service.getTasks()
    .subscribe(data =>
      this.listTasks = data);
  }

  viewDetails(task: Task) {
    localStorage.removeItem('IdTask');
    localStorage.setItem('IdTask', task.idTask.toString());
    this.router.navigate(['supervisor/task/details']);
  }

  async deleteTask(task: Task){

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

    if(result.value){
      this.service.deleteTask(task.idTask).subscribe(data => {
        this.listTasks = this.listTasks.filter(s => s !== task);
      });
      swal.fire('Eliminado!','Se ha eliminado la tarea.','success');
    }

  }

}
