import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { RequestService } from 'src/app/services/request.service';
import { Request } from 'src/app/models/request';
import { AdmineServiceService } from 'src/app/services/admine-service.service';
import { EmployeeService } from 'src/app/services/employee.service';
import { Validators, FormControl, FormGroup } from '@angular/forms';
import swal from "sweetalert2";
import { AuthAdmineService } from 'src/app/services/auth-admine.service';

@Component({
  selector: 'app-admin-requests',
  templateUrl: './admin-requests.component.html',
  styleUrls: ['./admin-requests.component.css']
})
export class AdminRequestsComponent implements OnInit {

  Form: FormGroup = new FormGroup({
    answer: new FormControl('', {
      validators: Validators.required
    })
  });

  request: Request = new Request();
  listRequests: Request[];

  nameAdmin = ''; nameEmployee = '';

  answered = ''; admin = '';

  constructor(public app: AppComponent, private service: RequestService, private serviceAdmin: AdmineServiceService, private serviceEmplo: EmployeeService, private auth: AuthAdmineService) { }

  ngOnInit() {
    this.app.admin();
    this.getRequests();
    this.admin = this.auth.getUser()._id;
  }

  getRequests() {
    this.service.getRequests()
      .subscribe(data =>
        this.listRequests = data);
  }

  viewRequest(req: Request) {
    this.service.selectedRequest = req;

    if (this.service.selectedRequest.answer === 'N/A') {
      this.answered = 'No';
    } else {
      this.answered = 'Si';
    }

    this.serviceAdmin.getAdmine(this.service.selectedRequest.receiver).subscribe((res: any) => {
      this.nameAdmin = res.Adminee.name + ' ' + res.Adminee.lastName;
    });

    this.serviceEmplo.getEmployee(this.service.selectedRequest.applicant).subscribe((res: any) => {
      this.nameEmployee = res.users.name + ' ' + res.users.lastName;
    });

  }

  updateAnswer() {
    this.Form.value.idRequest = this.service.selectedRequest.idRequest;
    this.Form.value.type = this.service.selectedRequest.type;
    this.Form.value.affair = this.service.selectedRequest.affair;
    this.Form.value.applicant = this.service.selectedRequest.applicant;
    this.Form.value.receiver = this.service.selectedRequest.receiver;
    this.Form.value.submitDate = this.service.selectedRequest.submitDate;
    if (this.Form.value.answer === 'N/A') {
      swal.fire({
        position: 'center',
        type: 'error',
        title: 'Error!',
        text: 'Respuesta no valida',
        showConfirmButton: false,
        timer: 2000
      });
    } else {
      this.service.updateRequest(this.Form.value).subscribe(data => {
        swal.fire("Respuesta enviada correctamente")
          .then((value) => {
            this.Form.reset();
            window.location.reload();
          });

      });
    }
  }

}
