import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

declare var $ : any;

@Component({
  selector: 'app-supervisor-config',
  templateUrl: './supervisor-config.component.html',
  styleUrls: ['./supervisor-config.component.css']
})
export class SupervisorConfigComponent implements OnInit {

  constructor(public app : AppComponent) { }

  ngOnInit() {
    this.app.supervisor();
    $('.sconfig-perfil').click(function () {
      $('.scontent-configurations').toggleClass('sconfig-active');
    });
  }

}
