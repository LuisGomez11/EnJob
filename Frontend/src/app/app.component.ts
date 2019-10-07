import { Component, OnInit } from '@angular/core';

declare var $ : any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Frontend';
  constructor() { }

  ngOnInit() {
    $('.links-admin').click(function () {
      $('.menu-admin').removeClass('menu-activado');
    });
    $('#menu-slide').click(function () {
      $('.menu-admin').addClass('menu-activado');
    });
    $('#menu-slide2').click(function () {
      $('.menu-admin').removeClass('menu-activado');
    });
    if ($(window).width() <= 1106) {
      $('.list-companys').addClass("table-responsive");
    }else{
      $('.list-companys').removeClass("table-responsive");
    }
    if ($(window).width() <= 991) {
      $('.menu-admin').css("width", "100%");
      $('#notification').hide();
      $('#link-notification').show();
    } else {
      $('.menu-admin').css("width", "280px");
      $('#notification').show();
      $('#link-notification').hide();
    }
    $(window).resize(function () {
      if ($(window).width() <= 1106) {
        $('.list-companys').addClass("table-responsive");
      }else{
        $('.list-companys').removeClass("table-responsive");
      }
      if ($(window).width() <= 991) {
        $('.menu-admin').css("width", "100%");
        $('#notification').hide();
        $('#link-notification').show();
      } else {
        $('.menu-admin').css("width", "280px");
        $('#notification').show();
        $('#link-notification').hide();
      }

    });
    $('#notification').click(function () {
      $('.content-notifications').toggleClass('notifi-active');
    });
    $('#config-perfil').click(function () {
      $('.content-configurations').toggleClass('config-active');
    });
  }
  
}
