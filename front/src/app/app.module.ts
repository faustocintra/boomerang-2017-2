import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component'
import { RecursosListaComponent } from './recursos-lista/recursos-lista.component'

import { RoutingModule } from './app.routes';
import { TesteComponent } from './teste/teste.component';
import { RecursosFormComponent } from './recursos-form/recursos-form.component'

@NgModule({
  declarations: [
    AppComponent,
    RecursosListaComponent,
    TesteComponent,
    RecursosFormComponent
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
