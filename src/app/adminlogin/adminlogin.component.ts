import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent {
  username=""
  password=""
constructor(private router:Router){}
  readValue=()=>
  {
    let data:any={"username":this.username,"password":this.password}
    console.log(data)
    if (this.username=="admin" && this.password=="12345") {
      this.router.navigate(['/empReg'])
    } else {
      alert("invalid credentials")
    }
  }
}
