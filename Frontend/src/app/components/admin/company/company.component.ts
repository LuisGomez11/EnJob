import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('#nav-principal').hide();
    $('#nav-admin').show();
    $('.menu-admin').show();
    $('#nav-empo').hide();
    if ($(window).width() <= 1106) {
      $('.list-companys').addClass("table-responsive");
    }else{
      $('.list-companys').removeClass("table-responsive");
    }
  }

}
