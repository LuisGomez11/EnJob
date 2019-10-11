import { Component, OnInit } from '@angular/core';

declare var $ : any;

@Component({
  selector: 'app-admin-kanban',
  templateUrl: './admin-kanban.component.html',
  styleUrls: ['./admin-kanban.component.css']
})
export class AdminKanbanComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('#nav-principal').hide();
    $('#nav-admin').show();
    $('.menu-admin').show();
    $('#nav-empo').hide();
    $('#nav-sadmin').hide();
    $('#nav-supervisor').hide();
  }

}
