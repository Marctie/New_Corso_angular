import { AfterViewInit, Component, ElementRef, OnInit, signal, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Prova } from "./prova/prova";
import { Highlight } from "../direttive/highlight";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Prova, Highlight],
  template: `
  <app-prova (mandaDatiEvento)="onRiceviDati($event)" >
  </app-prova>
    
  <p [appHighlight]= "colore"> ciao sono un paragrafo</p>  
  <p [appHighlight]= "colore"> ciao sono un paragrafo</p>


  <input #inputSaluti value="ciao"> 
<button (click)="onClick()"></button>  
  `,
  styles: ''
})
export class App implements OnInit, AfterViewInit{
  ngAfterViewInit(): void {
        console.log(this.inputSaluti)
        }
  protected readonly title = signal('New_Corso_Angular');
  @ViewChild('inputSaluti')
  inputSaluti!: ElementRef;
  valore= "ciaoooo bellooooooo"
colore='purple';
persone =[
  {nome:"Luca",cognome:"Rossi", isOnline:"true", color:'blue'},  
  {nome:"edd",cognome:"rer", isOnline:"true", color:'red'},
  {nome:"dad",cognome:"eee", isOnline:"false", color:'green'},
  {nome:"xer",cognome:"Roqqqssi", isOnline:"false", color:'pinkc'},
]

onRiceviDati(value:string){
console.log(value)
}

ngOnInit():void{
console.log(this.ngAfterViewInit)
}

onClick(){
  console.log(this.inputSaluti)
}


}
