import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-applyleave',
  templateUrl: './applyleave.component.html',
  styleUrls: ['./applyleave.component.css']
})
export class ApplyleaveComponent {
  empId:any=localStorage.getItem("empInfo")
  leaveType=""
  remarks=""
  fromDate=""
  toDate=""
  applyDate=""

  constructor(private api:ApiService){}

  ApplyLeave=()=>
  {
    // this.empId=localStorage.getItem("empInfo")

    let data:any={"empId":localStorage.getItem("empInfo"),"leaveType":this.leaveType,"remarks":this.remarks,"fromDate":this.fromDate,"toDate":this.toDate,"applyDate":this.applyDate,"leaveStatus":"0"} 

    console.log(data)

    this.api.ApplyForLeave(data).subscribe(

      (response:any)=>
      {
        console.log(response)

        if(response.status="applied for leave")
        {
          alert("Applied for leave successfully!")
          this.leaveType=""
          this.remarks=""
          this.fromDate=""
          this.toDate=""
          this.applyDate=""
        }
        else
        {
          alert("Failed to apply for leave..Try again")

        }

      }
    )
  }
}
