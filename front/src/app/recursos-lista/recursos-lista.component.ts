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
    this.service.listarTodos().subscribe(dados => this.recursos = dados)
  }

  ngOnInit() {
    
  }

}
