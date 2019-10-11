import { Component, OnInit } from '@angular/core';

declare var $ : any;

@Component({
  selector: 'app-supervisor-home',
  templateUrl: './supervisor-home.component.html',
  styleUrls: ['./supervisor-home.component.css']
})
export class SupervisorHomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('#nav-principal').hide();
    $('#nav-admin').hide();
    $('.menu-admin').hide();
    $('#nav-empo').hide();
    $('#nav-sadmin').hide(); 
    $('#nav-supervisor').show();
  }

}
