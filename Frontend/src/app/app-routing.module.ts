import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { LoginComponent } from './components/login/login.component';
import { AdminHomeComponent } from './components/admin/admin-home/admin-home.component';
import { EmployeeHomeComponent } from './components/employee/employee-home/employee-home.component';
import { AdminNotificationsComponent } from './components/admin/admin-notifications/admin-notifications.component';
import { EmployeeConfigComponent } from './components/employee/employee-config/employee-config.component';
import { DepartmentsComponent } from './components/admin/departments/departments.component';
import { SadminHomeComponent } from './components/sadmin/sadmin-home/sadmin-home.component';
import { EmployeesComponent } from './components/admin/employees/employees.component';
import { AdminChatComponent } from './components/admin/admin-chat/admin-chat.component';
import { EmployeeChatComponent } from './components/employee/employee-chat/employee-chat.component';
import { SupervisorHomeComponent } from './components/supervisor/supervisor-home/supervisor-home.component';
import { SubscribedComponent } from './components/sadmin/subscribed/subscribed.component';
import { AdminKanbanComponent } from './components/admin/admin-kanban/admin-kanban.component';
import { AdminConfigComponent } from './components/admin/admin-config/admin-config.component';

const routes: Routes = [
  {path:'',component: HomeComponent},
  {path:'home',component: HomeComponent},
  {path:'login',component: LoginComponent},
  {path:'sadmin',component: SadminHomeComponent},
  {path:'sadmin/home',component: SadminHomeComponent},
  {path:'sadmin/subscribed',component: SubscribedComponent},
  {path:'admin',component: AdminHomeComponent},
  {path:'admin/home',component: AdminHomeComponent},
  {path:'admin/departments',component: DepartmentsComponent},
  {path:'admin/employees',component: EmployeesComponent},
  {path:'admin/chat',component: AdminChatComponent},
  {path:'admin/kanban',component: AdminKanbanComponent},
  {path:'admin/config',component: AdminConfigComponent},
  {path:'admin/notifications',component: AdminNotificationsComponent},
  {path:'supervisor',component: SupervisorHomeComponent},
  {path:'supervisor/home',component: SupervisorHomeComponent},
  {path:'employee',component: EmployeeHomeComponent},
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
