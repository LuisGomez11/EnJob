import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

declare var $ : any;

@Component({
  selector: 'app-employee-config',
  templateUrl: './employee-config.component.html',
  styleUrls: ['./employee-config.component.css']
})
export class EmployeeConfigComponent implements OnInit {

  constructor(public app : AppComponent) { }

  ngOnInit() {
    this.app.employee();
    $('.config-perfil').click(function () {
      $('.content-configurations').toggleClass('config-active');
    });
  }

}
