import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { AuthAdmineService } from 'src/app/services/auth.service';
import { EmployeeService } from 'src/app/services/employee.service';
import { BonificationService } from 'src/app/services/bonification.service';
import { Bonification } from 'src/app/models/bonification';

@Component({
  selector: 'app-employee-bonus',
  templateUrl: './employee-bonus.component.html',
  styleUrls: ['./employee-bonus.component.css']
})
export class EmployeeBonusComponent implements OnInit {

  listBonifications: Bonification[];

  constructor(public app : AppComponent, private auth: AuthAdmineService, private serviceEmplo: EmployeeService,
    private service: BonificationService) { }

  ngOnInit() {
    this.app.employee();
    this.getBonifications();
    this.serviceEmplo.selectedEmployee = this.auth.getUser();
  }

  getBonifications() {
    this.service.getBonifications()
      .subscribe(data =>
        this.listBonifications = data);
  }

}
