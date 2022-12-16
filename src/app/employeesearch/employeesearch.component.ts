import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-employeesearch',
  templateUrl: './employeesearch.component.html',
  styleUrls: ['./employeesearch.component.css']
})
export class EmployeesearchComponent {

  empCode=""
  constructor(private api:ApiService){}
  searchData:any=[]
  readValue=()=>
  {
    let data:any={"empCode":this.empCode}
    console.log(data)
    this.api.EmployeeSearchUsingCode(data).subscribe(
      (response:any)=>
      {
        console.log(response)
        if (response.length==0) {
          alert("Invalid employee code")
          
        } else {
          this.searchData=response
          
        }
      }
    )
    
  }
  deleteBtnClick=(id:any)=>
{
  let data:any={"id":id}
  this.api.EmployeeDelete(data).subscribe(
    (response:any)=>
    {
      console.log(response)
      if (response.status=="success") {
        alert("Employee deleted successfully")
      } else {
        alert("Employee not deleted")
      }
    }
  )
}
}
