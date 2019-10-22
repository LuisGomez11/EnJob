import { Component, OnInit } from '@angular/core';
import { AdmineModel } from '../../models/admine/admine-model';
import { AdmineServiceService } from '../../services/admine/admine-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

declare var $ : any;

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  public form: FormGroup;

  public admine: AdmineModel;
  // private admineService : AdmineServiceService
  constructor(private admineService: AdmineServiceService, private formBuilder: FormBuilder) {

   }

  ngOnInit() {
    $('#nav-principal').hide();
    $('#nav-admin').hide();
    $('.menu-admin').hide();
    $('#nav-sadmin').hide();
    $('#nav-supervisor').hide();
    $('#nav-empo').hide();

    this.form = this.formBuilder.group({
     name: ['', Validators.required],
     lastName: ['', Validators.required],
     numDocument: ['', Validators.required],
     phone: ['', Validators.required],
     email: ['', Validators.required],
     nameCompany: ['', Validators.required],
     userName: ['', Validators.required],
     password: ['', Validators.required]
    });

  }

  signUp(){
    this.admineService.signup(this.form.value)
      .subscribe(
        res => {
          console.log(res);
        },
        err => console.error(err)
      )
  }

}
