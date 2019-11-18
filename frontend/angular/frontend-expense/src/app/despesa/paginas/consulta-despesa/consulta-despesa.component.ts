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

  constructor(
    private spinnerServico: Ng4LoadingSpinnerService,
    private despesaServico: DespesaService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.iniciarFormBuscarDespesa();
    //this.listarDespesas();
    this.iniciarListaDespesas();
    console.log(this.listaDespesas);
  }

  listarDespesas(): void {
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

  iniciarListaDespesas(): void {
    this.listaDespesas = [
      {
        idDespesa: 1,
        descricao: 'bus',
        idTipo: 1,
        dataCadastro: this.transformarStrEmData('2019-03-30T00:00:00'),
        valor: 25.54
      },
      {
        idDespesa: 2,
        descricao: 'lunch',
        idTipo: 1,
        dataCadastro: this.transformarStrEmData('2019-07-05T00:00:00'),
        valor: 12
      },
      {
        idDespesa: 3,
        descricao: 'beer',
        idTipo: 1,
        dataCadastro: this.transformarStrEmData('2019-07-05T00:00:00'),
        valor: 5
      }
    ];
  }

  transformarStrEmData(string: string): Date {
    let data = new Date(string);
    return data;
  }

}
