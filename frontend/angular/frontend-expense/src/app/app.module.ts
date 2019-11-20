/**
 * Author: Kelvin Murilo Araújo Santos
 * Data: 15/11/2019 
 */

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CadastroDespesaComponent } from './despesa/paginas/cadastro-despesa/cadastro-despesa.component';
import { ConsultaDespesaComponent } from './despesa/paginas/consulta-despesa/consulta-despesa.component';
import { DespesaService } from './despesa/despesa.service';
import { routing } from './app.route';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { InputTextoComponent } from './compartilhado/componentes/input-texto/input-texto.component';
import { InputSelecaoComponent } from './compartilhado/componentes/input-selecao/input-selecao.component';
import { BotaoComponent } from './compartilhado/componentes/botao/botao.component';
import { ModalModule } from 'ngx-bootstrap/modal';


@NgModule({
  declarations: [
    AppComponent,
    CadastroDespesaComponent,
    ConsultaDespesaComponent,
    InputTextoComponent,
    InputSelecaoComponent,
    BotaoComponent,

  ],
  imports: [
    BrowserModule,
    routing,
    Ng4LoadingSpinnerModule.forRoot(),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot()
  ],
  providers: [
    DespesaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
