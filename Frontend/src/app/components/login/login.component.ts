import { Component, OnInit } from '@angular/core';
import { AuthAdmineService } from 'src/app/services/auth-admine.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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
    document.getElementById('nav-principal').style.display = 'none';
    document.getElementById('nav-admin').style.display = 'none';
    document.getElementById('menu-admin').style.display = 'none';
    document.getElementById('nav-empo').style.display = 'none';
    document.getElementById('nav-supervisor').style.display = 'none';
    document.getElementById('nav-sadmin').style.display = 'none';

    if (localStorage.getItem("USER") !== null) {
      this.router.navigateByUrl('/admin');
    }

  }


  async onLogin() {

    this.auth.login(this.FormLogin.value).toPromise().then(res => {
      if (res) {
        console.log(res);
        // Guardar token
        this.auth.saveToken(res.dataUser.accessToken);
        // Guardar Admin
        this.auth.saveAdmin(res.dataUser);

        window.location.reload();
      }

    }).catch((err) => {

    });

  }

}
