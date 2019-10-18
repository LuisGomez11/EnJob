import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

declare var $ : any;

@Component({
  selector: 'app-employee-kanban',
  templateUrl: './employee-kanban.component.html',
  styleUrls: ['./employee-kanban.component.css']
})
export class EmployeeKanbanComponent implements OnInit {

  constructor(public app : AppComponent) { }

  ngOnInit() {
    this.app.employee();
    $('.config-perfil').click(function () {
      $('.content-configurations').toggleClass('config-active');
    });
  }

}
