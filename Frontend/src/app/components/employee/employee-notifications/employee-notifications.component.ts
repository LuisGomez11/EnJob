import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/services/notification.service';
import { Notification } from 'src/app/models/notification';
import { EmployeeService } from 'src/app/services/employee.service';
import { AuthAdmineService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-employee-notifications',
  templateUrl: './employee-notifications.component.html',
  styleUrls: ['./employee-notifications.component.css']
})
export class EmployeeNotificationsComponent implements OnInit {

  listNotifications: Notification[];

  constructor(private service: NotificationService, private serviceEmplo: EmployeeService, private auth: AuthAdmineService) { }

  ngOnInit() {
    this.serviceEmplo.selectedEmployee = this.auth.getUser();
    this.getNotifications();
  }

  getNotifications(){
    this.service.getNotifications().subscribe(data => {
      this.listNotifications = data;
    });
  }

}
