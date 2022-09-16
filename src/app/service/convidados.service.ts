import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, take } from 'rxjs';
import { Convidado } from '../model/convidado';

@Injectable({
  providedIn: 'root'
})
export class ConvidadosService {

  private readonly API = "http://localhost:3000/convidados";

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<Convidado[]>(this.API)
    .pipe(first());
  }

  save(entity: Convidado): any {
    return this.http.post(this.API, entity)
    .pipe(first());
  }

  delete(id: number) {
    return this.http.delete(`${this.API}/${id}`)
    .pipe(first());
  }
}
