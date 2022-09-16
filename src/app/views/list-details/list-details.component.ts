import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-details',
  templateUrl: './list-details.component.html',
  styleUrls: ['./list-details.component.css']
})
export class ListDetailsComponent implements OnInit {

  element!: any;

  constructor(private _route: ActivatedRoute) { }

  ngOnInit(): void {
    this.element = this._route.snapshot.paramMap.get('id');
  }

}
