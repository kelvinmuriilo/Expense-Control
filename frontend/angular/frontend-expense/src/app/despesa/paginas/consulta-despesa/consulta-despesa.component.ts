import { Component, OnInit } from '@angular/core';


import { Despesa } from 'src/app/app.modelo';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { DespesaService } from '../../despesa.service';


@Component({
  selector: 'app-consulta-despesa',
  templateUrl: './consulta-despesa.component.html',
  styleUrls: ['./consulta-despesa.component.scss']
})
export class ConsultaDespesaComponent implements OnInit {
  listaDespesas: Despesa[];

  constructor(
    private spinnerServico: Ng4LoadingSpinnerService,
    private despesaServico: DespesaService
  ) { }

  ngOnInit() {
    this.listarDespesas();
    console.log(this.listaDespesas);
  }

  listarDespesas(): void{
    this.spinnerServico.show();
    this.despesaServico.getListaDespesas().subscribe(despesa =>{
      this.listaDespesas = despesa;
      this.spinnerServico.hide();
    });
  }

}
