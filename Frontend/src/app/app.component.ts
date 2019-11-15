import { Component, OnInit } from '@angular/core';
import { AuthAdmineService } from './services/admine/auth-admine.service';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ENJOB';

  user = 'LuisGomez11';


  constructor(private auth: AuthAdmineService) { }

  

  sadmin = function () {
    $('#nav-principal').hide();
    $('#nav-admin').hide();
    $('.menu-admin').hide();
    $('#nav-empo').hide();
    $('#nav-sadmin').show();
    $('#nav-supervisor').hide();
    $('#nav-empo').hide();
  }

  admin = function () {
    $('#nav-principal').hide();
    $('#nav-admin').show();
    $('.menu-admin').show();
    $('#nav-empo').hide();
    $('#nav-sadmin').hide();
    $('#nav-supervisor').hide();
    $('.messages').animate({ scrollTop: $(document).height() }, "fast");
    if ($(window).width() <= 991) {
      $('.menu-admin').css("width", "100%");
      $('#notification-admin').hide();
      $('#admin-messages').hide();
      $('#link-notification').show();
      $('#link-messages-a').show();
    } else {
      $('.menu-admin').css("width", "280px");
      $('#notification-admin').show();
      $('#admin-messages').show();
      $('#link-notification').hide();
      $('#link-messages-a').hide();
    }
    $(window).resize(function () {
      if ($(window).width() <= 991) {
        $('.menu-admin').css("width", "100%");
        $('#notification-admin').hide();
        $('#admin-messages').hide();
        $('#link-notification').show();
        $('#link-messages-a').show();
      } else {
        $('.menu-admin').css("width", "280px");
        $('#notification-admin').show();
        $('#admin-messages').show();
        $('#link-notification').hide();
        $('#link-messages-a').hide();
      }

    });
    $('.links-admin').click( () => {
      $('.menu-admin').removeClass('menu-activado');
    });
    $('.menu-slides').click(function () {
      $('.menu-admin').addClass('menu-activado');
    });
    $('#menu-slide2').click(function () {
      $('.menu-admin').removeClass('menu-activado');
    });
    $("#myInput").on("keyup", function () {
      var value = $(this).val().toLowerCase();
      $("#myTable tr").filter(function () {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
  }

  employee = function () {
    $('#nav-principal').hide();
    $('#nav-admin').hide();
    $('.menu-admin').hide();
    $('#nav-empo').show();
    $('#nav-sadmin').hide();
    $('#nav-supervisor').hide();
    $('.messages1').animate({ scrollTop: $(document).height() }, "fast");
    if ($(window).width() <= 991) {
      $('#name-usere').hide();
      $('#nav-employe-brand').hide();
      $('#icon-home').show();
      $('#content-icons').addClass('content-icons-block');
      $('#content-icons').removeClass('navbar-nav');
    } else {
      $('#name-usere').show();
      $('#nav-employe-brand').show();
      $('#icon-home').hide();
      $('#content-icons').removeClass('content-icons-block');
      $('#content-icons').addClass('navbar-nav');
    }
    $(window).resize(function () {
      if ($(window).width() <= 991) {
        $('#name-usere').hide();
        $('#nav-employe-brand').hide();
        $('#icon-home').show();
        $('#content-icons').addClass('content-icons-block');
        $('#content-icons').removeClass('navbar-nav');
      } else {
        $('#name-usere').show();
        $('#nav-employe-brand').show();
        $('#icon-home').hide();
        $('#content-icons').removeClass('content-icons-block');
        $('#content-icons').addClass('navbar-nav');
      }
    });

  }

  supervisor = function () {
    $('#nav-principal').hide();
    $('#nav-admin').hide();
    $('.menu-admin').hide();
    $('#nav-empo').hide();
    $('#nav-sadmin').hide();
    $('#nav-supervisor').show();
    $('.messages1').animate({ scrollTop: $(document).height() }, "fast");
    if ($(window).width() <= 991) {
      $('#name-users').hide();
      $('#nav-supervisor-brand').hide();
      $('#icon-homes').show();
      $('#content-iconss').addClass('content-icons-block');
      $('#content-iconss').removeClass('navbar-nav');
    } else {
      $('#name-users').show();
      $('#nav-supervisor-brand').show();
      $('#icon-homes').hide();
      $('#content-iconss').removeClass('content-icons-block');
      $('#content-iconss').addClass('navbar-nav');
    }
    $(window).resize(function () {
      if ($(window).width() <= 991) {
        $('#name-users').hide();
        $('#nav-supervisor-brand').hide();
        $('#icon-homes').show();
        $('#content-iconss').addClass('content-icons-block');
        $('#content-iconss').removeClass('navbar-nav');
      } else {
        $('#name-users').show();
        $('#nav-supervisor-brand').show();
        $('#icon-homes').hide();
        $('#content-iconss').removeClass('content-icons-block');
        $('#content-iconss').addClass('navbar-nav');
      }
    });
  }

  home = function () {
    $('.menu-home').hide();

    $('.logo-nav').hide();
    $('#nav-principal').show();
    $('#nav-admin').hide();
    $('.menu-admin').hide();
    $('#nav-sadmin').hide();
    $('#nav-supervisor').hide();
    $('#nav-empo').hide();


    $(window).scroll(function () {
      var scrollPos = $(window).scrollTop();
      if ($('.slide-home').hasClass('slide-active')) {
        $('#nav-principal').addClass('bg-transparent');
        $('#nav-principal').removeClass('bg-white');
        $('.logo-nav').hide();
        $('.name-product').css("color", "rgb(0, 0, 0)");
        $('.link-bg').css("color", "rgb(0, 0, 0)");
      } else {
        if (scrollPos > 0) {
          $('#nav-principal').removeClass('bg-transparent');
          $('#nav-principal').addClass('bg-white');
          $('#nav-principal').addClass('border-bottom');
          $('.logo-nav').show();
          $('.name-product').css("color", "rgb(12, 14, 173)");
          $('.link-bg').css("color", "rgb(12, 14, 173)");
        } else {
          $('#nav-principal').addClass('bg-transparent');
          $('#nav-principal').removeClass('bg-white');
          $('#nav-principal').removeClass('border-bottom');
          $('.logo-nav').hide();
          $('.name-product').css("color", "rgb(0, 0, 0)");
          $('.link-bg').css("color", "rgb(0, 0, 0)");
        }
      }
    });

    if ($(window).width() <= 991) {
      $('.home-link').hide();
      $('.menu-home').show();
    } else {
      $('.home-link').show();
      $('.menu-home').hide();
    }
    $(window).resize(function () {
      if ($(window).width() <= 991) {
        $('.home-link').hide();
        $('.menu-home').show();
      } else {
        $('.home-link').show();
        $('.menu-home').hide();
      }

    });

    $('.menu-home').click(function () {
      if ($('.slide-home').hasClass('slide-active') && $(window).scrollTop() > 0) {
        $('#nav-principal').removeClass('bg-transparent');
        $('#nav-principal').addClass('bg-white');
        $('#nav-principal').addClass('border-bottom');
        $('.logo-nav').show();
        $('.name-product').css("color", "rgb(12, 14, 173)");
        $('.link-bg').css("color", "rgb(12, 14, 173)");
      }
      if ($(window).scrollTop() > 0 && !($('.slide-home').hasClass('slide-active'))) {
        $('#nav-principal').addClass('bg-transparent');
        $('#nav-principal').removeClass('bg-white');
        $('#nav-principal').removeClass('border-bottom');
        $('.logo-nav').hide();
        $('.name-product').css("color", "rgb(0, 0, 0)");
        $('.link-bg').css("color", "rgb(0, 0, 0)");
      }
    });
    $('.menu-home').click(function () {
      $('.slide-home').toggleClass('slide-active');
    });
    $('.text-decoration-none').click(function () {
      $('.slide-home').removeClass('slide-active');
    });

  }

  ngOnInit() {
    // this.user = this.auth.getUser();
  }

}
