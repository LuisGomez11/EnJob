import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-employee-changepass',
  templateUrl: './employee-changepass.component.html',
  styleUrls: ['./employee-changepass.component.css']
})
export class EmployeeChangepassComponent implements OnInit {

  constructor(public app : AppComponent) { }

  ngOnInit() {
    this.app.employee();
  }

}
