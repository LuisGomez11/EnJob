import { Component, OnInit } from '@angular/core';
import { AuthAdmineService } from 'src/app/services/auth-admine.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EmployeeService } from 'src/app/services/employee.service';

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
    }),
    role: new FormControl('', {
      validators: Validators.required
    })
  });

  constructor(private auth: AuthAdmineService, private router: Router, private authEmplo: EmployeeService) { }


  ngOnInit() {
    document.getElementById('nav-principal').style.display = 'none';
    document.getElementById('nav-admin').style.display = 'none';
    document.getElementById('menu-admin').style.display = 'none';
    document.getElementById('nav-empo').style.display = 'none';
    document.getElementById('nav-supervisor').style.display = 'none';
    document.getElementById('nav-sadmin').style.display = 'none';

    if (localStorage.getItem("USER") !== null) {
      if(this.auth.getUser().role === 'Admin RH'){
        if(this.auth.getUser().state === 'Inactivo'){
          this.router.navigateByUrl('/admin/subscriptions');
        }else{
          this.router.navigateByUrl('/admin');
        }        
      } else if(this.auth.getUser().role === 'Empleado'){
        this.router.navigateByUrl('/employee');
      } else if(this.auth.getUser().role === 'Supervisor'){
        this.router.navigateByUrl('/supervisor');
      }
      
    }

  }


  async onLogin() {
    if(this.FormLogin.value.role === 'Admin RH'){
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
    }else if(this.FormLogin.value.role === 'Empleado'){
      this.authEmplo.login(this.FormLogin.value).toPromise().then(res => {
        if (res) {
          console.log(res);
          // Guardar token
          this.authEmplo.saveToken(res.dataUser.accessToken);
          // Guardar Employee
          this.authEmplo.saveEmplo(res.dataUser);
  
          window.location.reload();
        }
  
      }).catch((err) => {
  
      });
    }
    

  }

}
