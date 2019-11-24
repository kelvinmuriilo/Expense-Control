/**
 * Author: Kelvin Murilo Araújo Santos
 * Data: 19/11/2019
 */
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

//Serviço
import { DespesaService } from '../../despesa.service';

//Terceiros
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import * as moment from "moment";

//Modelos
import { CadastrarDespesa } from 'src/app/app.modelo';

//Constantes
import { ModalService } from 'src/app/compartilhado/componentes/modal/modal.service';
import { invalid } from '@angular/compiler/src/render3/view/util';


@Component({
  selector: 'app-cadastro-despesa',
  templateUrl: './cadastro-despesa.component.html',
  styleUrls: ['./cadastro-despesa.component.scss']
})
export class CadastroDespesaComponent implements OnInit {
  formCadastroDespesa: FormGroup;
  listaDeTipos: Array<any> = [];

  constructor(
    private formBuilder: FormBuilder,
    private despesaServico: DespesaService,
    private spinnerServico: Ng4LoadingSpinnerService,
    private modalServico: ModalService
  ) { }

  ngOnInit() {
    this.carregarListaTipos();
    this.iniciarFromCadastroDespesa();
  }

  iniciarFromCadastroDespesa(): void {
    this.formCadastroDespesa = this.formBuilder.group({
      dataCadastro: this.formBuilder.control('', Validators.required),
      descricao: this.formBuilder.control('', [
        Validators.required,
        Validators.minLength(2)
      ]),
      valor: this.formBuilder.control('', [Validators.required]),
      idTipo: this.formBuilder.control('', Validators.required)
    });
  }

  carregarListaTipos(): void {
    this.spinnerServico.show();
    this.despesaServico.getListaTipos().subscribe(tipo => {
      this.listaDeTipos = tipo;
      this.spinnerServico.hide();
    });
  }

  cadastrarDespesa(): void {
    let despesa: CadastrarDespesa = {
      dataCadastro: this.formCadastroDespesa.value.dataCadastro,
      descricao: this.formCadastroDespesa.value.descricao,
      valor: Number.parseFloat(this.formCadastroDespesa.value.valor),
      idTipo: Number.parseInt(this.formCadastroDespesa.value.idTipo)
    };

    console.log(despesa);
    this.spinnerServico.show();
    this.despesaServico.cadastrarDespesa(despesa).subscribe(msg => {
      this.alterarModalRespota(msg);
      this.spinnerServico.hide();
      this.formCadastroDespesa.reset();
    });
  }

  mostrarAlertaDataMaiorQueAtual(): boolean {
    let dataAtual = moment().toDate();
    let strDataInformada = this.formCadastroDespesa.value.dataCadastro;
    let dateDataInformada = new Date(strDataInformada);

    if (strDataInformada) {
      return dateDataInformada > dataAtual;
    }
  }

  liberarBotaoCadastrar(): boolean {
    return this.formCadastroDespesa.valid &&
      !this.mostrarAlertaDataMaiorQueAtual();
  }


  private alterarModalRespota(msg: string) {
    if (msg.includes("Erro")) {
      this.modalServico.exibirErro(msg);
    } else {
      this.modalServico.exibirSucesso(msg);
    }
  }
}
