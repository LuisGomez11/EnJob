import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { Router } from '@angular/router';

declare var $ : any;

@Component({
  selector: 'app-employee-personal-profile',
  templateUrl: './employee-personal-profile.component.html',
  styleUrls: ['./employee-personal-profile.component.css']
})
export class EmployeePersonalProfileComponent implements OnInit {

  constructor(public app : AppComponent, private router: Router) { }

  ngOnInit() {
    this.app.employee();
  }
  
  editProfile(){
	this.router.navigate(['employee/profile/edit']);
  }

}
