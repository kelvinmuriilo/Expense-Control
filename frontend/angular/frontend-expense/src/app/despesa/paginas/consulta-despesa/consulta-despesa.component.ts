import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

import { Despesa, Paginacao } from 'src/app/app.modelo';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { DespesaService } from '../../despesa.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import * as moment from "moment";
import { ModalService } from 'src/app/compartilhado/componentes/modal/modal.service';


@Component({
  selector: 'app-consulta-despesa',
  templateUrl: './consulta-despesa.component.html',
  styleUrls: ['./consulta-despesa.component.scss']
})
export class ConsultaDespesaComponent implements OnInit {
  paginaAtual: number;
  modalRef: BsModalRef;
  paginacao: Paginacao;
  listaDespesas: Array<any> = [];
  listaDeTipos: Array<any> = [];
  formBuscarDespesa: FormGroup;
  formModalEdicaoDespesa: FormGroup;

  constructor(
    private spinnerServico: Ng4LoadingSpinnerService,
    private despesaServico: DespesaService,
    private formBuilder: FormBuilder,
    private bsModalService: BsModalService,
    private modalService: ModalService
  ) { }

  ngOnInit() {
    this.paginaAtual = 1;
    this.carregarListaTiposEdicaoDespesa();
    this.carregarListaDeDespesas();
    this.iniciarFormBuscarDespesa();
    this.iniciarFormModalEdicaoDespesa();
  }

  carregarListaDeDespesas(): void {
    this.spinnerServico.show();
    this.despesaServico.getListaDespesas(this.paginaAtual).subscribe(despesa => {
      this.listaDespesas = despesa.lista;
      this.paginacao = despesa;
      this.spinnerServico.hide();
    });
  }

  mostrarTabela(): boolean {
    return this.listaDespesas.length > 0;
  }

  iniciarFormBuscarDespesa(): void {
    this.formBuscarDespesa = this.formBuilder.group({
      idDespesa: this.formBuilder.control('', Validators.required, Validators.pattern[("^[1-9][0-9]*$")])
    });
  }

  iniciarFormModalEdicaoDespesa(): void {
    this.formModalEdicaoDespesa = this.formBuilder.group({
      idDespesa: this.formBuilder.control('', Validators.required),
      dataCadastro: this.formBuilder.control('', Validators.required),
      descricao: this.formBuilder.control('', Validators.required),
      valor: this.formBuilder.control('', [Validators.required, Validators.pattern("^[1-9][0-9]*$")]),
      idTipo: this.formBuilder.control('', Validators.required)
    });
  }

  excluirDespesa(idDespesa: number): void {
    this.spinnerServico.show();
    this.despesaServico.excluirDespesa(idDespesa).subscribe(msg => {
      console.log(msg);
      this.spinnerServico.hide();
      this.carregarListaDeDespesas();
    });
  }

  atualizarDespesa(): void {
    let despesa: Despesa = {
      idDespesa: this.formModalEdicaoDespesa.value.idDespesa,
      dataCadastro: this.formModalEdicaoDespesa.value.dataCadastro,
      descricao: this.formModalEdicaoDespesa.value.descricao,
      valor: Number.parseInt(this.formModalEdicaoDespesa.value.valor),
      idTipo: Number.parseInt(this.formModalEdicaoDespesa.value.idTipo)
    }

    this.spinnerServico.show();
    this.despesaServico.atualizarDespesa(despesa).subscribe(msg => {
      if (msg.includes("Erro")) {
        this.modalService.exibirErro(msg);
      } else {
        this.modalService.exibirSucesso(msg);
      }
      this.spinnerServico.hide();
      this.fecharModalAtualizarDespesa();
      this.carregarListaDeDespesas();
    })
  }

  buscarDespesa(): void {
    let idDespesa = this.formBuscarDespesa.value.idDespesa;
    this.formBuscarDespesa.reset();
    this.spinnerServico.show();
    this.despesaServico.buscarDespesa(idDespesa).subscribe(desp => {
      this.listaDespesas = [];
      this.listaDespesas.push(desp);
      this.spinnerServico.hide();
    });
  }

  abrirModalAtualizarDespesa(template: TemplateRef<any>, despesa: Despesa): void {
    this.povoarCamposDoModal(despesa);
    this.modalRef = this.bsModalService.show(template);
  }

  fecharModalAtualizarDespesa(): void {
    this.modalRef.hide();
  }

  carregarListaTiposEdicaoDespesa(): void {
    this.spinnerServico.show();
    this.despesaServico.getListaTipos().subscribe(tipos => {
      this.listaDeTipos = tipos;
      this.spinnerServico.hide();
    });
  }

  pageChange(newPage: number) {
    this.paginaAtual = newPage;
    this.carregarListaDeDespesas();
  }


  mostarDescricaoTipo(idTipo: number): string {
    if (idTipo == 1) {
      return "Alimentação";
    }
    else if (idTipo == 2) {
      return "Lazer";
    }
    else if (idTipo == 3) {
      return "Transporte";
    }
    else if (idTipo == 4) {
      return "Saúde";
    }
    else if (idTipo == 5) {
      return "Educação";
    }
    else if (idTipo == 6) {
      return "Outros";
    }
  }

  private povoarCamposDoModal(despesa: Despesa): void {
    this.formModalEdicaoDespesa.controls['idDespesa'].setValue(despesa.idDespesa);
    this.formModalEdicaoDespesa.controls['dataCadastro'].setValue(despesa.dataCadastro.toString().slice(0, 10));
    this.formModalEdicaoDespesa.controls['descricao'].setValue(despesa.descricao);
    this.formModalEdicaoDespesa.controls['valor'].setValue(despesa.valor);
    this.formModalEdicaoDespesa.controls['idTipo'].setValue(despesa.idTipo);
  }

  private validacaoDeDataMaiorAtual(input: FormControl) {
    let dataAtual = moment().toDate();
    return (input.value > dataAtual);
  }
}


