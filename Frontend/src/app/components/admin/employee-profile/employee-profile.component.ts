import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

declare var $ : any;

@Component({
  selector: 'app-employee-profile',
  templateUrl: './employee-profile.component.html',
  styleUrls: ['./employee-profile.component.css']
})
export class EmployeeProfileComponent implements OnInit {

  constructor(public app : AppComponent) { }

  ngOnInit() {
    this.app.admin();
  }

}
