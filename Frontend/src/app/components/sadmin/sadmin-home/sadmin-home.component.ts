import { Component, OnInit } from '@angular/core';

declare var $ : any;

@Component({
  selector: 'app-sadmin-home',
  templateUrl: './sadmin-home.component.html',
  styleUrls: ['./sadmin-home.component.css']
})
export class SadminHomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('#nav-principal').hide();
    $('#nav-admin').hide();
    $('.menu-admin').hide();
    $('#nav-empo').hide();
    $('#nav-sadmin').show();
    $('#nav-supervisor').hide();
  }

}
