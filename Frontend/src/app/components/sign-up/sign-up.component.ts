import { Component, OnInit } from '@angular/core';
import { AdmineModel } from '../../models/admine/admine-model';
import { AdmineServiceService } from '../../services/admine/admine-service.service';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';

declare var $: any;

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  providers:[AdmineServiceService]
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
    //  if(form.value._id){
    //   this.admineService.putEmpleado(form.value)
    //   .subscribe(res =>{
    //     this.restForm(form);
    //     this.getEmpleado();
    //     M.toast({html:'updated sucessfuly'})
    //   })
    // }  else
    console.log('estoy')
     this.admineService.signup(form.value)
    .subscribe(res => {
        console.log(res)
      });
  }
}