import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

declare var $: any;

@Component({
  selector: 'app-employee-home',
  templateUrl: './employee-home.component.html',
  styleUrls: ['./employee-home.component.css']
})
export class EmployeeHomeComponent implements OnInit {

  constructor(public app : AppComponent) { }

  ngOnInit() {
    this.app.employee();
    $('.config-perfil').click(function () {
      $('.content-configurations').toggleClass('config-active');
    });
  }

}
