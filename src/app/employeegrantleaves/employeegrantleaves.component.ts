import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-employeegrantleaves',
  templateUrl: './employeegrantleaves.component.html',
  styleUrls: ['./employeegrantleaves.component.css']
})
export class EmployeegrantleavesComponent {
  empId=""

  constructor(private api:ApiService){}

  GrantLeavesForEmployee=()=>
  {

    let data:any={"empId":this.empId}

    this.api.AddEmployeeToLeaveCountDB(data).subscribe(

      (response:any)=>
      {
        if(response.status=="employee added to leave count")
        {
          alert("Employee granted leaves for this year!")
          
          this.empId=""
        }
        else
        {
          alert("Failed to grant leaves for employee..Try again")
        }

      }

    )

  }
}
