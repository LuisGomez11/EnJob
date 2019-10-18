import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

declare var $: any;

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  constructor(public app : AppComponent) { }

  ngOnInit() {
    this.app.admin();
    $('#notification-admin').click(function () {
      $('.content-notifications').toggleClass('notifi-active');
    });
  }

}
