import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  styles:[
    ` .bg-dark{
      background-color: #343a40!important
    }  
    `
]
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
