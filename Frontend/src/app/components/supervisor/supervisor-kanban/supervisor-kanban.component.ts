import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { NgForm  } from "@angular/forms";
import { TaskService } from "../../../services/task.service";
import { Task } from "../../../models/task";
import  swal  from "sweetalert2";

declare var $ : any;

@Component({
  selector: 'app-supervisor-kanban',
  templateUrl: './supervisor-kanban.component.html',
  styleUrls: ['./supervisor-kanban.component.css']
})
export class SupervisorKanbanComponent implements OnInit {

  task: Task = new Task();
  listTasks: Task[];

  constructor(public app : AppComponent, private service: TaskService) { }

  ngOnInit() {
    this.app.supervisor();
    $('.sconfig-perfil').click(function () {
      $('.scontent-configurations').toggleClass('sconfig-active');
    });
    this.getTasks();
  }

  getTasks(){
    this.service.getTasks()
    .subscribe(data =>
      this.listTasks = data);
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
