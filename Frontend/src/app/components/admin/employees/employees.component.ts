import { Component, OnInit } from '@angular/core';

declare var $ : any;

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('#nav-principal').hide();
    $('#nav-admin').show();
    $('.menu-admin').show();
    $('#nav-empo').hide();
    $('#nav-sadmin').hide();
  }

}
