import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { AuthAdmineService } from 'src/app/services/auth-admine.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-supervisor-config',
  templateUrl: './supervisor-config.component.html',
  styleUrls: ['./supervisor-config.component.css']
})
export class SupervisorConfigComponent implements OnInit {

  constructor(public app : AppComponent, private auth: AuthAdmineService, private router: Router) { }

  name = ''; lastName = '';

  ngOnInit() {
    this.app.employee();
    if (localStorage.getItem("USER") === null) {
      this.name = 'Indefinido';
      this.lastName = 'Indefinido';
    } else {
      this.name = this.auth.getUser().name;
      this.lastName = this.auth.getUser().lastName;
    }
  }

  logOut() {
    this.auth.logOut();
    this.router.navigateByUrl('/login');
  }

}
