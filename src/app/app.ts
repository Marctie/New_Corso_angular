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

@Component({
  selector: 'app-root',
  imports: [Prova, Highlight, Login, RouterModule, RouterLink, RouterOutlet],
  template: `
    <!-- <app-prova (mandaDatiEvento)="onRiceviDati($event)" >
  </app-prova> -->

    <!-- <p [appHighlight]="colore">ciao sono un paragrafo</p>
    <p [appHighlight]="colore">ciao sono un paragrafo</p> -->

    @if(showAll){ @for (item of persone; track $index) { @if (item.isOnline === true) {
    <p [appHighlight]="colore">
      Nome:{{ item.nome }} Cognome:{{ item.cognome }} {{ item.isOnline ? 'online' : 'offline' }}
    </p>
    } @else {
    <p [appHighlight]="colorCognome">
      Nome:{{ item.nome }} Cognome:{{ item.cognome }} {{ item.isOnline ? 'onlinee' : 'offlinee' }}
    </p>
    } }
    <!--<app-prova> </app-prova>-->
    <input #inputSaluti placeholder="scrivimi qqualcosa" />
    <button (click)="onRiceviDati(inputSaluti)">sono un bottonee</button>
    <button (click)="toLogin()" >Vai alla Login</button>
    }
    <router-outlet></router-outlet>
  `,
  styles: '',
})
export class App implements OnInit, AfterViewInit {
  colore = 'green';
  colorCognome = 'red';
  showAll = true;
  ngAfterViewInit(): void {
    console.log(this.inputSaluti);
  }
  protected readonly title = signal('New_Corso_Angular');

  @ViewChild('inputSaluti')
  inputSaluti!: ElementRef;
  valore = 'ciaoooo bellooooooo';

   


  constructor(private Mioservizio: Mioservizio, private router: Router) {}

  persone = [
    { nome: 'Marco', cognome: 'Peluso', isOnline: true },
    { nome: 'Marcox', cognome: 'Pelusoxx', isOnline: false },
    { nome: 'Marcoxx', cognome: 'Pelusoxxx', isOnline: true },
    { nome: 'Marcoxfx', cognome: 'Pelusofxxx', isOnline: false },
  ];

  ngOnInit(): void {
    console.log(this.ngAfterViewInit);
    console.log(this.Mioservizio.list);
    this.showAll = true;
  }

  onClick() {
    console.log(this.inputSaluti);
  }

  onRiceviDati(value: HTMLInputElement) {
    console.log(value.value);
  }

  toLogin() {
    this.router.navigate(['/login']);
    this.showAll = false;
  }
}
