import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { EmployeeService } from 'src/app/services/employee.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Employee } from 'src/app/models/employee';
import  swal  from "sweetalert2";
import { AuthAdmineService } from 'src/app/services/auth.service';
import { DepartmentService } from 'src/app/services/department.service';
import { Department } from 'src/app/models/department';
import { Router } from '@angular/router';

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
    }),
    nameCompany: new FormControl('', {
      validators: Validators.required
    }),
    role: new FormControl('', {
      validators: Validators.required
    })
  });

  listEmployees: Employee[] = [];
  departments: Department[];

  constructor(public app: AppComponent, private service: EmployeeService, private auth: AuthAdmineService,
    private serviceDep: DepartmentService, private router: Router) { }

    company = '';

  ngOnInit() {
    this.app.admin();
    this.getEmployees();
    this.company = this.auth.getUser()._id;
    this.getDepartments();
  }

  getDepartments(){
    this.serviceDep.getDepartments()
    .subscribe(data =>
      this.departments = data);
  }
  
  getEmployees() {
    this.service.getEmployees()
      .subscribe((data: any) => {
        console.log(this.listEmployees);
        console.log(data)
        this.listEmployees = data.users;
      });
  }
  createEmployee() {
    this.Form.value.nameCompany = this.company;
    this.service.createEmployee(this.Form.value)
      .subscribe(res => {
        swal.fire({
          position: 'center',
          type: 'success',
          title: 'Correcto!',
          text: 'Empleado creado correctamente',
          showConfirmButton: false,
          timer: 1500
        });
        this.getEmployees();
        this.Form.reset();
      });
  }

  viewProfile(id: string) {
    localStorage.removeItem('idEmployee');
    localStorage.setItem('idEmployee', id);
    this.router.navigate(['admin/profile/employee']);
  }

}
