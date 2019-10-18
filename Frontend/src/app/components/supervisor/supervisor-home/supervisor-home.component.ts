import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

declare var $ : any;

@Component({
  selector: 'app-supervisor-home',
  templateUrl: './supervisor-home.component.html',
  styleUrls: ['./supervisor-home.component.css']
})
export class SupervisorHomeComponent implements OnInit {

  constructor(public app : AppComponent) { }

  ngOnInit() {
    this.app.supervisor();
    $('.sconfig-perfil').click(function () {
      $('.scontent-configurations').toggleClass('sconfig-active');
    });
  }

}
