import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { FormBuilder, FormGroup, Validators, NgForm } from "@angular/forms";
import { BonificationService } from "../../../services/bonification.service";
import { Bonification } from "../../../models/bonification";
import swal from "sweetalert2";
import { AuthAdmineService } from 'src/app/services/auth-admine.service';

@Component({
  selector: 'app-admin-bonus',
  templateUrl: './admin-bonus.component.html',
  styleUrls: ['./admin-bonus.component.css']
})
export class AdminBonusComponent implements OnInit {

  bonification: Bonification = new Bonification();
  listBonifications: Bonification[];
  nameCompany = '';
  
  constructor(public app: AppComponent,
    private service: BonificationService,
    private auth: AuthAdmineService) { }

  ngOnInit() {
    this.app.admin();
    this.getBonifications();
    this.nameCompany = this.auth.getUser().nameCompany;
  }

  getBonifications() {
    this.service.getBonifications()
      .subscribe(data =>
        this.listBonifications = data);
  }

  createBonification(form: NgForm) {
    if (form.value.idBonification) {
      form.value.company = this.nameCompany;
      this.service.updateBonification(form.value).subscribe(data => {
        swal.fire({
          position: 'center',
          type: 'success',
          title: 'Correcto!',
          text: 'Bonificación modificada correctamente',
          showConfirmButton: false,
          timer: 1500
        });
        this.getBonifications();
        this.resetForm(form);
      });
    } else {
      form.value.company = this.nameCompany;
      this.service.createBonification(form.value).subscribe(data => {
        swal.fire({
          position: 'center',
          type: 'success',
          title: 'Correcto!',
          text: 'Bonificación creada correctamente',
          showConfirmButton: false,
          timer: 1500
        });
        this.getBonifications();
        this.resetForm(form);
      });
    }
  }

  async deleteBonification(bonification: Bonification) {

    let result = await swal.fire({
      title: 'Confirmacion',
      text: `¿Seguro que desea eliminar la bonificación de: ${bonification.incentive}?`,
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085D6',
      cancelButtonColor: 'd33',
      confirmButtonText: 'Si, eliminar!',
      cancelButtonText: 'Cancelar'
    })

    if (result.value) {
      this.service.deleteBonification(bonification.idBonification).subscribe(data => {
        this.listBonifications = this.listBonifications.filter(s => s !== bonification);
      });
      swal.fire('Eliminado!', 'Se ha eliminado la bonificación.', 'success');
    }

  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.service.selectedBonification = new Bonification();
    }
  }

}
