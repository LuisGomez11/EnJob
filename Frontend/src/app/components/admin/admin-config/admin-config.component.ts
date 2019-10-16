import { Component, OnInit } from '@angular/core';

declare var $ : any;

@Component({
  selector: 'app-admin-config',
  templateUrl: './admin-config.component.html',
  styleUrls: ['./admin-config.component.css']
})
export class AdminConfigComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  $('#nav-principal').hide();
    $('#nav-admin').show();
    $('.menu-admin').show();
    $('#nav-empo').hide();
    $('#nav-sadmin').hide();
    $('#nav-supervisor').hide();
  }

}
