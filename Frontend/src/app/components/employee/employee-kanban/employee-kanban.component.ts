import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { TaskService } from 'src/app/services/task/task.service';
import { Task } from 'src/app/models/task/task';
import { NgForm } from '@angular/forms';
import  swal  from "sweetalert2";

declare var $ : any;

@Component({
  selector: 'app-employee-kanban',
  templateUrl: './employee-kanban.component.html',
  styleUrls: ['./employee-kanban.component.css']
})
export class EmployeeKanbanComponent implements OnInit {

  task: Task = new Task();
  listTasks: Task[];

  constructor(public app : AppComponent, private service: TaskService) { }

  ngOnInit() {
    this.app.employee();
    $('.config-perfil').click(function () {
      $('.content-configurations').toggleClass('config-active');
    });
    this.getTasks();
  }

  getTasks(){
    this.service.getTasks()
    .subscribe(data =>
      this.listTasks = data);
  }

  changeProgress(task:Task){
    task.stateTask = 'En proceso';
    this.service.updateTask(task).subscribe(data => {
      console.log(data);
      this.getTasks();
    },error => {
      console.log(error);
    });
  }

  changePending(task:Task){
    task.stateTask = 'Pendiente';
    this.service.updateTask(task).subscribe(data => {
      console.log(data);
      this.getTasks();
    },error => {
      console.log(error);
    });
  }

  changeFinish(task:Task){
    task.stateTask = 'Finalizada';
    this.service.updateTask(task).subscribe(data => {
      console.log(data);
      this.getTasks();
    },error => {
      console.log(error);
    });
  }

  change(form: NgForm){
    if(form.value.idDepartment){
      this.service.updateTask(form.value).subscribe(data => {
        swal.fire({
          position: 'center',
          type: 'success',
          title: 'Correcto!',
          text: 'Departamento modificado correctamente',
          showConfirmButton: false,
          timer: 1500
        });
        this.getTasks();
        this.resetForm(form);
      });
    }
  }

  resetForm(form?: NgForm){
    if(form){
      form.reset();
      this.service.selectedTask = new Task();
    }
 }

}
