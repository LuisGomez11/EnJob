import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule}from '@angular/forms';

//COMPONENTES
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
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
import { EmployeeKanbanComponent } from './components/employee/employee-kanban/employee-kanban.component';
import { SupervisorConfigComponent } from './components/supervisor/supervisor-config/supervisor-config.component';
import { SupervisorChatComponent } from './components/supervisor/supervisor-chat/supervisor-chat.component';
import { SupervisorKanbanComponent } from './components/supervisor/supervisor-kanban/supervisor-kanban.component';
import { SupervisorTasksComponent } from './components/supervisor/supervisor-tasks/supervisor-tasks.component';
import { EmployeeProfileComponent } from './components/admin/employee-profile/employee-profile.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { AdminBonusComponent } from './components/admin/admin-bonus/admin-bonus.component';
import { EDetailsTaskComponent } from './components/employee/employee-kanban/e-details-task/e-details-task.component';
import { DragAndDropModule } from "angular-draggable-droppable";

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    DragAndDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
