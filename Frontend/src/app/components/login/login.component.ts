import { Component, OnInit } from '@angular/core';
import { AuthAdmineService } from 'src/app/services/admine/auth-admine.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

declare var $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  role = '';
  FormLogin: FormGroup = new FormGroup({
    userName: new FormControl('', {
      validators: Validators.required
    }),
    password: new FormControl('', {
      validators: Validators.required
    })
  });

  constructor(private auth: AuthAdmineService, private router: Router) { } y


  ngOnInit() {
    $('#nav-principal').hide();
    $('#nav-admin').hide();
    $('.menu-admin').hide();
    $('#nav-sadmin').hide();
    $('#nav-supervisor').hide();
    $('#nav-empo').hide();
  }


  async onLogin() {

    this.auth.login(this.FormLogin.value).toPromise().then(res => {
      console.log(res)
      this.router.navigateByUrl('/admin');  

            if (res) {
                // guardar token
                console.log(res)
                // this.saveToken(res.dataUser.accessToken);
                // this.AdmineUser =  res.dataUser.userName;
                // this.role = res.dataUser.role;
            }     

    }).catch( (err)=>{

    }) ;

  }






}
