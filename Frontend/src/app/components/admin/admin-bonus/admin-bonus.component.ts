import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-admin-bonus',
  templateUrl: './admin-bonus.component.html',
  styleUrls: ['./admin-bonus.component.css']
})
export class AdminBonusComponent implements OnInit {

  constructor(public app : AppComponent) { }

  ngOnInit() {
    this.app.admin();
  }

}
