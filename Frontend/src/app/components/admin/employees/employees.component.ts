import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { EmployeeService } from 'src/app/services/employee.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { Employee } from 'src/app/models/employee';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  Form: FormGroup = new FormGroup({
    name: new FormControl('', {
      validators: Validators.required
    }),
    lastName: new FormControl('', {
      validators: Validators.required
    }),
    numDocument: new FormControl('', {
      validators: Validators.required
    }),
    phone: new FormControl('', {
      validators: Validators.required
    }),
    email: new FormControl('', {
      validators: Validators.required
    }),
    departament: new FormControl('', {
      validators: Validators.required
    }),
    salary: new FormControl('', {
      validators: Validators.required
    }),
    position: new FormControl('', {
      validators: Validators.required
    }),
    userName: new FormControl('', {
      validators: Validators.required
    }),
    password: new FormControl('', {
      validators: Validators.required
    })
  });

  Employees: Subject<Array<any>> = new BehaviorSubject([]);
  listEmployees: Employee[];

  constructor(public app: AppComponent, private service: EmployeeService) { }

  ngOnInit() {
    this.app.admin();
    this.getEmployees();
  }
  getEmployees(){
    this.service.getEmployees()
    .subscribe(data =>
      this.listEmployees = data);
  }
  createEmployee() {
    this.service.createEmployee(this.Form.value)
      .subscribe(res => {
        console.log(res)
      });
  }

}
