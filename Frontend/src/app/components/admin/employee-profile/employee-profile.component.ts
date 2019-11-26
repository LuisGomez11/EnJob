import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { EmployeeService } from 'src/app/services/employee.service';
import { Router } from '@angular/router';
import { DepartmentService } from 'src/app/services/department.service';
import { AdmineServiceService } from 'src/app/services/admine.service';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/models/task';
import { AuthAdmineService } from 'src/app/services/auth.service';
import { Chart } from 'chart.js';
import { Employee } from 'src/app/models/employee';

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
  chart = [];
  pendiente = 0; enProceso = 0; revision = 0; finalizada = 0;
  ngOnInit() {
    this.app.admin();

    this.serviceEmplo.selectedEmployee = new Employee();

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

    this.serviceTask.getTasks().subscribe(data => {
        const labels = ['Pendientes', 'En Proceso', 'En Revision', 'Finalizadas'];
        var pendiente = 0;
        var proceso = 0;
        var revision = 0;
        var finalizado = 0;
        this.listTasks = data;

        this.listTasks.forEach(task => {
          if (task.assigned == idEmployee) {
            switch (task.stateTask) {
              case 'Pendiente':
                pendiente++;
                break;
              case 'En Proceso':
                proceso++;
                break;
              case 'Revision':
                revision++;
                break;
              case 'Finalizada':
                finalizado++;
                break;
            }
          }
          
          
        });
        this.chart = new Chart("canvas", {
          type: "bar",
          data: {
            labels: labels,
            datasets: [{
              label: 'Tareas',
              data: [pendiente, proceso, revision, finalizado],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(75, 192, 192, 0.2)'
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(75, 192, 192, 1)'
              ],
              borderWidth: 1
          }]
          },
          options: {
            legend: {
              dispaly: false
            },
            scales: {
              xAxes: [
                {
                  display: true
                }
              ],
              yAxes: [
                {
                  display: true
                }
              ]
            }
          }
        });
      });
      
  }


  tasks() {

  }

}
