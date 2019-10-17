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
