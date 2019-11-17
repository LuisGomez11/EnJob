import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { AuthAdmineService } from 'src/app/services/auth-admine.service';
import { Router } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-employee-config',
  templateUrl: './employee-config.component.html',
  styleUrls: ['./employee-config.component.css']
})
export class EmployeeConfigComponent implements OnInit {

  constructor(public app: AppComponent, private auth: AuthAdmineService, private router: Router) { }

  name = ''; lastName = '';

  ngOnInit() {
    this.app.employee();
    this.name = this.auth.getUser().name;
    this.lastName = this.auth.getUser().lastName;
  }

  logOut() {
    this.auth.logOut();
    this.router.navigateByUrl('/login');
  }

}
