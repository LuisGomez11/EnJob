import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { RequestService } from 'src/app/services/request.service';
import swal from "sweetalert2";
import { Request } from 'src/app/models/request';
import { AuthAdmineService } from 'src/app/services/auth.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-employee-request',
  templateUrl: './employee-request.component.html',
  styleUrls: ['./employee-request.component.css']
})
export class EmployeeRequestComponent implements OnInit {

  constructor(public app: AppComponent, private router: Router, private service: RequestService, private auth: AuthAdmineService, private serviceNoti: NotificationService) { }

  ngOnInit() {
    this.app.employee();
  }

  f = new Date();
  currentDate = this.f.getDate() + '/' + (this.f.getMonth() + 1) + '/' + this.f.getFullYear();
  currentDH = this.f.getDate() + '/' + (this.f.getMonth() + 1) + '/' + this.f.getFullYear() + ' ' + this.f.getHours() + ':' + this.f.getMinutes();

  createRequest(form: NgForm) {
    form.value.applicant = this.auth.getUser()._id;
    form.value.receiver = this.auth.getUser().nameCompany;
    form.value.answer = "N/A";
    form.value.submitDate = this.currentDate;
    this.service.createRequest(form.value).subscribe(data => {
      swal.fire({
        position: 'center',
        type: 'success',
        title: 'Correcto!',
        text: 'Solicitud enviada correctamente',
        showConfirmButton: false,
        timer: 1500
      });
      this.serviceNoti.selectedNotification.message = 'El empleado ' + this.auth.getUser().name + ' ' + this.auth.getUser().lastName + ' te ha enviado una solicitud';
      this.serviceNoti.selectedNotification.owner = this.auth.getUser()._id;
      this.serviceNoti.selectedNotification.receiver = data.receiver;
      this.serviceNoti.selectedNotification.dateSubmit = this.currentDH;
      this.serviceNoti.createNotification(this.serviceNoti.selectedNotification).subscribe(res => {
        console.log(res);
      });
      this.resetForm(form);
    }, error => {
      console.log(error);
    });
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.service.selectedRequest = new Request();
    }
  }

  back() {
    this.router.navigate(['employee/home']);
  }

}
