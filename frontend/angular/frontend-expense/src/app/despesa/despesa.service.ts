 /*
 * Author: Kelvin Murilo Araújo Santos
 * Data: 16/11/2019 
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Despesa, Tipo, CadastrarDespesa } from '../app.modelo';
import { Observable } from 'rxjs';

const   URL_CONTROLADOR: string = 'https://localhost:5001/api';

@Injectable({
  providedIn: 'root'
})
export class DespesaService {

  constructor(

    private httpClient: HttpClient
  ) { }

  getListaDespesas(): Observable<Array<Despesa>>{
    return this.httpClient.get<Array<Despesa>>(`${URL_CONTROLADOR}/despesa`);
  }

  getListaTipos(): Observable<Array<Tipo>>{
    return this.httpClient.get<Array<Tipo>>(`${URL_CONTROLADOR}/tipo`);
  }

  excluirDespesa(idDespesa: number): Observable<any>{
    console.log("Excluir despesa: ", idDespesa)
    return this.httpClient.delete(`${URL_CONTROLADOR}/${idDespesa}`);
  }

  cadastrarDespesa(dados: CadastrarDespesa): Observable<any>{
    console.log('Cadastrar: ', dados)
    return this.httpClient.post(`${URL_CONTROLADOR}/despesa`,JSON.stringify(dados),{
      responseType: 'text'
    });
  }
}
