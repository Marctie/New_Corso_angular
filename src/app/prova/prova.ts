import { Component, EventEmitter, OnInit, output, Output } from '@angular/core';

@Component({
  selector: 'app-prova',
  imports: [],
  template: `
  <button (click)="mandaDatiEvento.emit(this.nome)" > Manda dati al parente</button>

  `,
  styles: ''
})
export class Prova implements OnInit{

mandaDatiEvento =output<string>()

nome= 'Marco' 

constructor(){}

ngOnInit():void{

}
}
