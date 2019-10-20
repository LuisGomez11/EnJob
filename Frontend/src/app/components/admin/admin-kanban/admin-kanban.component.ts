import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

declare var $ : any;

@Component({
  selector: 'app-admin-kanban',
  templateUrl: './admin-kanban.component.html',
  styleUrls: ['./admin-kanban.component.css']
})
export class AdminKanbanComponent implements OnInit {

  constructor(public app : AppComponent) { }

  ngOnInit() {
    this.app.admin();
  }

}
