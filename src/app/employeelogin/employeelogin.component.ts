import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-employeelogin',
  templateUrl: './employeelogin.component.html',
  styleUrls: ['./employeelogin.component.css']
})
export class EmployeeloginComponent {
  emailId=""
  password=""
  searchEmp:any=[]
  constructor(private api:ApiService,private router:Router){}
  readValue=()=>
  {
    let data:any={"emailId":this.emailId,"password":this.password}
    console.log(data)
    this.api.employLogin(data).subscribe(
      (response:any)=>
      {
        console.log(response)
        if (response.length==0) {
          alert("invalid ")
        } else {
          this.searchEmp=response;
          let userId=response.userId
          console.log(userId)
          localStorage.setItem("userInfo",userId)
          // this.router.navigate(['/empview'])
        }
      }
    )
  
  }
  
}
