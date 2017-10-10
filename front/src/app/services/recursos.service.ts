import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

// Classe que representa o model no front-end
export class Recurso {
  public _id: string;
  public descricao: string;
  public especificacoes: string;
  public categoria: string;
  public patrimonio: number;
}

@Injectable()
export class RecursosService {

  constructor(private http: HttpClient) { }

  public listarTodos() {
    return this.http.get('http://localhost:3000/recursos');
  } 

}
