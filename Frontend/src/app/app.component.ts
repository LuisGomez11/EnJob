import { Component, OnInit } from '@angular/core';
import { AuthAdmineService } from './services/auth-admine.service';
import { Router } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ENJOB';


  constructor(private auth: AuthAdmineService, private router: Router) { }

  logOut() {
    this.auth.logOut();
    this.router.navigateByUrl('/login');
  }

  sadmin = function () {
    document.getElementById('nav-principal').style.display = 'none';
    document.getElementById('nav-admin').style.display = 'none';
    document.getElementById('menu-admin').style.display = 'none';
    document.getElementById('nav-empo').style.display = 'none';
    document.getElementById('nav-supervisor').style.display = 'none';
    document.getElementById('nav-sadmin').style.display = 'block';
  }

  admin = function () {
    document.getElementById('nav-principal').style.display = 'none';
    document.getElementById('nav-admin').style.display = 'block';
    document.getElementById('menu-admin').style.display = 'block';
    document.getElementById('nav-empo').style.display = 'none';
    document.getElementById('nav-supervisor').style.display = 'none';
    document.getElementById('nav-sadmin').style.display = 'none';
    $('.messages').animate({ scrollTop: $(document).height() }, "fast");
    $('.links-admin').click(() => {
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
    document.getElementById('nav-principal').style.display = 'none';
    document.getElementById('nav-admin').style.display = 'none';
    document.getElementById('menu-admin').style.display = 'none';
    document.getElementById('nav-empo').style.display = 'block';
    document.getElementById('nav-supervisor').style.display = 'none';
    document.getElementById('nav-sadmin').style.display = 'none';
    $('.messages1').animate({ scrollTop: $(document).height() }, "fast");
  }

  supervisor = function () {
    document.getElementById('nav-principal').style.display = 'none';
    document.getElementById('nav-admin').style.display = 'none';
    document.getElementById('menu-admin').style.display = 'none';
    document.getElementById('nav-empo').style.display = 'none';
    document.getElementById('nav-supervisor').style.display = 'block';
    document.getElementById('nav-sadmin').style.display = 'none';
    $('.messages1').animate({ scrollTop: $(document).height() }, "fast");
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


  user = ''; nameCompany = '';name = ''; lastName = ''; photo = '';
  
  ngOnInit() {
    if (localStorage.getItem("USER") === null) {
      this.name = 'Indefinido';
      this.lastName = 'Indefinido';
      this.user = 'Indefinido';
      this.nameCompany = 'Indefinido';
      this.photo = '../assets/img/image-not-found.png';
    } else {
      this.name = this.auth.getUser().name;
      this.lastName = this.auth.getUser().lastName;
      this.user = this.auth.getUser().userName;
      this.nameCompany = this.auth.getUser().nameCompany;
      this.photo = this.auth.getUser().photo;
    }
  }

}
