import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroDespesaComponent } from './despesa/paginas/cadastro-despesa/cadastro-despesa.component';
import { ConsultaDespesaComponent } from './despesa/paginas/consulta-despesa/consulta-despesa.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastroDespesaComponent,
    ConsultaDespesaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
