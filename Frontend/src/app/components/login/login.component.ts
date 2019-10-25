import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthAdmineService } from '../../services/admine/auth-admine.service';
import { NgForm } from "@angular/forms";

declare var $ : any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
<<<<<<< HEAD
  role = '';
  constructor(private auth: AuthAdmineService, private router: Router) { }
=======

  constructor(private authService: AuthAdmineService, private router: Router) { }
>>>>>>> 76c09990ccf339afcfbc21f7fd2fc514122b4f32

  ngOnInit() {
    $('#nav-principal').hide();
    $('#nav-admin').hide();
    $('.menu-admin').hide();
    $('#nav-sadmin').hide();
    $('#nav-supervisor').hide();
    $('#nav-empo').hide();
  }
  onLogin(form): void {
<<<<<<< HEAD

      this.auth.login(form.value).subscribe(res => {
        this.role = this.auth.AdmineUser;
        if(this.role === 'admine'){
          this.router.navigateByUrl('/admin');
        } else if(this.role === 'employee'){
          this.router.navigateByUrl('/employee');
        }
        
      });
    
=======
    this.authService.login(form.value).subscribe(res => {
      this.router.navigateByUrl('/admin');
    });
>>>>>>> 76c09990ccf339afcfbc21f7fd2fc514122b4f32
  }
}
