/**
 * Author: Kelvin Murilo Araújo Santos
 * Data: 15/11/2019 
 */

import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from '@angular/core';

import { CadastroDespesaComponent } from './despesa/paginas/cadastro-despesa/cadastro-despesa.component';
import { ConsultaDespesaComponent } from './despesa/paginas/consulta-despesa/consulta-despesa.component';

const ROUTES: Routes = [
    { path: 'cadastro-despesa', component: CadastroDespesaComponent },
    { path: '', component: ConsultaDespesaComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(ROUTES);