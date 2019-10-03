import { Component, OnInit } from '@angular/core';

declare var $ : any;

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('#nav-principal').hide();
    $('#nav-admin').show();
    $('.menu-admin').show();
    $(window).resize(function(){

      if ($(window).width() <= 991) {  
      $('.menu-admin').hide();
      	$('.menu-admin').css("width", "100%");
      	$('.contenedor').css("margin-left", "0");
      	$('#header-info').addClass("header-sm");
      	$('#header-info').css("float", "left");
      }  else{
      $('.menu-admin').show();
		$('.menu-admin').css("width", "280px");
		$('.contenedor').css("margin-left", "280px");
		$('#header-info').removeClass("header-sm");
      }   

});
  }

}
