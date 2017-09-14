import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component'
import { RecursosListaComponent } from './recursos-lista/recursos-lista.component'

import { RoutingModule } from './app.routes'

@NgModule({
  declarations: [
    AppComponent,
    RecursosListaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
