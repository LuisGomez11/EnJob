import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-employee-edit-profile',
  templateUrl: './employee-edit-profile.component.html',
  styleUrls: ['./employee-edit-profile.component.css']
})
export class EmployeeEditProfileComponent implements OnInit {

  constructor(public app : AppComponent) { }

  ngOnInit() {
    this.app.employee();
  }

}
