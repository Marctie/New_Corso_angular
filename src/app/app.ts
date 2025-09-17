import {
  AfterViewInit,
  Component,
  ElementRef,
  inject,
  OnInit,
  signal,
  ViewChild,
} from '@angular/core';
import { Router, RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { Prova } from './prova/prova';
import { Highlight } from '../direttive/highlight';
import { Mioservizio } from './mioservizio';
import { Login } from './login/login';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [Prova, Highlight, Login, RouterModule, RouterLink, RouterOutlet],
  template: `
    <!-- <app-prova (mandaDatiEvento)="onRiceviDati($event)" >
    </app-prova> -->
    <!-- <p [appHighlight]="colore">ciao sono un paragrafo</p>
    <p [appHighlight]="colore">ciao sono un paragrafo</p> -->
    <!--<app-prova> </app-prova>-->
    <!-- <input #inputSaluti placeholder="scrivimi qualcosa" /> -->
    <!-- <button (click)="onRiceviDati(inputSaluti)">sono un bottone</button> -->

    @if(mioservizio.showAll){ 
      @for (item of persone; track $index) { @if (item.isOnline === true) {
    <p [appHighlight]="colore">
      Nome:{{ item.nome }} Cognome:{{ item.cognome }} {{ item.isOnline ? 'online' : 'offline' }}
    </p>
    } @else {
    <p [appHighlight]="colorCognome">
      Nome:{{ item.nome }} Cognome:{{ item.cognome }} {{ item.isOnline ? 'online' : 'offline' }}
    </p>
    } }
    <button (click)="toLogin()" class="center">Vai alla Login</button>
    }
    <router-outlet></router-outlet>
  `,
  styles: `
  .center{
    display:flex;
    alignment:center
  }
  `,
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

  constructor(public mioservizio: Mioservizio, private router: Router) {}

  persone = [
    { nome: 'Marco', cognome: 'Peluso', isOnline: true },
    { nome: 'Marco 2', cognome: 'Peluso 2', isOnline: false },
  ];

  ngOnInit(): void {
    console.log(this.mioservizio.list);
    this.mioservizio.showAll = true;
    
  }

  onClick() {
    console.log(this.inputSaluti);
  }

  onRiceviDati(value: HTMLInputElement) {
    console.log(value.value);
  }

  toLogin() {
    this.router.navigate(['/login']);
    this.mioservizio.showAll = false
  }


}
