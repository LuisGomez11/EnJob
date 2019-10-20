import { Component, OnInit } from '@angular/core';
import { AdmineModel } from '../../models/admine/admine-model';
import { AdmineServiceService } from '../../services/admine/admine-service.service';

declare var $ : any;

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  admine : AdmineModel = {
    idAdmine: '',
    name: '',
    userName: '',
    lastName: '',
    password: '',
    email: '',
    phone: '',
    role: 'Admin RRHH',
    nameCompany: '',
    state: 'Desactivado',
    numDocument: ''
  }
  // private admineService : AdmineServiceService
  constructor(private admineService: AdmineServiceService) { }

  ngOnInit() {
    $('#nav-principal').hide();
    $('#nav-admin').hide();
    $('.menu-admin').hide();
    $('#nav-sadmin').hide();
    $('#nav-supervisor').hide();
    $('#nav-empo').hide();
  }

  signUp(){
    this.admineService.signup(this.admine)
      .subscribe(
        res => {
          console.log(res);
        },
        err => console.error(err)
      )
  }

}
