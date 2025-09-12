import { AfterViewInit, Component, ElementRef, OnInit, signal, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Prova } from "./prova/prova";
import { Highlight } from "../direttive/highlight";
import { Mioservizio } from './mioservizio';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Prova, Highlight],
  template: `
  <app-prova (mandaDatiEvento)="onRiceviDati($event)" >
  </app-prova>
    
  <p [appHighlight]= "colore"> ciao sono un paragrafo</p>  
  <p [appHighlight]= "colore"> ciao sono un paragrafo</p>

  @for (item of persone; track $index) {
    <p [appHighlight]="colore">Nome:{{item.nome}}</p>
    <p [appHighlight]="colorCognome">Cognome:{{item.cognome}}</p>
  }


  <input #inputSaluti value="ciao"> 
<button (click)="onClick()"></button>  
  `,
  styles: ''
})
export class App implements OnInit, AfterViewInit{
  
  colore='purple';
  colorCognome='red';

  ngAfterViewInit(): void {
        console.log(this.inputSaluti)
        }
  protected readonly title = signal('New_Corso_Angular');
  @ViewChild('inputSaluti')
  inputSaluti!: ElementRef;
  valore= "ciaoooo bellooooooo"




onRiceviDati(value:string){
console.log(value)
}

constructor(private Mioservizio: Mioservizio){
}

 persone=[ 
    {nome:"Marco", cognome:"Peluso" },
    {nome:"Marcox", cognome:"Pelusoxx" },
    {nome:"Marcoxx", cognome:"Pelusoxxx" },
  ]

ngOnInit():void{
console.log(this.ngAfterViewInit)
console.log(this.Mioservizio.list)
}

onClick(){
  console.log(this.inputSaluti)
}


}
