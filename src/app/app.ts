import { AfterViewInit, Component, ElementRef, OnInit, signal, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Prova } from './prova/prova';
import { Highlight } from '../direttive/highlight';
import { Mioservizio } from './mioservizio';
import { Login } from "./login/login";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Prova, Highlight, Login],
  template: `
    <!-- <app-prova (mandaDatiEvento)="onRiceviDati($event)" >
  </app-prova> -->

    <p [appHighlight]="colore">ciao sono un paragrafo</p>
    <p [appHighlight]="colore">ciao sono un paragrafo</p>

    @for (item of persone; track $index) { @if (item.isOnline === true) {
    <p [appHighlight]="colore">
      Nome:{{ item.nome }} Cognome:{{ item.cognome }} {{ item.isOnline ? 'online' : 'offline' }}
    </p>
    } @else {
    <p [appHighlight]="colorCognome">
      Nome:{{ item.nome }} Cognome:{{ item.cognome }} {{ item.isOnline ? 'onlinee' : 'offlinee' }}
    </p>
    } }


    <app-prova> </app-prova>
    <input #inputSaluti placeholder="scrivimi qqualcosa" />
    <button (click)="onRiceviDati(inputSaluti)">sono un bottonee</button>

<app-login></app-login>
  `,
  styles: '',
})
export class App implements OnInit, AfterViewInit {
  colore = 'green';
  colorCognome = 'red';

  ngAfterViewInit(): void {
    console.log(this.inputSaluti);
  }
  protected readonly title = signal('New_Corso_Angular');
  @ViewChild('inputSaluti')
  inputSaluti!: ElementRef;
  valore = 'ciaoooo bellooooooo';

  onRiceviDati(value: HTMLInputElement) {
    console.log(value.value);
  }

  constructor(private Mioservizio: Mioservizio) {}

  persone = [
    { nome: 'Marco', cognome: 'Peluso', isOnline: true },
    { nome: 'Marcox', cognome: 'Pelusoxx', isOnline: false },
    { nome: 'Marcoxx', cognome: 'Pelusoxxx', isOnline: true },
    { nome: 'Marcoxfx', cognome: 'Pelusofxxx', isOnline: false },
  ];

  ngOnInit(): void {
    console.log(this.ngAfterViewInit);
    console.log(this.Mioservizio.list);
  }

  onClick() {
    console.log(this.inputSaluti);
  }
}
