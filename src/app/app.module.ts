import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeaddComponent } from './employeeadd/employeeadd.component';
import { EmployeeviewComponent } from './employeeview/employeeview.component';
import { EmployeesearchComponent } from './employeesearch/employeesearch.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NavbarAdminComponent } from './navbar-admin/navbar-admin.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { EmployeeloginComponent } from './employeelogin/employeelogin.component';
import { SecurityloginComponent } from './securitylogin/securitylogin.component';
import { SecurityaddComponent } from './securityadd/securityadd.component';
import { ViewprofilesecurityComponent } from './viewprofilesecurity/viewprofilesecurity.component';
import { AddemployeelogsComponent } from './addemployeelogs/addemployeelogs.component';
import { AddvisitorslogsComponent } from './addvisitorslogs/addvisitorslogs.component';
import { ViewvisitorslogsComponent } from './viewvisitorslogs/viewvisitorslogs.component';
import { ViewemployeelogsComponent } from './viewemployeelogs/viewemployeelogs.component';
import { NavbarsecurityComponent } from './navbarsecurity/navbarsecurity.component';
import { ViewemployeelogsadminComponent } from './viewemployeelogsadmin/viewemployeelogsadmin.component';
import { ViewvisitorslogsadminComponent } from './viewvisitorslogsadmin/viewvisitorslogsadmin.component';
import { ViewprofileemployeeComponent } from './viewprofileemployee/viewprofileemployee.component';
import { EmployeeupdateComponent } from './employeeupdate/employeeupdate.component';
import { ApplyleaveComponent } from './applyleave/applyleave.component';
import { ViewmyleavesComponent } from './viewmyleaves/viewmyleaves.component';
import { EmployeegrantleavesComponent } from './employeegrantleaves/employeegrantleaves.component';
import { EmployeeleavehandleComponent } from './employeeleavehandle/employeeleavehandle.component';
import { NavbaremployeeComponent } from './navbaremployee/navbaremployee.component';
const myRoute:Routes=[
  {
    path:"",
    component:AdminloginComponent
  },
  {
    path:"employeeLogin",
    component:EmployeeloginComponent
  },
  {
    path:"employeeRegistration",
    component:EmployeeaddComponent
  },
  {
    path:"adminProfile",
    component:NavbarAdminComponent
  },
  {
    path:"employeeProfile",
    component:ViewprofileemployeeComponent
  },
  {
    path:"viewAllEmployees",
    component:EmployeeviewComponent
  },
  {
    path:"securityGuardLogin",
    component:SecurityloginComponent
  },
  {
    path:"securityGuardProfile",
    component:ViewprofilesecurityComponent
  },
  {
    path:"searchEmployee",
    component:EmployeesearchComponent
  },
  {
    path:"updateEmployee",
    component:EmployeeupdateComponent
  },
  {
    path:"grantLeaveForEmployee",
    component:EmployeegrantleavesComponent
  },
  {
    path:"addSecurityGuard",
    component:SecurityaddComponent
  },
  {
    path:"applyForLeave",
    component:ApplyleaveComponent
  },
  {
    path:"viewMyLeaves",
    component:ViewmyleavesComponent
  },
  {
    path:"employeeLeaveHandle",
    component:EmployeeleavehandleComponent
  },
  {
    path:"employeeEntryLog",
    component:AddemployeelogsComponent
  },
  {
    path:"visitorEntryLog",
    component:AddvisitorslogsComponent
  },
  {
    path:"viewAllEmployeeLogsandUpdateExitTime",
    component:ViewemployeelogsComponent
  },
  {
    path:"viewAllVisitorLogsandUpdateExitTime",
    component:ViewvisitorslogsComponent
  }
  ]
@NgModule({
  declarations: [
    AppComponent,
    EmployeeaddComponent,
    EmployeeviewComponent,
    EmployeesearchComponent,
    NavbarAdminComponent,
    AdminloginComponent,
    EmployeeloginComponent,
    SecurityloginComponent,
    SecurityaddComponent,
    ViewprofilesecurityComponent,
    AddemployeelogsComponent,
    AddvisitorslogsComponent,
    ViewvisitorslogsComponent,
    ViewemployeelogsComponent,
    NavbarsecurityComponent,
    ViewemployeelogsadminComponent,
    ViewvisitorslogsadminComponent,
    ViewprofileemployeeComponent,
    EmployeeupdateComponent,
    ApplyleaveComponent,
    ViewmyleavesComponent,
    EmployeegrantleavesComponent,
    EmployeeleavehandleComponent,
    NavbaremployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
