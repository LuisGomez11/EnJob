import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { FormGroup, NgForm } from "@angular/forms";
import { DepartmentService } from "../../../services/department.service";
import { Department } from "../../../models/department";
import swal from "sweetalert2";
import { AuthAdmineService } from 'src/app/services/auth.service';
import { AdmineServiceService } from 'src/app/services/admine.service';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {

  department: Department = new Department();
  listDepartments: Department[];
  public form: FormGroup;
  company = ''; nameCompany = '';

  constructor(public app: AppComponent, private service: DepartmentService, private auth: AuthAdmineService,
    private serviceAdmine: AdmineServiceService) { }

  ngOnInit() {
    this.app.admin();
    this.getDepartments();
    this.company = this.auth.getUser()._id;
    this.nameCompany = this.auth.getUser().nameCompany;
  }

  getDepartments() {
    this.service.getDepartments()
      .subscribe(data =>
        this.listDepartments = data);
  }

createDepartment(form: NgForm){
  if (form.value.idDepartment) {
    form.value.company = this.company;
    this.service.updateDepartment(form.value).subscribe(data => {
      swal.fire({
        position: 'center',
        type: 'success',
        title: 'Correcto!',
        text: 'Departamento modificado correctamente',
        showConfirmButton: false,
        timer: 1500
      });
      this.getDepartments();
      this.resetForm(form);
    });
  } else {
    form.value.company = this.company;
    this.service.createDepartment(form.value).subscribe(data => {
      swal.fire({
        position: 'center',
        type: 'success',
        title: 'Correcto!',
        text: 'Departamento registrado correctamente',
        showConfirmButton: false,
        timer: 1500
      });
      this.getDepartments();
      this.resetForm(form);
    });
  }
}

editDepartment(department: Department){
  this.service.selectedDepartment = department;
}

resetForm(form ?: NgForm){
  if (form) {
    form.reset();
    this.service.selectedDepartment = new Department();
  }
}

async deleteDepartment(department: Department){

  let result = await swal.fire({
    title: 'Confirmacion',
    text: `¿Seguro que desea eliminar el departamento de: ${department.name}?`,
    type: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085D6',
    cancelButtonColor: 'd33',
    confirmButtonText: 'Si, eliminar!',
    cancelButtonText: 'Cancelar'
  })

  if (result.value) {
    this.service.deleteDepartment(department.idDepartment).subscribe(data => {
      this.listDepartments = this.listDepartments.filter(s => s !== department);
    });
    swal.fire('Eliminado!', 'Se ha eliminado el departamento.', 'success');
  }

}

}
