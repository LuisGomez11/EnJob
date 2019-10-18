import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

declare var $ : any;

@Component({
  selector: 'app-supervisor-tasks',
  templateUrl: './supervisor-tasks.component.html',
  styleUrls: ['./supervisor-tasks.component.css']
})
export class SupervisorTasksComponent implements OnInit {

  constructor(public app : AppComponent) { }

  ngOnInit() {
    this.app.supervisor();
    $('.sconfig-perfil').click(function () {
      $('.scontent-configurations').toggleClass('sconfig-active');
    });
  }

}
