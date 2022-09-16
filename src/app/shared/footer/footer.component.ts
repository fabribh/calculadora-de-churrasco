import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  @Input() patrocinioFooter!: string;

  year: number;
  constructor() {
    this.year = new Date().getFullYear();
   }

  ngOnInit(): void {}

}
