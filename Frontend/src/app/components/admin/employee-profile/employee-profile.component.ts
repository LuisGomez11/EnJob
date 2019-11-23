import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { EmployeeService } from 'src/app/services/employee.service';
import { Router } from '@angular/router';
import { DepartmentService } from 'src/app/services/department.service';
import { AdmineServiceService } from 'src/app/services/admine-service.service';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/models/task';
import { AuthAdmineService } from 'src/app/services/auth-admine.service';

declare var $: any;

@Component({
  selector: 'app-employee-profile',
  templateUrl: './employee-profile.component.html',
  styleUrls: ['./employee-profile.component.css']
})
export class EmployeeProfileComponent implements OnInit {

  constructor(public app: AppComponent, private serviceEmplo: EmployeeService, private router: Router,
    private serviceDepartment: DepartmentService, private serviceAdmine: AdmineServiceService, private serviceTask: TaskService, private auth: AuthAdmineService) { }

  nameCompany = ''; nameDepartment = '';
  listTasks: Task[];

  ngOnInit() {
    this.app.admin();

    const idEmployee = localStorage.getItem('idEmployee');

    if (!idEmployee) {
      alert('Acción invalida');
      this.router.navigate(['persona']);
      return;
    }

    this.serviceEmplo.getEmployee(idEmployee)
      .subscribe((res: any) => {
        this.serviceEmplo.selectedEmployee = res.users;
        this.serviceDepartment.getDepartment(this.serviceEmplo.selectedEmployee.departament)
          .subscribe(res => {
            this.nameDepartment = res.name;
          });
        this.serviceAdmine.getAdmine(this.serviceEmplo.selectedEmployee.nameCompany)
          .subscribe((res: any) => {
            this.nameCompany = res.Adminee.nameCompany;
          });
      });

    this.serviceTask.getTasks()
      .subscribe(data =>
        this.listTasks = data);
  }

  pendiente = 0; enProceso = 0; revision = 0; finalizada = 0;

  tasks() {
    this.listTasks.forEach(task => {
      if (task.assigned === this.serviceEmplo.selectedEmployee._id) {
        
        switch (task.stateTask) {
          case 'Pendiente':
            this.pendiente++;
            break;
          case 'En Proceso':
            this.enProceso++;
            break;
          case 'Revision':
            this.revision++;
            break;
          case 'Finalizada':
            this.finalizada++;
            break;
        }
      }
      
    });
  //   var ctx = document.getElementById('myChart').getContext('2d');
  //   var myChart = new Chart(ctx, {
  //     type: 'bar',
  //     data: {
  //         labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio','Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
  //         datasets: [{
  //             label: 'No. de servicios ejecutados',
  //             data: [enero, febrero, marzo, abril, mayo, junio, julio, agosto, septiembre, octubre, noviembre, diciembre],
  //             backgroundColor: [
  //                 'rgba(255, 99, 132, 0.2)',
  //                 'rgba(54, 162, 235, 0.2)',
  //                 'rgba(255, 206, 86, 0.2)',
  //                 'rgba(75, 192, 192, 0.2)',
  //                 'rgba(153, 102, 255, 0.2)',
  //                 'rgba(255, 159, 64, 0.2)',
  //                 'rgba(255, 99, 132, 0.2)',
  //                 'rgba(54, 162, 235, 0.2)',
  //                 'rgba(255, 206, 86, 0.2)',
  //                 'rgba(75, 192, 192, 0.2)',
  //                 'rgba(153, 102, 255, 0.2)',
  //                 'rgba(255, 159, 64, 0.2)'
  //             ],
  //             borderColor: [
  //                 'rgba(255, 99, 132, 1)',
  //                 'rgba(54, 162, 235, 1)',
  //                 'rgba(255, 206, 86, 1)',
  //                 'rgba(75, 192, 192, 1)',
  //                 'rgba(153, 102, 255, 1)',
  //                 'rgba(255, 159, 64, 1)',
  //                 'rgba(255, 99, 132, 1)',
  //                 'rgba(54, 162, 235, 1)',
  //                 'rgba(255, 206, 86, 1)',
  //                 'rgba(75, 192, 192, 1)',
  //                 'rgba(153, 102, 255, 1)',
  //                 'rgba(255, 159, 64, 1)'
  //             ],
  //             borderWidth: 1
  //         }]
  //     },
  //     options: {
  //         title: {
  //             display: true,
  //             text: 'DATOS ESTADISTICOS MENSUALES'
  //         }
  //     }
  // });
  }

}
