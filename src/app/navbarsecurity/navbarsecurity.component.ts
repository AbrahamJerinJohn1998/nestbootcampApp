import { Component } from '@angular/core';

@Component({
  selector: 'app-navbarsecurity',
  templateUrl: './navbarsecurity.component.html',
  styleUrls: ['./navbarsecurity.component.css']
})
export class NavbarsecurityComponent {
  sgID:any=localStorage.getItem("sgInfo")
}
