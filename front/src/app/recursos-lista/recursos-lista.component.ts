import { Component, OnInit } from '@angular/core';

import { RecursosService } from '../services/recursos.service';

@Component({
  selector: 'app-recursos-lista',
  templateUrl: './recursos-lista.component.html',
  styleUrls: ['./recursos-lista.component.css'],
  providers: [RecursosService]
})
export class RecursosListaComponent implements OnInit {

  private titulo = 'Lista de recursos'
  private recursos : any
  
  constructor(private service: RecursosService) { 
    
  }

  ngOnInit() {
    this.atualizarLista()
  }

  atualizarLista() {
    this.service.listarTodos().subscribe(dados => this.recursos = dados)
  }

  excluir(id: string) {
    if(confirm('Deseja realmente excluir este recurso?')) {
      this.service.excluir(id).subscribe(
        () => this.atualizarLista(),
        erro => console.error(erro)
      )
    }

  }

}
