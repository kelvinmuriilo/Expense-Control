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
import { NgxMaskModule } from 'ngx-mask';
import { MomentModule } from 'ngx-moment';
import { NgxPaginationModule } from 'ngx-pagination';
import { ModalMensagemComponent } from './compartilhado/componentes/modal/modal-mensagem/modal-mensagem.component';
import { ModalService } from 'src/app/compartilhado/componentes/modal/modal.service';

const COMPONENTES = [
  AppComponent,
  CadastroDespesaComponent,
  ConsultaDespesaComponent,
  InputTextoComponent,
  InputSelecaoComponent,
  BotaoComponent,
  ModalMensagemComponent
];


@NgModule({
  declarations: COMPONENTES,
  exports: COMPONENTES,
  entryComponents: [
    ModalMensagemComponent
  ],
  imports: [
    BrowserModule,
    routing,
    Ng4LoadingSpinnerModule.forRoot(),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    NgxMaskModule.forRoot(),
    MomentModule,
    NgxPaginationModule
  ],
  providers: [
    DespesaService,
    ModalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
