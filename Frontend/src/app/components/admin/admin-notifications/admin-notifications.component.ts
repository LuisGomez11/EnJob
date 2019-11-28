import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { AdmineServiceService } from 'src/app/services/admine.service';
import { NotificationService } from 'src/app/services/notification.service';
import { AuthAdmineService } from 'src/app/services/auth.service';
import { Notification } from 'src/app/models/notification';

declare var $ : any;

@Component({
  selector: 'app-admin-notifications',
  templateUrl: './admin-notifications.component.html',
  styleUrls: ['./admin-notifications.component.css']
})
export class AdminNotificationsComponent implements OnInit {

  listNotifications: Notification[];

  constructor(private app: AppComponent, private service: NotificationService, private serviceAdmine: AdmineServiceService, private auth: AuthAdmineService) { }

  ngOnInit() {
    this.app.admin();
    this.getNotifications();
    this.serviceAdmine.selectedAdmine = this.auth.getUser();
  }

  getNotifications(){
    this.service.getNotifications().subscribe(data => {
      this.listNotifications = data;
    });
  }

}
