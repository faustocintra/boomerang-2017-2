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
    return this.http.get('http://localhost:3000/recursos')
  }
  
  public salvar(dados: Recurso) {
    // Recurso já existente
    console.log(dados)
    if(dados._id) {
      return this.http.post('http://localhost:3000/recursos/', dados)
    }
    // Recurso novo
    else {
      return this.http.put('http://localhost:3000/recursos', dados)
    }
  }

  public obterPorId(id: string) {
    return this.http.get('http://localhost:3000/recursos/' + id)
  }

  public excluir(id: string) {
    return this.http.delete('http://localhost:3000/recursos/' + id)  
  }

}
