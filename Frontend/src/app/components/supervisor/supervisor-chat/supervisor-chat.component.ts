import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

declare var $ : any;

@Component({
  selector: 'app-supervisor-chat',
  templateUrl: './supervisor-chat.component.html',
  styleUrls: ['./supervisor-chat.component.css']
})
export class SupervisorChatComponent implements OnInit {

  constructor(public app : AppComponent) { }

  ngOnInit() {
    this.app.supervisor();
    $('.sconfig-perfil').click(function () {
      $('.scontent-configurations').toggleClass('sconfig-active');
    });
  }

}
