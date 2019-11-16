/**
 * Author: Kelvin Murilo Araújo Santos
 * Data: 1511/2019 
 */

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroDespesaComponent } from './despesa/paginas/cadastro-despesa/cadastro-despesa.component';
import { ConsultaDespesaComponent } from './despesa/paginas/consulta-despesa/consulta-despesa.component';
import { DespesaService } from './despesa/despesa.service';
import { routing }  from './app.route';

@NgModule({
  declarations: [
    AppComponent,
    CadastroDespesaComponent,
    ConsultaDespesaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routing
  ],
  providers: [DespesaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
