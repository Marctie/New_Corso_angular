import { Component, EventEmitter, OnInit, output, Output } from '@angular/core';
import {
  ControlContainer,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-prova',
  imports: [ReactiveFormsModule],
  template: `
    <button (click)="mandaDatiEvento.emit(this.nome)">Manda dati al parente</button>
    <form [formGroup]="homeform" (ngSubmit)="onSubmit()">
      <p>Nome</p>
      @if (!homeform.get('nome') && homeform.get('nome')?.touched){}
      <input type="text" name="nome" formControlName="nome" />
      <p>email</p>
      <input type="email" name="email" formControlName="email" />
      <p>colore</p>
      <input type="colore" name="colore" formControlName="colore" />
      <button [disabled]="!homeform.valid">bottone</button>
    </form>
    <br />
  `,
  styles: '',
})
export class Prova implements OnInit {
  homeform: FormGroup = new FormGroup({});
  mandaDatiEvento = output<string>();
  nome = 'Marco';
  constructor() {}
  ngOnInit(): void {
    this.homeform = new FormGroup({
      nome: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      colore: new FormControl(''),
    });
  }
  onSubmit() {
    console.log(this.homeform);
  }
}
