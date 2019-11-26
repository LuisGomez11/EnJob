import { Component, OnInit } from '@angular/core';
import { AdmineModel } from '../../models/admine-model';
import { AdmineServiceService } from '../../services/admine.service';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';

declare var $: any;

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  providers: [AdmineServiceService]
})
export class SignUpComponent implements OnInit {


  constructor(private admineService: AdmineServiceService) {

  }

  ngOnInit() {
    $('#nav-principal').hide();
    $('#nav-admin').hide();
    $('.menu-admin').hide();
    $('#nav-sadmin').hide();
    $('#nav-supervisor').hide();
    $('#nav-empo').hide();
  }

  signUp(form: NgForm) {
    form.value.state = 'Inactivo';
    form.value.subscriptionTime = 'N/A';
    form.value.initSubscription = 'N/A';
    form.value.endSubscription = 'N/A';
    this.admineService.signup(form.value)
      .subscribe(res => {
        console.log(res)
      });
  }
}