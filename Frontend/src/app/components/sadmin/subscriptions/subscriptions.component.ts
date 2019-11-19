import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { NgForm } from '@angular/forms';
import { SubscriptionService } from 'src/app/services/subscription.service';
import { Subscription } from "../../../models/subscription";
import swal from "sweetalert2";

@Component({
  selector: 'app-subscriptions',
  templateUrl: './subscriptions.component.html',
  styleUrls: ['./subscriptions.component.css']
})
export class SubscriptionsComponent implements OnInit {

  subscription: Subscription = new Subscription();
  listSubscriptions: Subscription[];

  constructor(public app : AppComponent, private service : SubscriptionService) { }

  ngOnInit() {
    this.app.sadmin();
    this.getSubscriptions();
  }

  getSubscriptions() {
    this.service.getSubscriptions()
      .subscribe(data =>
        this.listSubscriptions = data);
  }

  createSubscription(form: NgForm) {
    if (form.value.idSubscription) {
      this.service.updateSubscription(form.value).subscribe(data => {
        swal.fire({
          position: 'center',
          type: 'success',
          title: 'Correcto!',
          text: 'Suscripción modificada correctamente',
          showConfirmButton: false,
          timer: 1500
        });
        this.getSubscriptions();
        this.resetForm(form);
      });
    } else {
      this.service.createSubscription(form.value).subscribe(data => {
        swal.fire({
          position: 'center',
          type: 'success',
          title: 'Correcto!',
          text: 'Suscripción creada correctamente',
          showConfirmButton: false,
          timer: 1500
        });
        this.getSubscriptions();
        this.resetForm(form);
      });
    }
  }

  async deleteSubscription(subscription: Subscription) {

    let result = await swal.fire({
      title: 'Confirmacion',
      text: `¿Seguro que desea eliminar la suscripción de: ${subscription.duration} mes(es)?`,
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085D6',
      cancelButtonColor: 'd33',
      confirmButtonText: 'Si, eliminar!',
      cancelButtonText: 'Cancelar'
    })

    if (result.value) {
      this.service.deleteSubscription(subscription.idSubscription).subscribe(data => {
        this.listSubscriptions = this.listSubscriptions.filter(s => s !== subscription);
      });
      swal.fire('Eliminado!', 'Se ha eliminado la suscripción.', 'success');
    }

  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.service.selectedSubscription = new Subscription();
    }
  }

}
