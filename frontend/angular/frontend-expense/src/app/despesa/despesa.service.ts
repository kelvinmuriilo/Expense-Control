 /*
 * Author: Kelvin Murilo Araújo Santos
 * Data: 16/11/2019 
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Despesa } from '../app.modelo';
import { Observable } from 'rxjs';

const   URL_CONTROLADOR: string = 'https://localhost:5001/api/despesa';

@Injectable({
  providedIn: 'root'
})
export class DespesaService {

  constructor(

    private httpClient: HttpClient
  ) { }

  getListaDespesas(): Observable<Array<Despesa>>{
    return this.httpClient.get<Array<Despesa>>(`${URL_CONTROLADOR}`);
  }
}
