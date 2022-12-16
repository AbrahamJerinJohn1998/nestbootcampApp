import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewvisitorslogsadmin',
  templateUrl: './viewvisitorslogsadmin.component.html',
  styleUrls: ['./viewvisitorslogsadmin.component.css']
})
export class ViewvisitorslogsadminComponent {
  id=""
  date=""

  searchData:any=[]

  constructor(private api:ApiService){

    this.api.ViewAllVisitorLogs().subscribe(

      (response:any)=>
      {
        console.log(response)

        this.searchData=response

      }

    )

  }

  LogVisitorExit=()=>
  {

    let data:any={"id":this.id,"date":this.date}

    console.log(data)

    this.api.UpdateVisitorExitTime(data).subscribe(

      (response:any)=>
      {

        console.log(response)

        if(response.status=="visitor exit logged")
        {
          alert("Visitor exit time is logged!")
          this.id=""
          this.date=""
        }
        else
        {
          alert("Failed to log visitor exit time..Try again")
        }

      }

    )

  }


}
