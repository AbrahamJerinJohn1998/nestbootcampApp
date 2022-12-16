import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewmyleaves',
  templateUrl: './viewmyleaves.component.html',
  styleUrls: ['./viewmyleaves.component.css']
})
export class ViewmyleavesComponent {
  empID:any=""
  searchData:any=[]

  constructor(private api:ApiService){

    this.empID=localStorage.getItem("empInfo")

    let data:any={"empId":localStorage.getItem("empInfo")}

    console.log(data)

    this.api.ViewMyLeavesForCurrentYear(data).subscribe(

      (response:any)=>
      {

        console.log(response)

        this.searchData=response

      }


    )

  }

}
