import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-employeeadd',
  templateUrl: './employeeadd.component.html',
  styleUrls: ['./employeeadd.component.css']
})
export class EmployeeaddComponent {
  empCode=""
  name=""
  designation=""
  salary=""
  emailId=""
  phoneNo=""
  password=""
  constructor(private api:ApiService){}
  readvalue=()=>
  {
    let data:any={"empCode":this.empCode,"name":this.name,"designation":this.designation,"salary":this.salary,"emailId":this.emailId,
    "phoneNo":this.phoneNo,"password":this.password}
    console.log(data)
    this.api.addEmployee(data).subscribe(
      (response:any)=>
      {
        console.log(response)
        if(response.status=="success")
        {
          alert("Employee added successfully")
          this.salary=""
          this.designation=""
          this.empCode=""
          this.name=""
          this.emailId=""
          this.password=""
          this.phoneNo=""
        }
        else{
          alert("something went wrong")
        }
      }
    )
  }
}

