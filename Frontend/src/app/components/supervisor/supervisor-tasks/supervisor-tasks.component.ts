import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { NgForm  } from "@angular/forms";
import { TaskService } from "../../../services/task/task.service";
import { Task } from "../../../models/task/task";
import  swal  from "sweetalert2";

declare var $ : any;

@Component({
  selector: 'app-supervisor-tasks',
  templateUrl: './supervisor-tasks.component.html',
  styleUrls: ['./supervisor-tasks.component.css']
})
export class SupervisorTasksComponent implements OnInit {

  task: Task = new Task();
  

  constructor(public app : AppComponent, private service: TaskService) { }

  ngOnInit() {
    this.app.supervisor();
    $('.sconfig-perfil').click(function () {
      $('.scontent-configurations').toggleClass('sconfig-active');
    });
  }

  createTask(form: NgForm){
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
      });
  }

  resetForm(form?: NgForm){
     if(form){
       form.reset();
       this.service.selectedTask = new Task();
     }
  }

}
