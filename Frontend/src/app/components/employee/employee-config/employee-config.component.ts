import { Component, OnInit } from '@angular/core';

declare var $ : any;

@Component({
  selector: 'app-employee-config',
  templateUrl: './employee-config.component.html',
  styleUrls: ['./employee-config.component.css']
})
export class EmployeeConfigComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('#nav-principal').hide();
    $('#nav-admin').hide();
    $('.menu-admin').hide();
    $('#nav-empo').show();
    $('#nav-sadmin').hide();
    $('#nav-supervisor').hide();
    if ($(window).width() <= 991) {
      $('#name-user').hide();
      $('.navbar-brand').hide();
      $('#icon-home').show();
      $('#content-icons').addClass('content-icons-block');
      $('#content-icons').removeClass('navbar-nav');
    } else {
      $('#name-user').show();
      $('.navbar-brand').show();
      $('#icon-home').hide();
      $('#content-icons').removeClass('content-icons-block');
      $('#content-icons').addClass('navbar-nav');
    }
    $(window).resize(function () {
      if ($(window).width() <= 991) {
        $('#name-user').hide();
        $('.navbar-brand').hide();
        $('#icon-home').show();
        $('#content-icons').addClass('content-icons-block');
        $('#content-icons').removeClass('navbar-nav');
      } else {
        $('#name-user').show();
        $('.navbar-brand').show();
        $('#icon-home').hide();
        $('#content-icons').removeClass('content-icons-block');
        $('#content-icons').addClass('navbar-nav');
      }
    });
  }

}
