/**
 * Author: Kelvin Murilo Araújo Santos
 * Data: 18/11/2019
 */

import {
  Component,
  OnInit,
  Input,
  forwardRef,
  Output,
  EventEmitter
} from '@angular/core';

import {
  FormControl,
  NG_VALUE_ACCESSOR,
  ControlValueAccessor
} from '@angular/forms';


@Component({
  selector: 'app-input-texto',
  templateUrl: './input-texto.component.html',
  styleUrls: ['./input-texto.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => InputTextoComponent),
    multi: true
  }]
})

/**
 * Exemplo de como utilizar:
 * <app-input 
      [formControl]="form.controls['email']"
      msgErro="Informe um e-mail válido."
      placeholder="Email"
      classeIcone="fa-envelope">
  </app-input> 
 */
export class InputTextoComponent implements OnInit, ControlValueAccessor {
  @Input() public formControl: FormControl;
  @Input() public classeIcone: string;
  @Input() public placeholder: string;
  @Input() public msgErro: string;
  @Input() public tipo: string = 'text';
  @Input() public mascara?: string;
  @Input() public prefix?: string = '';
  @Input() public separator?: string = '';

  @Output() public alterarValor: EventEmitter<string> = new EventEmitter<string>();

  private valor: string;
  private onChange: Function;
  private onTouched: Function;

  constructor() { }

  ngOnInit() {
    if (!this.formControl) {
      throw Error("Informe o form control do componente input");
    }
  }

  isInvalido(): boolean {
    return !this.formControl.valid && !this.formControl.pristine;
  }

  writeValue(valor: string): void {
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
