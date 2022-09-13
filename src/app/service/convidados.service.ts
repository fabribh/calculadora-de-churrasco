import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Convidado } from '../model/convidado';

@Injectable({
  providedIn: 'root'
})
export class ConvidadosService {

  private readonly API = "http://localhost:3000/convidados";

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<Convidado[]>(this.API);
  }
}
