import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewprofileemployee',
  templateUrl: './viewprofileemployee.component.html',
  styleUrls: ['./viewprofileemployee.component.css']
})
export class ViewprofileemployeeComponent {
  empID:any=""

  searchData:any=[]

  constructor(private api:ApiService){

    this.empID=localStorage.getItem("empInfo")

    let data:any={"id":this.empID}

    this.api.GetEmployeeProfile(data).subscribe(

      (response:any)=>
      {
        console.log(response)

        this.searchData=response

      }
    )


  }

}
