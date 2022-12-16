import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-employeeadd',
  templateUrl: './employeeadd.component.html',
  styleUrls: ['./employeeadd.component.css']
})
export class EmployeeaddComponent {
  empcode=""
  empname=""
  designation=""
  salary=""
  email=""
  phoneno=""
  password=""
  constructor(private api:ApiService){}
  readvalue=()=>
  {
    let data:any={"empcode":this.empcode,"empname":this.empname,"designation":this.designation,"salary":this.salary,"email":this.email,
    "phoneno":this.phoneno,"password":this.password}
    console.log(data)
    this.api.addEmploy(data).subscribe(
      (response:any)=>
      {
        console.log(response)
        if(response.status=="success")
        {
          alert("Employee added successfully")
          this.salary=""
          this.designation=""
          this.empcode=""
          this.empname=""
          this.email=""
          this.password=""
          this.phoneno=""
        }
        else{
          alert("something went wrong")
        }
      }
    )
  }
}

