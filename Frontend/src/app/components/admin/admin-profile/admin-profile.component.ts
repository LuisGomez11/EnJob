import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { AuthAdmineService } from 'src/app/services/auth.service';
import { AdmineServiceService } from 'src/app/services/admine.service';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css']
})
export class AdminProfileComponent implements OnInit {

  constructor(public app : AppComponent,private auth: AuthAdmineService, private service: AdmineServiceService) { }

  ngOnInit() {
    this.app.admin();
    this.service.selectedAdmine = this.auth.getUser();
  }

}
