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
  role = '';
  
  constructor(private auth: AuthAdmineService, private router: Router) { }

  ngOnInit() {
    $('#nav-principal').hide();
    $('#nav-admin').hide();
    $('.menu-admin').hide();
    $('#nav-sadmin').hide();
    $('#nav-supervisor').hide();
    $('#nav-empo').hide();
  }
  onLogin(form): void {

      this.auth.login(form.value).subscribe(res => {
        this.role = this.auth.AdmineUser;
        if(this.role === 'admine'){
          this.router.navigateByUrl('/admin');
        } else if(this.role === 'employee'){
          this.router.navigateByUrl('/employee');
        }
        
      });

  }
}
