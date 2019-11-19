 /*
 * Author: Kelvin Murilo Araújo Santos
 * Data: 16/11/2019 
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Despesa, Tipo } from '../app.modelo';
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
}
