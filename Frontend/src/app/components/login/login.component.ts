import { Component, OnInit } from '@angular/core';
import { AuthAdmineService } from 'src/app/services/auth-admine.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import swal from "sweetalert2";

declare var $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userNameAdmin = '';
  FormLogin: FormGroup = new FormGroup({
    userName: new FormControl('', {
      validators: Validators.required
    }),
    password: new FormControl('', {
      validators: Validators.required
    })
  });

  constructor(private auth: AuthAdmineService, private router: Router) { }


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
      if (res) {
        console.log(res);
        this.router.navigateByUrl('/admin');
        swal.fire({
          position: 'center',
          type: 'success',
          title: 'Bienvenido!',
          text: `${res.dataUser.userName}`,
          showConfirmButton: false,
          timer: 3000
        });

        // Guardar token
        this.auth.saveToken(res.dataUser.accessToken);
        // Guardar Admin
        this.auth.saveAdmin(res.dataUser);
      }

    }).catch((err) => {

    });

  }

}
