import { Component, OnInit } from '@angular/core';

declare var $ : any;

@Component({
  selector: 'app-admin-notifications',
  templateUrl: './admin-notifications.component.html',
  styleUrls: ['./admin-notifications.component.css']
})
export class AdminNotificationsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('#nav-empo').hide();
    $('#nav-sadmin').hide();
    $('#nav-supervisor').hide();
  }

}
