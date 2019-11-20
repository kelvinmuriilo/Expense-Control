import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Despesa } from 'src/app/app.modelo';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { DespesaService } from '../../despesa.service';



@Component({
  selector: 'app-consulta-despesa',
  templateUrl: './consulta-despesa.component.html',
  styleUrls: ['./consulta-despesa.component.scss']
})
export class ConsultaDespesaComponent implements OnInit {
  listaDespesas: Despesa[] = [];
  formBuscarDespesa: FormGroup;
  formModalEdicaoDespesa: FormGroup;

  constructor(
    private spinnerServico: Ng4LoadingSpinnerService,
    private despesaServico: DespesaService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.iniciarFormBuscarDespesa();
    this.iniciarFormModalEdicaoDespesa();
    this.carregarListaDeDespesas();
  }

  carregarListaDeDespesas(): void {
    this.spinnerServico.show();
    this.despesaServico.getListaDespesas().subscribe(despesa => {
      this.listaDespesas = despesa;
      this.spinnerServico.hide();
    });
  }

  mostrarTabela(): boolean {
    return this.listaDespesas.length > 0;
  }

  iniciarFormBuscarDespesa(): void {
    this.formBuscarDespesa = this.formBuilder.group({
      idDespesa: this.formBuilder.control('', Validators.required, Validators.pattern[("^[0-9]")])
    });
  }

  iniciarFormModalEdicaoDespesa(): void {
    this.formModalEdicaoDespesa = this.formBuilder.group({
      dataCadastro: this.formBuilder.control('', Validators.required),
      descricao: this.formBuilder.control('', Validators.required),
      valor: this.formBuilder.control('', Validators.required),
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
    this.spinnerServico.show();
    this.despesaServico.atualizarDespesa(this.formModalEdicaoDespesa.value).subscribe(msg => {
      console.log(msg);
      this.spinnerServico.hide();
    })
  }

  buscarDespesa(): void {
    let idDespesa = this.formBuscarDespesa.value.idDespesa;
    this.formBuscarDespesa.reset();
    this.spinnerServico.show();
    this.despesaServico.buscarDespesa(idDespesa).subscribe(desp => {
      this.listaDespesas = [];
      this.listaDespesas.push(desp);
    });
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
}
