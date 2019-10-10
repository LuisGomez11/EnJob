import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { LoginComponent } from './components/login/login.component';
import { AdminHomeComponent } from './components/admin/admin-home/admin-home.component';
import { CompanyComponent } from './components/admin/company/company.component';
import { EmployeeHomeComponent } from './components/employee/employee-home/employee-home.component';
import { AdminNotificationsComponent } from './components/admin/admin-notifications/admin-notifications.component';
import { EmployeeConfigComponent } from './components/employee/employee-config/employee-config.component';
import { DepartmentsComponent } from './components/admin/departments/departments.component';
import { SadminHomeComponent } from './components/sadmin/sadmin-home/sadmin-home.component';
import { EmployeesComponent } from './components/admin/employees/employees.component';
import { AdminChatComponent } from './components/admin/admin-chat/admin-chat.component';
import { EmployeeChatComponent } from './components/employee/employee-chat/employee-chat.component';


const routes: Routes = [
  {path:'',component: HomeComponent},
  {path:'home',component: HomeComponent},
  {path:'login',component: LoginComponent},
  {path:'sadmin/home',component: SadminHomeComponent},
  {path:'admin/home',component: AdminHomeComponent},
  {path:'admin/companys',component: CompanyComponent},
  {path:'admin/departments',component: DepartmentsComponent},
  {path:'admin/employees',component: EmployeesComponent},
  {path:'admin/chat',component: AdminChatComponent},
  {path:'admin/notifications',component: AdminNotificationsComponent},
  {path:'employee/home',component: EmployeeHomeComponent},
  {path:'employee/chat',component: EmployeeChatComponent},
  {path:'employee/config',component: EmployeeConfigComponent},
  {path:'**',component: NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
