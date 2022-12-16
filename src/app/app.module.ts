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
const myRoute:Routes=[
  {
    path:"addemp",
    component:EmployeeaddComponent
  },
  {
    path:"viewemp",
    component:EmployeeviewComponent
  },
  {
    path:"searchemp",
    component:EmployeesearchComponent
  },
  {
    path:"",
    component:AdminloginComponent
  },
  {
    path:"emplogin",
    component:EmployeeloginComponent
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
    EmployeeupdateComponent
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
