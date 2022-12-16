import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-employeeview',
  templateUrl: './employeeview.component.html',
  styleUrls: ['./employeeview.component.css']
})
export class EmployeeviewComponent {
  constructor(private api:ApiService)
  {
   api.getEmployee().subscribe(
    (response:any)=>
    {
      this.data=response;
    }
   )
  }
  data:any=[]
}
