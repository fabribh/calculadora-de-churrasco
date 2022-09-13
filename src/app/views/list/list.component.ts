import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConvidadosService } from 'src/app/service/convidados.service';
import { Convidado } from 'src/app/model/convidado';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  convidados!: Convidado[];
  dataSource!: any;

  displayedColumns: string[] = ['id', 'nome', 'celular', 'email', 'opcoes', 'acao'];
  
  constructor(private _router: Router, private service: ConvidadosService) { 
    console.log(JSON.stringify(this.convidados));
  }

  onSelected(element: any) {
    this._router.navigate(['/list', element.id]);
  }

  ngOnInit(): void {
    this.service.list().
    then((data) => {
      this.dataSource = data;
    })
    
  }

}
