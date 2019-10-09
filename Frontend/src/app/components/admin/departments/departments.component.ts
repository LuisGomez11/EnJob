import { Component, OnInit } from '@angular/core';

declare var $ : any;

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('#nav-principal').hide();
    $('#nav-admin').show();
    $('.menu-admin').show();
    $('#nav-empo').hide();
    $('#nav-sadmin').hide();
    if ($(window).width() <= 1106) {
      $('.list-companys').addClass("table-responsive");
    }else{
      $('.list-companys').removeClass("table-responsive");
    }
  }

}
