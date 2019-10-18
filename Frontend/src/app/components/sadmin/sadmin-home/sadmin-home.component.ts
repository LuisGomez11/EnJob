import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

declare var $ : any;

@Component({
  selector: 'app-sadmin-home',
  templateUrl: './sadmin-home.component.html',
  styleUrls: ['./sadmin-home.component.css']
})
export class SadminHomeComponent implements OnInit {

  constructor(public app : AppComponent) { }

  ngOnInit() {
    this.app.sadmin();
  }

}
