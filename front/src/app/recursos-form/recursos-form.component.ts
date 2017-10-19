import { Component, OnInit } from '@angular/core';
import { RecursosService, Recurso } from '../services/recursos.service'
import { CategoriasService, Categoria } from '../services/categorias.service'
import { Router, ActivatedRoute } from '@angular/router'


@Component({
  selector: 'app-recursos-form',
  templateUrl: './recursos-form.component.html',
  styleUrls: ['./recursos-form.component.css'],
  providers: [RecursosService, CategoriasService]
})
export class RecursosFormComponent implements OnInit {

  private title = 'Novo recurso'
  private model : Recurso = new Recurso()
  private categorias : any
  private id: string
  
  constructor(
    private rs : RecursosService,
    private cs : CategoriasService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
  
    this.categorias = this.cs.listarTodos()

    this.route.params.subscribe(
      // Se existir um parâmetro id, significa que queremos editar
      // um objeto já existente
      params => {
        if(params['id']) {
          this.id = params['id'];
          // Buscamos o objeto para edição
          this.rs.obterPorId(this.id).subscribe(
            // O model com que iremos trabalhar não é mais um objeto vazio,
            // mas um objeto existente retornado pelo back-end
            (existente: Recurso) => this.model = existente
          )
        }
      }
    )

  }

  enviar() {
    // Preservando o roteador para evitar a perda de referência ao objeto
    let roteador = this.router
    this.rs.salvar(this.model).subscribe(
      function() {
        // Após a inserção de um novo recurso, volta à página de listagem
        roteador.navigate(['/recursos'])
      },
      function(erro) {
        console.error(erro)
      }
    )
  }

}
