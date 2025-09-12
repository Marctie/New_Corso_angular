import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class Highlight {

  constructor(private element:ElementRef) {
    this.element.nativeElement.style.backgroundColor='yellow',

    this.element.nativeElement.style.textcolor='red'
   }
 
@HostListener('mouseenter') onMouseEnter(){
this.cambiaColore(this.appHighlight) 
console.log(this.onMouseLeave)
this.cambiaColoreCognome(this.appCognome)  
console.log(this.onMouseLeave)
}

@HostListener('mouseleave') onMouseLeave(){
this.cambiaColore(this.appHighlight)  
console.log(this.onMouseEnter)
this.cambiaColoreCognome(this.appCognome)  
console.log(this.onMouseEnter)
}



//A 
cambiaColore(colore:string){
  this.element.nativeElement.style.backgroundColor = colore
  console.log(colore)
}
cambiaColoreCognome(colorCognome:string){
  this.element.nativeElement.style.textcolor = colorCognome
  console.log(colorCognome)
}
//C
@Input () appHighlight =''
@Input () appCognome =''


}
