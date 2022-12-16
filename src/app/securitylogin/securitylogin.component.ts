import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-securitylogin',
  templateUrl: './securitylogin.component.html',
  styleUrls: ['./securitylogin.component.css']
})
export class SecurityloginComponent {
  emailId=""
  password=""

  constructor(private api:ApiService,private route:Router){}


  sgLoginCheck=()=>
  {
    let data:any={"emailId":this.emailId,"password":this.password}

    console.log(data)

    this.api.SecurityGuardLogin(data).subscribe(

      (response:any)=>
      {
        console.log(response)

        if(response.status=="success")
        {
          localStorage.setItem("sgInfo",response.id)

          alert("valid login")

          this.route.navigate(["/securityGuardProfile"])
        }
        else
        {
          alert("Invalid Login!")

          this.emailId=""
          this.password=""  
        }
      }
    )


  }

}
