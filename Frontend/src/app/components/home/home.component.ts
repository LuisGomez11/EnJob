import { Component, OnInit } from '@angular/core';

declare var $ : any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.logo-nav').hide();
    $('#nav-principal').show();
    $('#nav-admin').hide();
    $('.menu-admin').hide();
    $('#nav-sadmin').hide();
    $('#nav-supervisor').hide();
    $('#nav-empo').hide();
    $(window).scroll(function () {
      var scrollPos = $(window).scrollTop();

      if(scrollPos>0){
        $('#nav-principal').removeClass('bg-transparent');
        $('#nav-principal').addClass('bg-white');
        $('.logo-nav').show();
      }else{
        $('#nav-principal').addClass('bg-transparent');
        $('#nav-principal').removeClass('bg-white');
        $('.logo-nav').hide();
      }
    });
  }

}
