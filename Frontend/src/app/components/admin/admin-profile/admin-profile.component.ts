import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { AuthAdmineService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css']
})
export class AdminProfileComponent implements OnInit {

  constructor(public app : AppComponent,private auth: AuthAdmineService) { }

  name = ''; lastName = ''; userName = '';
  nameCompany = ''; email = ''; phone = '';
  numDocument = '';
  ngOnInit() {
    this.app.admin();
    this.name = this.auth.getUser().name;
    this.lastName = this.auth.getUser().lastName;
    this.userName = this.auth.getUser().userName;
    this.nameCompany = this.auth.getUser().nameCompany;
    this.email = this.auth.getUser().email;
    this.phone = this.auth.getUser().phone;
    this.numDocument = this.auth.getUser().numDocument;
  }

}
