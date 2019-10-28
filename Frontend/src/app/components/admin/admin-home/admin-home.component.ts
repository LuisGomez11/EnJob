import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { AuthAdmineService } from 'src/app/services/admine/auth-admine.service';

declare var $: any;

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  constructor(public app : AppComponent, private auth: AuthAdmineService) { }

  admineUser = '';

  ngOnInit() {
    this.app.admin();
    this.admineUser = this.auth.AdmineUser;
    console.log('Este es el usuario: '+this.admineUser);
  }

}
