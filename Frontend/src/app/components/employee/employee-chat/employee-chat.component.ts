import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

declare var $ : any;

@Component({
  selector: 'app-employee-chat',
  templateUrl: './employee-chat.component.html',
  styleUrls: ['./employee-chat.component.css']
})
export class EmployeeChatComponent implements OnInit {

  constructor(public app : AppComponent) { }

  ngOnInit() {
    this.app.employee();
    $('.config-perfil').click(function () {
      $('.content-configurations').toggleClass('config-active');
    });
  }

}
