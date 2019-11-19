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
    this.listarDespesas();
    //this.iniciarListaDespesas();
    
  }

  listarDespesas(): void {
    this.spinnerServico.show();
    this.despesaServico.getListaDespesas().subscribe(despesa => {
      this.listaDespesas = despesa;
      console.log(this.listaDespesas);
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
}
