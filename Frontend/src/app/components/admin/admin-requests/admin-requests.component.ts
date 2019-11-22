import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { RequestService } from 'src/app/services/request.service';
import { Request } from 'src/app/models/request';

@Component({
  selector: 'app-admin-requests',
  templateUrl: './admin-requests.component.html',
  styleUrls: ['./admin-requests.component.css']
})
export class AdminRequestsComponent implements OnInit {

  request: Request = new Request();
  listRequests: Request[];

  constructor(public app : AppComponent, private service: RequestService) { }

  ngOnInit() {
    this.app.admin();
    this.getRequests();
  }

  getRequests(){
    this.service.getRequests()
    .subscribe(data =>
      this.listRequests = data);
  }
  
}
