import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//COMPONENTS
import { HomeComponent } from './components/home/home.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { LoginComponent } from './components/login/login.component';

//SADMIN-COMPONENTS
import { SadminHomeComponent } from './components/sadmin/sadmin-home/sadmin-home.component';
import { SubscribedComponent } from './components/sadmin/subscribed/subscribed.component';

//ADMIN-COMPONENTS
import { AdminHomeComponent } from './components/admin/admin-home/admin-home.component';
import { AdminNotificationsComponent } from './components/admin/admin-notifications/admin-notifications.component';
import { DepartmentsComponent } from './components/admin/departments/departments.component';
import { EmployeesComponent } from './components/admin/employees/employees.component';
import { AdminChatComponent } from './components/admin/admin-chat/admin-chat.component';
import { AdminKanbanComponent } from './components/admin/admin-kanban/admin-kanban.component';
import { AdminConfigComponent } from './components/admin/admin-config/admin-config.component';
import { AdminProfileComponent } from './components/admin/admin-profile/admin-profile.component';
import { EmployeeProfileComponent } from './components/admin/employee-profile/employee-profile.component';
import { AdminBonusComponent } from './components/admin/admin-bonus/admin-bonus.component';

//EMPLOYEE-COMPONENTS
import { EmployeeHomeComponent } from './components/employee/employee-home/employee-home.component';
import { EDetailsTaskComponent } from './components/employee/employee-kanban/e-details-task/e-details-task.component';
import { EmployeePersonalProfileComponent } from './components/employee/employee-personal-profile/employee-personal-profile.component';
import { EmployeeRequestComponent } from './components/employee/employee-request/employee-request.component';
import { EmployeeEditProfileComponent } from './components/employee/employee-edit-profile/employee-edit-profile.component';
import { EmployeeChatComponent } from './components/employee/employee-chat/employee-chat.component';
import { EmployeeConfigComponent } from './components/employee/employee-config/employee-config.component';
import { EmployeeKanbanComponent } from './components/employee/employee-kanban/employee-kanban.component';
import { EmployeeChangepassComponent } from './components/employee/employee-changepass/employee-changepass.component';

//SUPERVISOR-COMPONENTS
import { SupervisorHomeComponent } from './components/supervisor/supervisor-home/supervisor-home.component';
import { SupervisorChatComponent } from './components/supervisor/supervisor-chat/supervisor-chat.component';
import { SupervisorKanbanComponent } from './components/supervisor/supervisor-kanban/supervisor-kanban.component';
import { SupervisorConfigComponent } from './components/supervisor/supervisor-config/supervisor-config.component';
import { SupervisorTasksComponent } from './components/supervisor/supervisor-tasks/supervisor-tasks.component';

//SERVICES
import { AuthGuard } from './guards/authguard.service';
import { AuthAdmineService } from './services/admine/auth-admine.service';


const routes: Routes = [
  {path:'',component: HomeComponent},
  {path:'home',component: HomeComponent},
  {path:'login',component: LoginComponent},
  {path:'join',component: SignUpComponent},
  {path:'sadmin',component: SadminHomeComponent},
  {path:'sadmin/home',component: SadminHomeComponent},
  {path:'sadmin/subscribed',component: SubscribedComponent},
  {path:'admin',redirectTo: 'admin/home', pathMatch: 'full'},
  {path:'admin/home',component: AdminHomeComponent, canActivate: [AuthGuard]},
  {path:'admin/departments',component: DepartmentsComponent, canActivate: [AuthGuard]},
  {path:'admin/employees',component: EmployeesComponent, canActivate: [AuthGuard]},
  {path:'admin/chat',component: AdminChatComponent, canActivate: [AuthGuard]},
  {path:'admin/profile/employee',component: EmployeeProfileComponent, canActivate: [AuthGuard]},
  {path:'admin/kanban',component: AdminKanbanComponent, canActivate: [AuthGuard]},
  {path:'admin/config',component: AdminConfigComponent, canActivate: [AuthGuard]},
  {path:'admin/notifications',component: AdminNotificationsComponent, canActivate: [AuthGuard]},
  {path:'admin/bonus',component: AdminBonusComponent, canActivate: [AuthGuard]},
  {path:'admin/profile',component: AdminProfileComponent, canActivate: [AuthGuard]},
  {path:'supervisor',redirectTo: 'supervisor/home', pathMatch: 'full'},
  {path:'supervisor/home',component: SupervisorHomeComponent},
  {path:'supervisor/chat',component: SupervisorChatComponent},
  {path:'supervisor/kanban',component: SupervisorKanbanComponent},
  {path:'supervisor/tasks',component: SupervisorTasksComponent},
  {path:'supervisor/config',component: SupervisorConfigComponent},
  {path:'employee',redirectTo: 'employee/home', pathMatch: 'full'},
  {path:'employee/home',component: EmployeeHomeComponent},
  {path:'employee/chat',component: EmployeeChatComponent},
  {path:'employee/kanban',component: EmployeeKanbanComponent},
  {path:'employee/task/details',component: EDetailsTaskComponent},
  {path:'employee/config',component: EmployeeConfigComponent},
  {path:'employee/profile',component: EmployeePersonalProfileComponent},
  {path:'employee/profile/edit',component: EmployeeEditProfileComponent},
  {path:'employee/request',component: EmployeeRequestComponent},
  {path:'employee/changePass',component: EmployeeChangepassComponent},
  {path:'**',component: NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [AuthGuard, AuthAdmineService],
  exports: [RouterModule]
})
export class AppRoutingModule { }
