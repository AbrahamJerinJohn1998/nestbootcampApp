import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewprofilesecurity',
  templateUrl: './viewprofilesecurity.component.html',
  styleUrls: ['./viewprofilesecurity.component.css']
})
export class ViewprofilesecurityComponent {
  sgID:any=""

  searchData:any=[]

  constructor(private api:ApiService){

    this.sgID=localStorage.getItem("sgInfo")

    let data:any={"id":this.sgID}

    this.api.SecurityGuardProfile(data).subscribe(

      (response:any)=>
      {
        console.log(response)

        this.searchData=response

      }
    )


  }
}