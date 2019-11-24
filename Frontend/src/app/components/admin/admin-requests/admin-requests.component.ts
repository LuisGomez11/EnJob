import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { RequestService } from 'src/app/services/request.service';
import { Request } from 'src/app/models/request';
import { AdmineServiceService } from 'src/app/services/admine-service.service';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-admin-requests',
  templateUrl: './admin-requests.component.html',
  styleUrls: ['./admin-requests.component.css']
})
export class AdminRequestsComponent implements OnInit {

  request: Request = new Request();
  listRequests: Request[];

  nameAdmin = ''; nameEmployee = '';

  constructor(public app : AppComponent, private service: RequestService, private serviceAdmin: AdmineServiceService, private serviceEmplo: EmployeeService) { }

  ngOnInit() {
    this.app.admin();
    this.getRequests();
  }

  getRequests(){
    this.service.getRequests()
    .subscribe(data =>
      this.listRequests = data);
  }

  viewRequest(req: Request){
    this.service.selectedRequest = req;

    this.serviceAdmin.getAdmine(this.service.selectedRequest.receiver).subscribe((res: any) => {
      this.nameAdmin = res.Adminee.name + ' ' + res.Adminee.lastName;
    });

    this.serviceEmplo.getEmployee(this.service.selectedRequest.applicant).subscribe((res: any) => {
      this.nameEmployee = res.users.name + ' ' + res.users.lastName;
    });

  }
  
}
