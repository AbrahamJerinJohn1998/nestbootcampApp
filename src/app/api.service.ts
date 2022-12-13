import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http:HttpClient) { }

  addEmploy=(data:any)=>
  {
    return this.http.post("http://localhost:8080/empReg",data)
  }

  fetchEmployees=()=>
  {
    return this.http.get("http://localhost:8080/viewEmp")
  }
  
}
