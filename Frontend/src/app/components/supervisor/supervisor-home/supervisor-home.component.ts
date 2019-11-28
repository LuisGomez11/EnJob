import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { Publication } from 'src/app/models/publication';
import { PublicationService } from 'src/app/services/publication.service';
import { AuthAdmineService } from 'src/app/services/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import  swal  from "sweetalert2";

@Component({
  selector: 'app-supervisor-home',
  templateUrl: './supervisor-home.component.html',
  styleUrls: ['./supervisor-home.component.css']
})
export class SupervisorHomeComponent implements OnInit {

  FormPublication: FormGroup = new FormGroup({
    publication: new FormControl('', {
      validators: Validators.required
    })
  });

  listPublications: Publication[];

  company = '';
  publisher = '';

  f = new Date();

  currentDH = this.f.getDate() + '/' + (this.f.getMonth() + 1) + '/' + this.f.getFullYear() + ' ' + this.f.getHours() + ':' + this.f.getMinutes();

  constructor(public app: AppComponent, private service: PublicationService, private auth: AuthAdmineService) { }

  ngOnInit() {
    this.app.supervisor();
    this.company = this.auth.getUser().nameCompany;
    this.publisher = this.auth.getUser().name + ' ' + this.auth.getUser().lastName;
    this.getPublications();
  }

  getPublications() {
    this.service.getPublications().subscribe(data => {
      this.listPublications = data.reverse();
    });
  }

  createPublication() {
    if (this.FormPublication.value.publication === '') {
      swal.fire({
        position: 'center',
        type: 'error',
        title: 'Error!',
        text: 'Escriba una publicación',
        showConfirmButton: false,
        timer: 1500
      });
    } else {
      this.FormPublication.value.publisher = this.publisher;
      this.FormPublication.value.publicationDate = this.currentDH;
      this.FormPublication.value.company = this.company;
      this.service.createPublication(this.FormPublication.value).subscribe(res => {
        console.log(res);
        this.getPublications();
        this.FormPublication.reset();
      });
    }

  }

}
