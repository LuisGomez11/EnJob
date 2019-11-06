import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

declare var $ : any;

@Component({
  selector: 'app-employee-personal-profile',
  templateUrl: './employee-personal-profile.component.html',
  styleUrls: ['./employee-personal-profile.component.css']
})
export class EmployeePersonalProfileComponent implements OnInit {

  constructor(public app : AppComponent) { }

  ngOnInit() {
    this.app.employee();
  }

}
