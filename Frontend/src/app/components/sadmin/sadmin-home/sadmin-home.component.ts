import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { AdmineServiceService } from 'src/app/services/admine-service.service';
import { AdmineModel } from 'src/app/models/admine-model';

declare var $: any;

@Component({
  selector: 'app-sadmin-home',
  templateUrl: './sadmin-home.component.html',
  styleUrls: ['./sadmin-home.component.css']
})
export class SadminHomeComponent implements OnInit {

  listAdmines: AdmineModel[] = [];
  f = new Date();
  currentDate = this.f.getDate() + '/' + (this.f.getMonth() + 1) + '/' + this.f.getFullYear();
  endSubscription = '';
  constructor(public app: AppComponent, private service: AdmineServiceService) { }

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

  activeCount(admine: AdmineModel) {
    this.f.setMonth(this.f.getMonth() + parseInt(admine.subscriptionTime));
    this.endSubscription = this.f.getDate() + '/' + (this.f.getMonth() + 1) + '/' + this.f.getFullYear();
    this.service.selectedAdmine = admine;
    this.service.selectedAdmine.state = 'Activo';
    this.service.selectedAdmine.initSubscription = this.currentDate;
    this.service.selectedAdmine.endSubscription = this.endSubscription;
    this.service.updateAdmine(this.service.selectedAdmine)
      .subscribe(res => {
        console.log(res);
      }, error => {
        console.log(error);
      });
  }

}
