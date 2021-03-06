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
import { SubscriptionsComponent } from './components/sadmin/subscriptions/subscriptions.component';

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
import { AdminSubscriptionsComponent } from './components/admin/admin-subscriptions/admin-subscriptions.component';
import { AdminRequestsComponent } from './components/admin/admin-requests/admin-requests.component';

//EMPLOYEE-COMPONENTS
import { EmployeeHomeComponent } from './components/employee/employee-home/employee-home.component';
import { EmployeePersonalProfileComponent } from './components/employee/employee-personal-profile/employee-personal-profile.component';
import { EmployeeRequestComponent } from './components/employee/employee-request/employee-request.component';
import { EmployeeEditProfileComponent } from './components/employee/employee-edit-profile/employee-edit-profile.component';
import { EmployeeChatComponent } from './components/employee/employee-chat/employee-chat.component';
import { EmployeeConfigComponent } from './components/employee/employee-config/employee-config.component';
import { EmployeeKanbanComponent } from './components/employee/employee-kanban/employee-kanban.component';
import { EmployeeChangepassComponent } from './components/employee/employee-changepass/employee-changepass.component';
import { EmployeeBonusComponent } from './components/employee/employee-bonus/employee-bonus.component';

//SUPERVISOR-COMPONENTS
import { SupervisorHomeComponent } from './components/supervisor/supervisor-home/supervisor-home.component';
import { SupervisorChatComponent } from './components/supervisor/supervisor-chat/supervisor-chat.component';
import { SupervisorKanbanComponent } from './components/supervisor/supervisor-kanban/supervisor-kanban.component';
import { SupervisorConfigComponent } from './components/supervisor/supervisor-config/supervisor-config.component';
import { SupervisorTasksComponent } from './components/supervisor/supervisor-tasks/supervisor-tasks.component';
import { SupervisorListTasksComponent } from './components/supervisor/supervisor-list-tasks/supervisor-list-tasks.component';

//SERVICES
import { AuthGuard } from './guards/authguard.service';
import { AuthAdmineService } from './services/auth.service';


const routes: Routes = [
  {path:'',component: HomeComponent},
  {path:'home',component: HomeComponent},
  {path:'login',component: LoginComponent},
  {path:'join',component: SignUpComponent},
  {path:'sadmin',redirectTo: 'sadmin/home', pathMatch: 'full'},
  {path:'sadmin/home',component: SadminHomeComponent},
  {path:'sadmin/subscribed',component: SubscribedComponent},
  {path:'sadmin/subscriptions',component: SubscriptionsComponent},
  {path:'admin',redirectTo: 'admin/home', pathMatch: 'full'},
  {path:'admin/subscriptions',component: AdminSubscriptionsComponent, canActivate: [AuthGuard]},
  {path:'admin/home',component: AdminHomeComponent, canActivate: [AuthGuard]},
  {path:'admin/departments',component: DepartmentsComponent, canActivate: [AuthGuard]},
  {path:'admin/employees',component: EmployeesComponent, canActivate: [AuthGuard]},
  {path:'admin/chat',component: AdminChatComponent, canActivate: [AuthGuard]},
  {path:'admin/profile/employee',component: EmployeeProfileComponent, canActivate: [AuthGuard]},
  {path:'admin/kanban',component: AdminKanbanComponent, canActivate: [AuthGuard]},
  {path:'admin/config',component: AdminConfigComponent, canActivate: [AuthGuard]},
  {path:'admin/notifications',component: AdminNotificationsComponent, canActivate: [AuthGuard]},
  {path:'admin/requests',component: AdminRequestsComponent, canActivate: [AuthGuard]},
  {path:'admin/bonus',component: AdminBonusComponent, canActivate: [AuthGuard]},
  {path:'admin/profile',component: AdminProfileComponent, canActivate: [AuthGuard]},
  {path:'supervisor',redirectTo: 'supervisor/home', pathMatch: 'full'},
  {path:'supervisor/home',component: SupervisorHomeComponent, canActivate: [AuthGuard]},
  {path:'supervisor/chat',component: SupervisorChatComponent, canActivate: [AuthGuard]},
  {path:'supervisor/kanban',component: SupervisorKanbanComponent, canActivate: [AuthGuard]},
  {path:'supervisor/tasks',component: SupervisorTasksComponent, canActivate: [AuthGuard]},
  {path:'supervisor/config',component: SupervisorConfigComponent, canActivate: [AuthGuard]},
  {path:'supervisor/listTasks',component: SupervisorListTasksComponent, canActivate: [AuthGuard]},
  {path:'employee',redirectTo: 'employee/home', pathMatch: 'full'},
  {path:'employee/home',component: EmployeeHomeComponent, canActivate: [AuthGuard]},
  {path:'employee/chat',component: EmployeeChatComponent, canActivate: [AuthGuard]},
  {path:'employee/kanban',component: EmployeeKanbanComponent, canActivate: [AuthGuard]},
  {path:'employee/config',component: EmployeeConfigComponent, canActivate: [AuthGuard]},
  {path:'employee/profile',component: EmployeePersonalProfileComponent, canActivate: [AuthGuard]},
  {path:'employee/profile/edit',component: EmployeeEditProfileComponent, canActivate: [AuthGuard]},
  {path:'employee/request',component: EmployeeRequestComponent, canActivate: [AuthGuard]},
  {path:'employee/changePass',component: EmployeeChangepassComponent, canActivate: [AuthGuard]},
  {path:'employee/bonus',component: EmployeeBonusComponent, canActivate: [AuthGuard]},
  {path:'**',component: NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [AuthGuard, AuthAdmineService],
  exports: [RouterModule]
})
export class AppRoutingModule { }
