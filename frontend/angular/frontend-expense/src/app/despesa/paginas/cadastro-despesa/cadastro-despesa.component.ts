import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { DespesaService } from '../../despesa.service';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

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
    private spinnerServico: Ng4LoadingSpinnerService
  ) { }

  ngOnInit() {
    this.carregarListaTipos();
    this.iniciarFromCadastroDespesa();
  }

  iniciarFromCadastroDespesa(): void{
    this.formCadastroDespesa = this.formBuilder.group({
      dataCadastro: this.formBuilder.control('', Validators.required),
      descricao: this.formBuilder.control('', Validators.required),
      valor: this.formBuilder.control('', Validators.required),
      idTipo: this.formBuilder.control('', Validators.required)
    });
  }

  carregarListaTipos(): void{
    this.spinnerServico.show();
    this.despesaServico.getListaTipos().subscribe(tipo => {
      this.listaDeTipos = tipo;
      this.spinnerServico.hide();
    });
  }

}
