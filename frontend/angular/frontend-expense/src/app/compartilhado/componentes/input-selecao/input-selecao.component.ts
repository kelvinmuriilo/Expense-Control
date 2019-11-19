/**
 * Author: Kelvin Murilo Araújo Santos
 * Data: 18/11/2019
 */

import { 
  Component, 
  OnInit,
  Input,
  Output,
  EventEmitter,
  forwardRef 
} from '@angular/core';

import {
  FormControl,
  NG_VALUE_ACCESSOR,
  ControlValueAccessor
} from '@angular/forms';

import { Tipo } from 'src/app/app.modelo';


/**
 * Componente utilizado para exibir uma selecao de opções.
 * 
 * Exemplo de como usar:
 * <app-selecao-item
      [formControl]="form.controls['selecao']"
      [listaOpcao]="listaTeste"
      (alterarValor)="teste($event)"
      placeholder="Selecione o papel">
    </app-selecao-item>
  *
  * @Input listaOpcao a lista de opções que sera exibida.
  *   Deve ser uma lista do tipo {@link Array<Opcao>}
  * @Input formControl a referencia de um control do FormGroup que esta sendo tratado.
  * @Input classeIcone classe do icone do fontwasome que sera exibida.
  * @Input placeholder texto do placeholder.
  * @Output alterarValor evento que emit o valor do campo toda vez que o mesmo é alterado.
  */

@Component({
  selector: 'app-input-selecao',
  templateUrl: './input-selecao.component.html',
  styleUrls: ['./input-selecao.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => InputSelecaoComponent),
    multi: true
  }]
})
export class InputSelecaoComponent implements OnInit, ControlValueAccessor {


  private readonly OPCAO_PLACEHOLDER: string = "placeholder";

  @Input() public listaOpcao: Array<Tipo>;
  @Input() public formControl: FormControl;
  @Input() public classeIcone: string;
  @Input() public placeholder: string;

  @Output() public alterarValor: EventEmitter<any> = new EventEmitter<any>();

  private valor: any;
  private onChange: Function;
  private onTouched: Function;

  constructor() { }

  ngOnInit() {

    if (!this.formControl) {
      throw Error("Informe o control do componente de selecão.");
    }
  }

  isInvalido(): boolean {
    return !this.formControl.valid && !this.formControl.pristine;
  }

  writeValue(valor: any): void {
    this.valor = valor;
    this.alterarValor.emit(this.valor);
  }
  registerOnChange(funcao: Function): void {
    this.onChange = funcao;
  }
  registerOnTouched(funcao: Function): void {
    this.onTouched = funcao;
  }
}
