import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
