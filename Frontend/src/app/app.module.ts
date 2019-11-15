import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule}from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

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

//EXTERNAL
import { DragAndDropModule } from "angular-draggable-droppable";
import { AuthAdmineService } from './services/admine/auth-admine.service';
import { AuthGuard } from './guards/authguard.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NotfoundComponent,
    AdminHomeComponent,
    EmployeeHomeComponent,
    AdminNotificationsComponent,
    EmployeeConfigComponent,
    DepartmentsComponent,
    SadminHomeComponent,
    EmployeesComponent,
    AdminChatComponent,
    EmployeeChatComponent,
    SupervisorHomeComponent,
    SubscribedComponent,
    AdminKanbanComponent,
    AdminConfigComponent,
    EmployeeKanbanComponent,
    SupervisorConfigComponent,
    SupervisorChatComponent,
    SupervisorKanbanComponent,
    SupervisorTasksComponent,
    EmployeeProfileComponent,
    SignUpComponent,
    AdminBonusComponent,
    EDetailsTaskComponent,
    EmployeePersonalProfileComponent,
    EmployeeRequestComponent,
    EmployeeEditProfileComponent,
    AdminProfileComponent,
    EmployeeChangepassComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    DragAndDropModule,
  ],
  providers: [AuthAdmineService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
