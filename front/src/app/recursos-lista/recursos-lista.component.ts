import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-recursos-lista',
  templateUrl: './recursos-lista.component.html',
  styleUrls: ['./recursos-lista.component.css']
})
export class RecursosListaComponent implements OnInit {

  private titulo = 'Lista de recursos'
  private recursos
  
  constructor(private http: HttpClient) { 
    this.http.get('http://localhost:3000/recursos')
      .subscribe(dados => this.recursos = dados)
  }

  ngOnInit() {
    
  }

}
