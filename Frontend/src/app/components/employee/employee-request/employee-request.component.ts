import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { Router } from '@angular/router';

declare var $ : any;

@Component({
  selector: 'app-employee-request',
  templateUrl: './employee-request.component.html',
  styleUrls: ['./employee-request.component.css']
})
export class EmployeeRequestComponent implements OnInit {

  constructor(public app : AppComponent, private router: Router) { }

  ngOnInit() {
    this.app.employee();
  }

  back(){
    this.router.navigate(['employee/home']);
  }

}
