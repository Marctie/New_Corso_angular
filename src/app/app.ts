import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Prova } from "./prova/prova";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Prova],
  template: `
  <app-prova (mandaDatiEvento)="onRiceviDati($event)" >

  </app-prova>`,
  styles: ''
})
export class App {
  protected readonly title = signal('New_Corso_Angular');

persone =[
  {nome:"Luca",cognome:"Rossi", isOnline:"true", color:'blue'},  
  {nome:"edd",cognome:"rer", isOnline:"true", color:'red'},
  {nome:"dad",cognome:"eee", isOnline:"false", color:'green'},
  {nome:"xer",cognome:"Roqqqssi", isOnline:"false", color:'pinkc'},
]

onRiceviDati(value:string){
console.log(value)
}

}
