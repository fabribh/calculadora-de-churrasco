import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  urlImage: string;

  constructor() { 
    this.urlImage = "../assets/fogo-brasa.png";
  }

  ngOnInit(): void {
  }

}
