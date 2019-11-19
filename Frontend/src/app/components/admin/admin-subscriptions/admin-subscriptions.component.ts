import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { Subscription } from 'src/app/models/subscription';
import { SubscriptionService } from 'src/app/services/subscription.service';
import { AdmineServiceService } from 'src/app/services/admine-service.service';
import { AuthAdmineService } from 'src/app/services/auth-admine.service';

@Component({
  selector: 'app-admin-subscriptions',
  templateUrl: './admin-subscriptions.component.html',
  styleUrls: ['./admin-subscriptions.component.css']
})
export class AdminSubscriptionsComponent implements OnInit {

  subscription: Subscription = new Subscription();
  listSubscriptions: Subscription[];

  constructor(public app: AppComponent, private service: SubscriptionService, private serviceAdmine: AdmineServiceService,
    private auth: AuthAdmineService) { }

  ngOnInit() {
    this.app.admin();
    this.getSubscriptions();
    document.getElementById('nav-admin').style.display = 'none';
    document.getElementById('menu-admin').style.display = 'none';
  }

  getSubscriptions() {
    this.service.getSubscriptions()
      .subscribe(data =>
        this.listSubscriptions = data);
  }

  updateSubscription(duration: String) {
    this.serviceAdmine.getAdmine(this.auth.getUser()._id)
      .subscribe(data => {
        this.serviceAdmine.selectedAdmine = data;
        this.serviceAdmine.selectedAdmine.subscriptionTime = duration;
        this.serviceAdmine.updateAdmine(this.serviceAdmine.selectedAdmine)
          .subscribe(res => {
            console.log(res)
          }, error => {
            console.log(error);
          });
      }, error => {
        console.log(error);
      });
  }

}
