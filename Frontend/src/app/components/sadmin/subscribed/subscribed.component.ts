import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { AdmineModel } from 'src/app/models/admine-model';
import { AdmineServiceService } from 'src/app/services/admine.service';

@Component({
  selector: 'app-subscribed',
  templateUrl: './subscribed.component.html',
  styleUrls: ['./subscribed.component.css']
})
export class SubscribedComponent implements OnInit {

  listAdmines: AdmineModel[] = [];
  
  constructor(public app : AppComponent, private service: AdmineServiceService) { }

  ngOnInit() {
    this.app.sadmin();
    this.getAdmines();
  }

  getAdmines() {
    this.service.getAdmines()
      .subscribe((data: any) => {
        console.log(data)
        this.listAdmines = data.users;
      });
  }

}
