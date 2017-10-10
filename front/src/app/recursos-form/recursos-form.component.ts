import { Component, OnInit } from '@angular/core';
import { RecursosService, Recurso } from '../services/recursos.service'
import { CategoriasService, Categoria } from '../services/categorias.service'


@Component({
  selector: 'app-recursos-form',
  templateUrl: './recursos-form.component.html',
  styleUrls: ['./recursos-form.component.css'],
  providers: [RecursosService, CategoriasService]
})
export class RecursosFormComponent implements OnInit {

  private title = 'Novo recurso'
  private model : Recurso
  private categorias : any
  
  constructor(
    private rs : RecursosService,
    private cs : CategoriasService
  ) { }

  ngOnInit() {
  
    this.model = new Recurso()
    this.model.descricao = 'Projetor'
    this.model.especificacoes  = 'teste teste teste teste'

    this.categorias = this.cs.listarTodos()

  }

}
