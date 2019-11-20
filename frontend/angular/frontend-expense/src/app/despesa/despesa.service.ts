/*
* Author: Kelvin Murilo Araújo Santos
* Data: 16/11/2019 
*/
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Despesa, Tipo, CadastrarDespesa, AtualizarDespesa } from '../app.modelo';
import { Observable } from 'rxjs';

const URL_CONTROLADOR: string = 'https://localhost:5001/api';

@Injectable({
  providedIn: 'root'
})
export class DespesaService {
  private headers = new HttpHeaders({
    "Content-Type": "application/json",
    "Accept": "application/json"
  });

  constructor(
    private httpClient: HttpClient
  ) { }

  getListaDespesas(): Observable<Array<Despesa>> {
    return this.httpClient.get<Array<Despesa>>(`${URL_CONTROLADOR}/despesa`);
  }

  getListaTipos(): Observable<Array<Tipo>> {
    return this.httpClient.get<Array<Tipo>>(`${URL_CONTROLADOR}/tipo`);
  }

  excluirDespesa(idDespesa: number): Observable<string> {
    return this.httpClient.delete(`${URL_CONTROLADOR}/despesa/${idDespesa}/`, {
      responseType: 'text'
    });
  }

  cadastrarDespesa(dados: CadastrarDespesa): Observable<string> {
    return this.httpClient.post(`${URL_CONTROLADOR}/despesa`, dados, {
      responseType: "text"
    });
  }

  atualizarDespesa(dados: AtualizarDespesa): Observable<string> {
    return this.httpClient.put(`${URL_CONTROLADOR}/despesa/${dados.idDespesa}`, dados, {
      responseType: "text"
    });
  }

  buscarDespesa(idDespesa: number): Observable<Despesa> {
    return this.httpClient.get<Despesa>(`${URL_CONTROLADOR}/despesa/${idDespesa}`);
  }

}
