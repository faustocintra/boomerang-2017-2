import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-recursos-lista',
  templateUrl: './recursos-lista.component.html',
  styleUrls: ['./recursos-lista.component.css']
})
export class RecursosListaComponent implements OnInit {

  titulo = 'Lista de recursos'

  /*
  recursos = [
    'Projetor Epson 1',
    'Laboratório de computadores 1',
    'Laboratório de computadores 2',
    'Controle de TV ADS 1',
    'Rádio/Reprodutor de CD'
  ]
  */

  recursos = []

  constructor(http: HttpClient) { 
    http.get('http://localhost:3000/recursos')
      .subscribe(function(recursos) {
        this.recursos = recursos;
        console.log(recursos);
      })
  }

  ngOnInit() {
  }

}
