import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

declare var $ : any;

@Component({
  selector: 'app-supervisor-kanban',
  templateUrl: './supervisor-kanban.component.html',
  styleUrls: ['./supervisor-kanban.component.css']
})
export class SupervisorKanbanComponent implements OnInit {

  constructor(public app : AppComponent) { }

  ngOnInit() {
    this.app.supervisor();
    $('.sconfig-perfil').click(function () {
      $('.scontent-configurations').toggleClass('sconfig-active');
    });
  }

}
