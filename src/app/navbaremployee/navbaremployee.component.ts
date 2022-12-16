import { Component } from '@angular/core';

@Component({
  selector: 'app-navbaremployee',
  templateUrl: './navbaremployee.component.html',
  styleUrls: ['./navbaremployee.component.css']
})
export class NavbaremployeeComponent {
  empID:any=localStorage.getItem("empInfo")
}
