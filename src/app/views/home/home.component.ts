import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  toppings = this._formBuilder.group({
    boi: false,
    frango: false,
    porco: false,
    cerveja: false,
    suco: false,
    refrigerante: false
  })

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit(): void {}
}
